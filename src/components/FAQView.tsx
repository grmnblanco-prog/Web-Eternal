/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS, FAQItem } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageCircle, Calendar, Search } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/booking';

interface FAQViewProps {
  onNavigate: (path: string) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>('que-es-valoracion');
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
          Claridad y Honestidad
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#67235E]">
          Preguntas Frecuentes
        </h1>
        <p className="text-xs sm:text-sm text-[#494D50] leading-relaxed">
          Resolvemos tus dudas sobre cómo funciona la valoración profesional, qué esperar de los tratamientos y cómo gestionamos tus citas.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar pregunta o tema..."
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#CCD6DF] text-xs focus:outline-none focus:border-[#67235E] focus:ring-2 focus:ring-[#67235E]/20 shadow-xs"
          aria-label="Buscar en preguntas frecuentes"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#CCD6DF] overflow-hidden transition-all duration-200 shadow-xs"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 focus:outline-none focus-visible:bg-[#FAF7F2]"
                aria-expanded={isOpen}
              >
                <span className="font-serif font-bold text-base sm:text-lg text-[#67235E]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B88508] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#494D50] leading-relaxed border-t border-[#CCD6DF]/40 pt-4 bg-[#FAF7F2]/30">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-[#CCD6DF] text-xs text-[#494D50]">
            No encontramos respuestas para esa consulta. Puedes consultarnos por WhatsApp.
          </div>
        )}
      </div>

      {/* Direct Contact Banner */}
      <div className="bg-[#FAF7F2] border border-[#CCD6DF] rounded-3xl p-8 text-center space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#67235E]">
          ¿Tienes una inquietud adicional?
        </h3>
        <p className="text-xs text-[#494D50] max-w-md mx-auto">
          Nuestro equipo de coordinación responderá todas tus preguntas sobre sedes, protocolos y preparación antes de tu valoración.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buildWhatsAppUrl('Hola, tengo una pregunta sobre la atención en Eternal Institute.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('/valoracion')}
            className="w-full sm:w-auto px-6 py-3 bg-[#CC3366] hover:bg-[#B52857] text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar valoración</span>
          </button>
        </div>
      </div>

    </div>
  );
};
