/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';
import {
  BookingData,
  validateBookingForm,
  buildWhatsAppUrl,
  getWhatsAppContextMessage,
  OFFICIAL_EMAIL,
  OFFICIAL_PHONE
} from '../utils/booking';
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Ban,
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  MapPin,
  Stethoscope,
  Send
} from 'lucide-react';

interface ValuationViewProps {
  initialService?: string;
  onNavigate: (path: string) => void;
}

export const ValuationView: React.FC<ValuationViewProps> = ({ initialService, onNavigate }) => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    sede: 'chia',
    service: initialService || 'Manejo de sobrepeso',
    preferredTime: 'tarde',
    preferredDay: '',
    comments: '',
    dataProtectionAccepted: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    setErrors(validation.errors);

    if (validation.isValid) {
      const msg = getWhatsAppContextMessage({ bookingData: formData });
      const waUrl = buildWhatsAppUrl(msg);
      setSubmittedWhatsAppUrl(waUrl);
      setIsSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
      
      {/* Header and Value Proposition (From Stitch) */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EDE9] border border-[#CCD6DF]">
          <span className="w-1.5 h-1.5 bg-[#CC3366]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#494D50]">
            Protocolo Médico Inicial
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#67235E] uppercase tracking-tight">
          Agenda tu Valoración Profesional
        </h1>
        <p className="text-sm sm:text-base text-[#494D50] leading-relaxed">
          Un diagnóstico personalizado guiado por la ciencia, la anatomía y el compromiso ético.
        </p>
      </div>

      {/* Editorial Consultation Image (From Stitch) */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] bg-[#F0EDE9] overflow-hidden border border-[#CCD6DF] shadow-xs">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEfVgqNm6z8RRBvlOXmF4AetyBkKn9V_nida3oVn1UQP5BpyJAQUEoo4KsYPabEI1erESyaWOiFyiUqDJVeafiSAqBruEYcYELZ7sUIETAUNFtzQ2drcmgvtiIZKqCqcKecE4TTU-7Kv9SOVt-Wzhh0qa7dke5FfZibTgJej3LP7tJlx5_ugs9xak9aKgjL6kNHtRt65fYtq0j5PQzMXuxPHbfMRi0apt1ZgILuDptO_jh0VyqMLuXkg"
          alt="Consultorio de diagnóstico clínico individual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4 sm:p-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FAF7F2]">
            Espacio Seguro & Confidencial
          </span>
          <span className="text-xs text-[#D4A73A] font-bold uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" />
            Atención Individual
          </span>
        </div>
      </div>

      {/* ¿Qué es la valoración? (Bloques Planos de Claridad Ética) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-[#F0EDE9] p-6 border border-[#CCD6DF] space-y-2">
          <div className="flex items-center gap-2 text-[#67235E]">
            <Stethoscope className="w-5 h-5 text-[#B88508]" />
            <h3 className="font-display text-base font-bold text-[#333333]">
              ¿Qué ocurre en tu valoración?
            </h3>
          </div>
          <p className="text-xs text-[#494D50] leading-relaxed">
            Es un espacio de evaluación individual guiado por profesionales. Su objetivo es analizar tu caso particular, entender tus objetivos y determinar si los procedimientos son convenientes y seguros para ti.
          </p>
        </div>

        <div className="bg-white p-6 border border-[#CCD6DF] space-y-2">
          <div className="flex items-center gap-2 text-[#CC3366]">
            <Ban className="w-5 h-5" />
            <h3 className="font-display text-base font-bold text-[#333333]">
              Sin presión comercial
            </h3>
          </div>
          <p className="text-xs text-[#494D50] leading-relaxed">
            No genera ningún compromiso de compra ni paquetes forzados. Recibes un concepto honesto para decidir con tranquilidad.
          </p>
        </div>

        <div className="bg-white p-6 border border-[#CCD6DF] space-y-2">
          <div className="flex items-center gap-2 text-[#B88508]">
            <Lock className="w-5 h-5" />
            <h3 className="font-display text-base font-bold text-[#333333]">
              Privacidad y Ética
            </h3>
          </div>
          <p className="text-xs text-[#494D50] leading-relaxed">
            Garantía estricta de confidencialidad médica, trato ético y custodia rigurosa de tu información personal.
          </p>
        </div>
      </div>

      {/* Formulario de Solicitud de Cita */}
      <div className="max-w-3xl mx-auto bg-white border border-[#CCD6DF] p-6 sm:p-10 shadow-xs">
        {isSubmitted ? (
          <div className="space-y-6 text-center py-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#67235E] uppercase">
                ¡Solicitud Registrada con Éxito!
              </h2>
              <p className="text-xs sm:text-sm text-[#494D50] max-w-md mx-auto">
                Gracias {formData.name}. Hemos preparado tu solicitud para la sede de{' '}
                <strong>{formData.sede === 'chia' ? 'Chía' : 'Zipaquirá'}</strong> ({formData.service}).
              </p>
            </div>

            {/* Direct Dual Action */}
            <div className="p-6 bg-[#F6F3EE] border border-[#CCD6DF] space-y-3 max-w-md mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88508] block text-center">
                Paso siguiente para confirmar horario
              </span>
              <a
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Confirmar por WhatsApp ({OFFICIAL_PHONE})</span>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}?subject=Solicitud%20de%20Valoraci%C3%B3n%20-%20${encodeURIComponent(
                  formData.name
                )}&body=${encodeURIComponent(getWhatsAppContextMessage({ bookingData: formData }))}`}
                className="w-full py-2.5 px-4 bg-white border border-[#CCD6DF] hover:border-[#B88508] text-[#333333] font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-[#67235E]" />
                <span>Enviar por Correo ({OFFICIAL_EMAIL})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  sede: 'chia',
                  service: 'Manejo de sobrepeso',
                  preferredTime: 'tarde',
                  preferredDay: '',
                  comments: '',
                  dataProtectionAccepted: true,
                });
              }}
              className="text-xs text-[#B88508] hover:underline cursor-pointer block mx-auto"
            >
              ← Diligenciar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            <div className="border-b border-[#CCD6DF] pb-4 mb-2">
              <span className="text-[10px] font-bold text-[#494D50] uppercase tracking-widest block">Paso Único</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#67235E] uppercase tracking-tight">
                Formulario de Solicitud de Cita
              </h2>
            </div>

            {/* Sede selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                Sede de Preferencia *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCATIONS.map((loc) => (
                  <label
                    key={loc.id}
                    className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                      formData.sede === loc.id
                        ? 'border-[#67235E] bg-[#F6F3EE] ring-1 ring-[#67235E]'
                        : 'border-[#CCD6DF] bg-white hover:border-[#B88508]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sede"
                      value={loc.id}
                      checked={formData.sede === loc.id}
                      onChange={() => setFormData({ ...formData, sede: loc.id })}
                      className="mt-0.5 text-[#67235E]"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-[#333333] block">{loc.name}</span>
                      <span className="text-[#494D50] text-[11px] block">{loc.landmark}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Nombre Completo *
                </label>
                <input
                  id="name-input"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. Mariana Valenzuela"
                  className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none ${
                    errors.name ? 'border-red-500' : 'border-[#CCD6DF] focus:border-[#67235E]'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="phone-input" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Teléfono / WhatsApp *
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ej. 311 465 6836"
                  className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-[#CCD6DF] focus:border-[#67235E]'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>

            {/* Email & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Correo Electrónico *
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className={`w-full px-3.5 py-2.5 border text-xs bg-white focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-[#CCD6DF] focus:border-[#67235E]'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Servicio de Interés *
                </label>
                <select
                  id="service-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E]"
                >
                  <option value="Orientación general / Primera valoración">Orientación general / Primera valoración</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Preferencia Horaria Tentativa
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTime: 'manana' })}
                    className={`py-2 px-3 border text-xs font-semibold cursor-pointer transition-colors uppercase tracking-wider ${
                      formData.preferredTime === 'manana'
                        ? 'bg-[#67235E] text-white border-[#67235E]'
                        : 'bg-[#F0EDE9] border-[#CCD6DF] text-[#333333]'
                    }`}
                  >
                    Mañana
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTime: 'tarde' })}
                    className={`py-2 px-3 border text-xs font-semibold cursor-pointer transition-colors uppercase tracking-wider ${
                      formData.preferredTime === 'tarde'
                        ? 'bg-[#67235E] text-white border-[#67235E]'
                        : 'bg-[#F0EDE9] border-[#CCD6DF] text-[#333333]'
                    }`}
                  >
                    Tarde
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="day-input" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                  Día sugerido (opcional)
                </label>
                <input
                  id="day-input"
                  type="text"
                  value={formData.preferredDay || ''}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                  placeholder="Ej. Este jueves o sábado"
                  className="w-full px-3.5 py-2.5 border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E]"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-1">
              <label htmlFor="comments-textarea" className="block text-xs font-bold uppercase tracking-wider text-[#333333]">
                Observaciones particulares (opcional)
              </label>
              <textarea
                id="comments-textarea"
                rows={3}
                value={formData.comments || ''}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                placeholder="¿Tienes alguna condición o inquietud previa?"
                className="w-full px-3.5 py-2.5 border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E]"
              />
            </div>

            {/* Habeas Data Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-[#494D50] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.dataProtectionAccepted}
                  onChange={(e) =>
                    setFormData({ ...formData, dataProtectionAccepted: e.target.checked })
                  }
                  className="mt-0.5 text-[#67235E]"
                />
                <span>
                  Autorizo el tratamiento de mis datos personales para la coordinación de mi cita de valoración,
                  conforme a la{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('/datos')}
                    className="text-[#67235E] underline hover:text-[#B88508]"
                  >
                    Política de Tratamiento de Datos
                  </button>.
                </span>
              </label>
              {errors.dataProtectionAccepted && (
                <p className="text-xs text-red-600">{errors.dataProtectionAccepted}</p>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#CC3366] hover:bg-[#B88508] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar agendamiento de valoración</span>
              </button>
            </div>

          </form>
        )}
      </div>

      {/* Physical Branch Detail Photos from Stitch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-[16/9] bg-[#F0EDE9] overflow-hidden border border-[#CCD6DF]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHCalJsB0nXy0VubCHF6stSAgri69U90DpOW4JvHaVFEQRswSCu39eeUstZHhTTBG_B9gCJwzFL__YMW7KW9IL885Y3qdenkgkWVvMZJi8SU6wnScKTfHwu7k3UzFavurrBCbDjWFgTbb-lM6K7qmKYaSq2t0ubKmjUwhw-RA_SuJkaEeBHxCeXEVizt2ZX_DTcVen3ncsiEesj1vaO9KFPADgpfV7_1TVnRrqaU4mZxE3pxhaOcyPLg"
            alt="Ambiente clínico en Chía"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#FAF7F2]/90 text-[10px] uppercase font-bold text-[#333333]">
            Sede Chía · Sabana Norte
          </div>
        </div>

        <div className="relative aspect-[16/9] bg-[#F0EDE9] overflow-hidden border border-[#CCD6DF]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcn5PamLfRqXJtGzBtC0UnXiL9-MQQ0rITIhYY8KsYWdml95sD3GU4iruBt_LZSoBDLAEt5MPCvUA8tzUFZNNa-4KUZZcqzC12CXc_PNJs6Hf_UR0CI7uxm8NiIeZclo3SqZDcqP56BfMPWBC2-n1dfshTrNs4Og2Wn32W-X6arEZqVbg6qf-8aD4u4fnCpAY7B6_O40lVwPHJjkZdsYTdVbOS4o-W0-ybfRwH_zcmIRWDZ6VrMoRnug"
            alt="Ambiente clínico en Zipaquirá"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#FAF7F2]/90 text-[10px] uppercase font-bold text-[#333333]">
            Sede Zipaquirá · La Casona
          </div>
        </div>
      </div>

      {/* Deontological Commitment Card (From Stitch) */}
      <section className="bg-[#F0EDE9] p-6 sm:p-8 text-center border border-[#CCD6DF] space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#494D50] block">
          Compromiso Deontológico
        </span>
        <p className="font-serif text-base sm:text-lg text-[#333333] max-w-lg mx-auto leading-relaxed italic">
          «No manejamos tarifas automáticas ni tratamientos genéricos. Cada persona recibe una indicación médica personalizada.»
        </p>
        <span className="text-xs text-[#B88508] font-bold uppercase tracking-wider block pt-1">
          Eternal Institute · Rigor y Calidez
        </span>
      </section>

    </div>
  );
};
