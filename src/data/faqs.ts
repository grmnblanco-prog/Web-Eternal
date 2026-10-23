/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'valoracion' | 'tratamientos' | 'agendamiento' | 'seguimiento';
}

export const FAQS: FAQItem[] = [
  {
    id: 'que-es-valoracion',
    question: '¿Qué es una valoración profesional y para qué sirve?',
    category: 'valoracion',
    answer: 'La valoración es una consulta diagnóstica individual donde un profesional evalúa las condiciones de tu piel, tu contextura corporal, tus antecedentes y tus objetivos de bienestar. Sirve para orientarte de manera honesta sobre qué procedimientos son adecuados para tu caso particular y cuáles no, estableciendo un protocolo seguro y realista antes de tomar cualquier decisión.'
  },
  {
    id: 'obligacion-comprar',
    question: '¿Es obligatorio adquirir o iniciar un tratamiento durante la valoración?',
    category: 'valoracion',
    answer: 'No. La valoración es un espacio de asesoría profesional sin ningún compromiso de compra. Nuestro compromiso es brindarte un criterio clínico y estético responsable para que tomes la decisión con total tranquilidad, claridad e información.'
  },
  {
    id: 'resultados-iguales',
    question: '¿Los resultados son iguales en todas las personas?',
    category: 'tratamientos',
    answer: 'No, y en Eternal Institute somos enfáticos y responsables al aclararlo. La respuesta biológica de cada organismo depende de múltiples factores individuales: edad, genética, estado metabólico, calidad y elasticidad de la piel, hábitos nutricionales, nivel de actividad física y adherencia a las indicaciones domiciliarias. Por esta razón no ofrecemos promesas uniformes ni resultados garantizados.'
  },
  {
    id: 'como-se-agenda',
    question: '¿Cómo se agenda una cita de valoración o tratamiento?',
    category: 'agendamiento',
    answer: 'Puedes agendar directamente a través del formulario de este sitio web seleccionando tu sede de preferencia (Chía o Zipaquirá), o enviando un mensaje directo a nuestra línea de WhatsApp 3114656836. Nuestro equipo de coordinación te responderá para asignarte el día y hora más conveniente.'
  },
  {
    id: 'si-no-puedo-asistir',
    question: '¿Qué pasa si no puedo asistir a mi cita programada?',
    category: 'agendamiento',
    answer: 'Entendemos que pueden presentarse imprevistos. Te solicitamos notificarnos con al menos 24 horas de antelación a través de nuestra línea de WhatsApp (3114656836) para poder reprogramar tu cita sin contratiempos y permitir que otra persona pueda aprovechar ese espacio en cabina.'
  },
  {
    id: 'diferencial-seguimiento',
    question: '¿En qué consiste el seguimiento personalizado que distingue a Eternal Institute?',
    category: 'seguimiento',
    answer: 'Es nuestro pilar fundamental. En lugar de aplicar sesiones aisladas, acompañamos tu proceso de principio a fin con revisiones periódicas, evaluación de evolución en cada cita, ajustes en la intensidad de los procedimientos y comunicación constante con nuestras auxiliares de enfermería y la directora del centro.'
  },
  {
    id: 'sedes-y-horarios',
    question: '¿Dónde están ubicadas las sedes y en qué horarios atienden?',
    category: 'agendamiento',
    answer: 'Contamos con dos sedes: en Chía en el Centro Comercial Sabana Norte (Avenida Pradilla 2 Este 71, local 129) y en Zipaquirá en el Centro Comercial La Casona (local 230). Atendemos de lunes a viernes de 10:00 a. m. a 7:00 p. m. y los sábados hasta el mediodía (1:00 p. m.). Domingos y festivos no tenemos servicio.'
  }
];
