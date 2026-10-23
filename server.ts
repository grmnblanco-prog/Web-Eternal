/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Shared Gemini client setup on server
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `
Eres "Elena", la Asistente Virtual Inteligente de Eternal Institute Medicina Estética Responsable (con sedes en Chía y Zipaquirá, Cundinamarca, Colombia).
Tu objetivo es orientar a pacientes y clientes potenciales con calidez, cercanía, claridad y empatía, de manera persuasiva pero NUNCA invasiva, agresiva o insistente.

REGLAS DEONTOLÓGICAS NO NEGOCIABLES:
1. NUNCA prometas resultados absolutos ("100% garantizado", "cura definitiva", "elimina de raíz", "notable en una sesión"). La respuesta biológica de cada cuerpo es única. Usa siempre términos como "orientado a", "dirigido a", "acompañamos tu proceso".
2. NUNCA inventes precios, paquetes ni promociones con descuento en el chat. Explica amablemente que en Eternal Institute no se manejan tarifas genéricas porque cada protocolo se diseña exclusivamente a la medida de la persona tras su valoración clínica.
3. Resalta el diferencial del centro: "Seguimiento personalizado, responsable y detallado".
4. Dirigida por Martha Lucía Aguilera Muñoz (Enfermera, especialista en sobrepeso y rejuvenecimiento, life coach y esteticista con casi veinte años de experiencia).
5. Sedes y Horarios:
   - Sede Chía: Avenida Pradilla 2 Este 71, local 129 (Centro Comercial Sabana Norte).
   - Sede Zipaquirá: Centro Comercial La Casona, local 230.
   - Horarios: Lunes a Viernes de 10:00 a. m. a 7:00 p. m. Sábados de 10:00 a. m. a 1:00 p. m. Domingos y festivos sin servicio.
6. WhatsApp oficial: 3114656836 (+573114656836).
7. Correo oficial: contactoeternalinstitute@gmail.com.
8. Servicios (15 activos):
   - Manejo de sobrepeso, Moldeo corporal, Celulitis, Tonificación, Rejuvenecimiento facial, Armonización facial, Depilación láser definitiva, Maquillaje microblading, Maquillaje permanente, Relajación, Tratamiento de acné, Tratamiento de manchas, Líneas de expresión, Coaching, Bronceo.
   - Los 3 prioritarios son: Manejo de sobrepeso, Rejuvenecimiento facial y Depilación láser definitiva.
9. Invita cordialmente a agendar una "valoración previa sin compromiso de compra" o a escribir directamente por WhatsApp si desean atención inmediata con una coordinadora.

Estilo de respuesta:
- Respuestas claras, humanas, persuasivas y concisas (2 a 4 párrafos cortos).
- Tono elegante, profesional y acogedor.
- Cierra con una pregunta abierta o facilitando el contacto por WhatsApp o agendamiento en la web.
`;

// API endpoint for Chat
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, userMessage } = req.body;

    const currentPrompt = userMessage || (messages && messages[messages.length - 1]?.content) || '';
    if (!currentPrompt) {
      res.status(400).json({ error: 'No se envió mensaje para responder.' });
      return;
    }

    // If Gemini client is configured
    if (aiClient) {
      try {
        // Construct conversation turns
        const conversationHistory = (messages || []).map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        // Add current prompt if not already last message
        const lastTurn = conversationHistory[conversationHistory.length - 1];
        if (!lastTurn || lastTurn.role !== 'user' || lastTurn.parts[0]?.text !== currentPrompt) {
          conversationHistory.push({
            role: 'user',
            parts: [{ text: currentPrompt }],
          });
        }

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: conversationHistory,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.9,
          },
        });

        const replyText = response.text || 'Con gusto te oriento sobre nuestros servicios y sedes en Chía y Zipaquirá.';
        res.json({ reply: replyText, source: 'gemini' });
        return;
      } catch (geminiError: any) {
        console.error('Error calling Gemini API:', geminiError?.message || geminiError);
        // Fall back gracefully to knowledge-base response
      }
    }

    // Knowledge-base heuristic response (if API key not set or network issue)
    const lower = currentPrompt.toLowerCase();
    let reply = '';

    if (lower.includes('precio') || lower.includes('costo') || lower.includes('tarifa') || lower.includes('cuanto vale') || lower.includes('cuánto')) {
      reply = `En Eternal Institute no manejamos precios genéricos por este medio, ya que cada tratamiento se formula de manera individual tras una valoración profesional presencial. Cada organismo tiene necesidades únicas y el plan de sesiones se ajusta con total honestidad médica. ¿Te gustaría agendar una valoración previa en nuestra sede de Chía o Zipaquirá? O si prefieres, podemos coordinar por WhatsApp al 3114656836.`;
    } else if (lower.includes('sede') || lower.includes('donde') || lower.includes('dónde') || lower.includes('chía') || lower.includes('zipaquirá') || lower.includes('ubicaci')) {
      reply = `Contamos con dos sedes diseñadas para tu comodidad:\n\n• Sede Chía: Centro Comercial Sabana Norte, Local 129 (Avenida Pradilla 2 Este 71).\n• Sede Zipaquirá: Centro Comercial La Casona, Local 230.\n\nAtendemos de lunes a viernes de 10:00 a. m. a 7:00 p. m. y los sábados de 10:00 a. m. a 1:00 p. m. (domingos y festivos sin servicio). ¿Cuál sede te queda más cerca?`;
    } else if (lower.includes('horario') || lower.includes('sabado') || lower.includes('sábado') || lower.includes('atienden')) {
      reply = `Nuestros horarios de atención en ambas sedes (Chía y Zipaquirá) son:\n\n• Lunes a Viernes: 10:00 a. m. a 7:00 p. m.\n• Sábados: 10:00 a. m. a 1:00 p. m. (hasta el mediodía).\n• Domingos y festivos: Sin servicio.\n\n¿Deseas programar tu cita en jornada de mañana o tarde?`;
    } else if (lower.includes('sobrepeso') || lower.includes('peso') || lower.includes('adelgazar') || lower.includes('grasa')) {
      reply = `Nuestro servicio de Manejo de sobrepeso es un programa integral no invasivo liderado por Martha Lucía Aguilera Muñoz (enfermera y especialista en sobrepeso). Incluye acompañamiento nutricional, seguimiento continuo en cada sesión y aparatología estética complementaria adaptada a tu contextura, sin métodos extremos ni falsas promesas. Requiere una valoración previa individual. ¿Te gustaría solicitar tu valoración?`;
    } else if (lower.includes('facial') || lower.includes('rejuvenecimiento') || lower.includes('arruga') || lower.includes('mancha') || lower.includes('acné')) {
      reply = `En cuidado facial ofrecemos tratamientos no invasivos orientados a la luminosidad, hidratación profunda y armonía del rostro, tales como Rejuvenecimiento facial, Armonización facial, Tratamiento de acné y Tratamiento de manchas. Todo protocolo se define tras analizar tu biotipo cutáneo en cabina. ¿Deseas consultar por alguna necesidad facial en particular?`;
    } else if (lower.includes('depilacion') || lower.includes('depilación') || lower.includes('laser') || lower.includes('láser')) {
      reply = `Nuestra depilación láser definitiva utiliza tecnología aprobada con sistema de enfriamiento para máximo confort, orientada a la reducción progresiva del vello en zonas corporales o faciales. Se calibra según tu fototipo de piel y grosor del vello previa prueba de sensibilidad. ¿En qué zona corporal o facial estás interesado/a?`;
    } else if (lower.includes('directora') || lower.includes('martha') || lower.includes('quien') || lower.includes('quién') || lower.includes('doctora')) {
      reply = `La fundadora y directora de Eternal Institute es Martha Lucía Aguilera Muñoz: enfermera profesional, especialista en sobrepeso y rejuvenecimiento, life coach y esteticista con casi veinte años de experiencia en el sector salud. Además, en cada sede contamos con auxiliares de enfermería dedicadas para una atención cálida y segura.`;
    } else if (lower.includes('valoracion') || lower.includes('valoración') || lower.includes('cita') || lower.includes('agendar')) {
      reply = `La valoración profesional es un espacio de asesoría clínica individual donde evaluamos las condiciones de tu piel o contextura física. No tiene ningún compromiso de compra y sirve para brindarte una orientación honesta sobre qué procedimientos son adecuados para ti. Puedes solicitarla directamente a través de nuestro formulario en la web o enviando un mensaje a nuestro WhatsApp oficial 3114656836.`;
    } else {
      reply = `¡Hola! Con mucho gusto te oriento sobre Eternal Institute. Somos un centro de estética y medicina estética responsable con sedes en Chía (C.C. Sabana Norte) y Zipaquirá (C.C. La Casona). Nos especializamos en manejo de sobrepeso, rejuvenecimiento facial, depilación láser y bienestar con seguimiento individual. ¿Tienes alguna pregunta sobre nuestros procedimientos, o prefieres agendar tu valoración previa? También puedes escribirnos directamente por WhatsApp al 3114656836.`;
    }

    res.json({ reply, source: 'knowledge-base' });
  } catch (err: any) {
    console.error('Chat endpoint error:', err);
    res.status(500).json({
      error: 'Lo sentimos, ocurrió una dificultad técnica. Puedes escribirnos directamente por WhatsApp al 3114656836.',
    });
  }
});

// Setup Vite in development or serve static files in production
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
