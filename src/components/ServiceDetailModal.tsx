/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ServiceDetail } from '../data/services';
import { X, Calendar, MessageCircle, ShieldCheck, CheckCircle, Info } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppContextMessage } from '../utils/booking';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onNavigateToBooking: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigateToBooking,
}) => {
  if (!service) return null;

  const whatsappMessage = getWhatsAppContextMessage({ serviceName: service.name });
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#CCD6DF] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#FAF7F2] to-white border-b border-[#CCD6DF]/70 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#333333] hover:bg-black/5 transition-colors"
            aria-label="Cerrar ficha"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#67235E]/10 text-[#67235E]">
                {service.categoryLabel}
              </span>
              {service.isPriority && (
                <span className="text-[11px] font-semibold text-[#B88508] bg-[#D4A73A]/10 px-2.5 py-0.5 rounded-full">
                  Ficha Prioritaria
                </span>
              )}
            </div>

            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#67235E]">
              {service.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#494D50] leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs text-[#333333] leading-relaxed">
          
          {/* Overview */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-base font-bold text-[#67235E] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#B88508]" />
              ¿En qué consiste el tratamiento?
            </h3>
            <p className="text-[#494D50] text-xs leading-relaxed bg-[#FAF7F2] p-4 rounded-xl border border-[#CCD6DF]/60">
              {service.overview}
            </p>
          </div>

          {/* Objective */}
          <div className="space-y-1.5">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-[#B88508]">
              Objetivo del procedimiento
            </h3>
            <p className="text-[#494D50]">
              {service.objective}
            </p>
          </div>

          {/* Valuation Criteria */}
          <div className="space-y-1.5 bg-amber-50/70 p-4 rounded-xl border border-amber-200/60">
            <h3 className="font-semibold text-xs text-[#67235E] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B88508]" />
              Criterio de valoración previa
            </h3>
            <p className="text-amber-950 text-xs leading-relaxed">
              {service.valuationCriteria}
            </p>
          </div>

          {/* Follow-up Process */}
          <div className="space-y-1.5">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-[#67235E]">
              Seguimiento personalizado durante el proceso
            </h3>
            <p className="text-[#494D50]">
              {service.followUpProcess}
            </p>
          </div>

          {/* Frequency note */}
          <div className="space-y-1.5">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-[#494D50]">
              Frecuencia y sesiones
            </h3>
            <p className="text-[#494D50] italic">
              {service.frequencyNote}
            </p>
          </div>

          {/* Considerations */}
          {service.suitableConsiderations && service.suitableConsiderations.length > 0 && (
            <div className="space-y-2 pt-2">
              <h3 className="font-semibold text-xs uppercase tracking-wider text-[#67235E]">
                Pautas de responsabilidad
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#494D50]">
                {service.suitableConsiderations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B88508] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#FAF7F2] border-t border-[#CCD6DF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-xs font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onNavigateToBooking(service.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#CC3366] hover:bg-[#B52857] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar valoración previa</span>
          </button>
        </div>

      </div>
    </div>
  );
};
