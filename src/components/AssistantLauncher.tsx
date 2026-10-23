/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, Sparkles } from 'lucide-react';

interface AssistantLauncherProps {
  onClick: () => void;
}

export const AssistantLauncher: React.FC<AssistantLauncherProps> = ({ onClick }) => {
  return (
    <aside
      aria-label="Asistente Virtual Elena"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-auto"
    >
      <button
        onClick={onClick}
        aria-label="Hablar con Elena, orientadora virtual de Eternal Institute"
        className="group relative flex items-center gap-3 pl-1.5 pr-4 py-1.5 bg-[#67235E] hover:bg-[#521C4B] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-[#D4A73A]/50 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#D4A73A]/30 animate-gold-glow"
      >
        {/* Human Avatar of Elena with status indicator */}
        <div className="relative shrink-0">
          <img
            src="/assets/elena_portrait.jpg"
            alt="Elena - Asistente Virtual"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#D4A73A] shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          {/* Active Status Badge */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#67235E] shadow-sm flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </span>
          {/* Subtle Golden Sparkle */}
          <span className="absolute -top-1 -left-1 text-[#F3DE9C] pointer-events-none animate-gold-sparkle">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Text and Voice Indication */}
        <div className="text-left flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-semibold text-xs sm:text-sm text-white tracking-wide">
              Elena
            </span>
            <span className="text-[9px] font-sans font-medium uppercase px-1.5 py-0.2 bg-[#D4A73A]/20 text-[#F3DE9C] rounded border border-[#D4A73A]/30">
              En línea
            </span>
          </div>
          <span className="text-[10px] text-[#F3DE9C] font-medium leading-tight flex items-center gap-1 mt-0.5">
            <Volume2 className="w-2.5 h-2.5 text-[#D4A73A]" />
            <span>Orientación con Voz & IA</span>
          </span>
        </div>
      </button>
    </aside>
  );
};
