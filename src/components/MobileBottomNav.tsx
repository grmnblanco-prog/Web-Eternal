/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Stethoscope, Award, MapPin, Calendar } from 'lucide-react';

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPath, onNavigate }) => {
  const tabs = [
    { path: '/', label: 'Inicio', icon: Sparkles },
    { path: '/servicios', label: 'Servicios', icon: Stethoscope },
    { path: '/nosotras', label: 'Nosotras', icon: Award },
    { path: '/sedes', label: 'Sedes', icon: MapPin },
    { path: '/valoracion', label: 'Cita', icon: Calendar },
  ];

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#CCD6DF] shadow-[0_-2px_12px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Navegación inferior móvil"
    >
      <div className="flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.path}
              onClick={() => {
                onNavigate(tab.path);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#CC3366] font-bold'
                  : 'text-[#494D50] hover:text-[#67235E]'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#CC3366]' : 'text-[#494D50]'}`} />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#B88508]" />
                )}
              </div>
              <span className="text-[10px] tracking-wider uppercase leading-none font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
