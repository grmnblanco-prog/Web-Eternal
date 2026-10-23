/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_EMAIL, OFFICIAL_PHONE, buildWhatsAppUrl } from '../utils/booking';
import { LOCATIONS } from '../data/locations';

interface ContactViewProps {
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sede, setSede] = useState('chia');
  const [sent, setSent] = useState(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const sedeName = sede === 'chia' ? 'Chía' : 'Zipaquirá';
    const text = `Hola, mi nombre es ${name || 'una persona interesada'}. Quisiera información sobre la sede de ${sedeName}: ${message || 'Quisiera conocer disponibilidad de valoración.'}`;
    const url = buildWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
          Atención al Paciente
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#67235E]">
          Contacto Directo
        </h1>
        <p className="text-sm sm:text-base text-[#494D50] leading-relaxed">
          Comunícate con nuestro equipo de atención para agendar tu valoración, resolver dudas de ubicación o recibir asesoría sobre nuestros procedimientos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-[#CCD6DF] p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="font-serif text-xl font-bold text-[#67235E]">
              Canales Oficiales
            </h2>

            <div className="space-y-4 text-xs">
              <a
                href={buildWhatsAppUrl('Hola, quisiera información sobre los servicios de Eternal Institute.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#25D366]/10 text-[#333333] hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#67235E] block text-sm">WhatsApp Oficial</span>
                  <span className="text-gray-600 font-medium">{OFFICIAL_PHONE} (Chía y Zipaquirá)</span>
                </div>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] text-[#333333] hover:bg-[#FAF7F2]/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#67235E] text-[#D4A73A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#67235E] block text-sm">Correo Electrónico</span>
                  <span className="text-gray-600 font-medium break-all">{OFFICIAL_EMAIL}</span>
                </div>
              </a>

              <a
                href="https://instagram.com/eternalinstituteestetica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-pink-50 text-[#333333] hover:bg-pink-100/70 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#CC3366] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#67235E] block text-sm">Instagram Oficial</span>
                  <span className="text-gray-600 font-medium">@eternalinstituteestetica</span>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-[#CCD6DF]/60 text-[11px] text-[#494D50] space-y-1.5">
              <p className="flex items-center gap-1.5 font-medium text-[#67235E]">
                <Clock className="w-3.5 h-3.5 text-[#B88508]" />
                Horarios Generales
              </p>
              <p>Lunes a Viernes: 10:00 a. m. a 7:00 p. m.</p>
              <p>Sábados: 10:00 a. m. a 1:00 p. m. (hasta el mediodía)</p>
              <p className="text-gray-500">Domingos y festivos: Sin servicio</p>
            </div>
          </div>
        </div>

        {/* Quick Message Box */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#CCD6DF] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl font-bold text-[#67235E]">
              Escríbenos tu Consulta
            </h2>
            <p className="text-xs text-[#494D50]">
              Te responderemos directamente por WhatsApp para coordinar tu cita o brindarte detalles.
            </p>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#67235E]">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Carolina Ramos"
                className="w-full px-4 py-2.5 rounded-xl border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#67235E]">
                Sede para tu consulta
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSede('chia')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors ${
                    sede === 'chia'
                      ? 'bg-[#67235E] text-white border-[#67235E]'
                      : 'bg-white border-[#CCD6DF] text-[#494D50]'
                  }`}
                >
                  Sede Chía
                </button>
                <button
                  type="button"
                  onClick={() => setSede('zipaquira')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors ${
                    sede === 'zipaquira'
                      ? 'bg-[#67235E] text-white border-[#67235E]'
                      : 'bg-white border-[#CCD6DF] text-[#494D50]'
                  }`}
                >
                  Sede Zipaquirá
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#67235E]">
                Mensaje o inquietud
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="¿En qué servicio estás interesado o qué dudas tienes sobre la valoración?"
                className="w-full px-4 py-2.5 rounded-xl border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Enviar consulta por WhatsApp ({OFFICIAL_PHONE})</span>
            </button>

            {sent && (
              <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
                ¡Se ha abierto la conversación de WhatsApp con tu mensaje precargado!
              </p>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};
