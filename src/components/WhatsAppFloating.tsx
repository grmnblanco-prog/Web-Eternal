/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppContextMessage } from '../utils/booking';

interface WhatsAppFloatingProps {
  currentPath: string;
  activeServiceName?: string;
  activeSedeName?: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({
  currentPath,
  activeServiceName,
  activeSedeName,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Determine preloaded message
  let defaultMessage = 'Hola, quisiera información sobre los servicios de Eternal Institute.';
  if (currentPath === '/servicios' && activeServiceName) {
    defaultMessage = `Hola, quisiera información sobre ${activeServiceName}.`;
  } else if (currentPath === '/sedes' && activeSedeName) {
    defaultMessage = `Hola, quisiera información sobre la sede de ${activeSedeName}.`;
  } else if (currentPath === '/sedes') {
    defaultMessage = 'Hola, quisiera información sobre las sedes de Chía y Zipaquirá.';
  } else if (currentPath === '/valoracion') {
    defaultMessage = 'Hola, quisiera agendar una valoración profesional en Eternal Institute.';
  }

  const whatsappUrl = buildWhatsAppUrl(defaultMessage);

  return (
    <aside
      aria-label="Asistencia directa por WhatsApp"
      className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex flex-col items-end pointer-events-auto"
    >
      {/* Optional contextual helper speech bubble */}
      {showTooltip && (
        <div className="mb-2 mr-1 p-3 bg-white text-[#333333] text-xs rounded-2xl shadow-xl border border-[#CCD6DF] max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-600"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-[#67235E] pb-1">¿Deseas consultar o agendar?</p>
          <p className="text-[11px] text-[#494D50] leading-snug">
            Escríbenos directamente al WhatsApp 3114656836 para resolver tus inquietudes con nuestro equipo.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Eternal Institute al 3114656836"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="font-semibold text-xs tracking-wide pr-1 hidden sm:inline">
          WhatsApp 3114656836
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </a>
    </aside>
  );
};
