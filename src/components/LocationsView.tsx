/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LOCATIONS } from '../data/locations';
import {
  MapPin,
  Clock,
  ExternalLink,
  Phone,
  Navigation,
  Shield,
  Car,
  Accessibility,
  Store,
  Lock,
  Sparkles,
  ArrowRight,
  Mail,
  Route
} from 'lucide-react';
import { buildWhatsAppUrl, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/booking';

interface LocationsViewProps {
  onNavigate: (path: string) => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onNavigate }) => {
  const [selectedSedeId, setSelectedSedeId] = useState<'chia' | 'zipaquira'>('chia');

  const selectedLocation = LOCATIONS.find((l) => l.id === selectedSedeId) || LOCATIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header Contextual */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#CC3366]" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B88508]">
            Sabana de Bogotá
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#67235E] uppercase tracking-tight">
          Nuestras Sedes
        </h1>
        <p className="text-sm sm:text-base text-[#494D50] leading-relaxed">
          Espacios diseñados para tu confort, privacidad y bienestar clínico en ubicaciones privilegiadas de Chía y Zipaquirá.
        </p>

        {/* Quick Sede Selector */}
        <div className="grid grid-cols-2 gap-2 pt-4 bg-[#F0EDE9] p-1.5 border border-[#CCD6DF] max-w-md">
          <button
            onClick={() => setSelectedSedeId('chia')}
            className={`py-2 px-4 text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
              selectedSedeId === 'chia'
                ? 'bg-white text-[#CC3366] shadow-xs'
                : 'text-[#494D50] hover:text-[#333333]'
            }`}
          >
            Sede Chía
          </button>
          <button
            onClick={() => setSelectedSedeId('zipaquira')}
            className={`py-2 px-4 text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
              selectedSedeId === 'zipaquira'
                ? 'bg-white text-[#67235E] shadow-xs'
                : 'text-[#494D50] hover:text-[#333333]'
            }`}
          >
            Sede Zipaquirá
          </button>
        </div>
      </div>

      {/* Sedes Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Sede 1: Chía */}
        <article className={`bg-white border transition-all duration-300 shadow-sm flex flex-col justify-between ${
          selectedSedeId === 'chia' ? 'border-[#B88508] ring-1 ring-[#B88508]' : 'border-[#CCD6DF]'
        }`}>
          <div>
            {/* Image */}
            <div className="relative w-full h-56 bg-[#F0EDE9] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUHsRZPqD4QPJT4u2BtvQ7JmFkp_Nx85Qz9q5T5uh3bBoGwmExIctSVEorwAbBJy8MsI93maKknyK71G2rFd4lTen752LpMTGxpvfhweam16UtK4Z2WQEDc2DhEaLPGyeGtZ7jupY36Oz23vyh0I_Ia5yZf-0I_AZjnwOEcbLIQKtM-N_7jM_JwEShKJ85aF47LCKOEai4pz66dWtNgXai_BtbukBAbvxbsZdl0Fr4Nj8z8cTewEoBiA"
                alt="Sede Chía - C.C. Sabana Norte"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#CC3366] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                Sede Principal · Sabana Norte
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-[10px] font-bold text-[#B88508] tracking-widest uppercase block mb-1">
                  Cundinamarca
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#333333] uppercase">
                  Chía — C.C. Sabana Norte
                </h2>
                <div className="flex items-start gap-2 mt-2 text-xs text-[#333333]">
                  <MapPin className="w-4 h-4 text-[#CC3366] shrink-0 mt-0.5" />
                  <p>
                    Avenida Pradilla 2 Este 71, Local 129<br />
                    <span className="text-[#494D50]">Centro Comercial Sabana Norte, Chía</span>
                  </p>
                </div>
              </div>

              {/* Comfort attributes */}
              <div className="bg-[#F6F3EE] p-3.5 border border-[#CCD6DF] space-y-2">
                <span className="text-[10px] font-semibold text-[#494D50] uppercase tracking-wider block">
                  Confort & Acceso
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Car className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Parqueadero cubierto</span>
                  </div>
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Shield className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Seguridad 24/7</span>
                  </div>
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Accessibility className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Acceso a nivel</span>
                  </div>
                </div>
              </div>

              {/* Schedules */}
              <div className="space-y-1.5 text-xs">
                <span className="text-[10px] font-bold text-[#B88508] uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Horario de Atención
                </span>
                <div className="space-y-1">
                  <div className="flex justify-between py-1 bg-[#F0EDE9] px-2.5">
                    <span className="text-[#333333]">Lunes a Viernes</span>
                    <span className="font-semibold text-[#333333]">10:00 a. m. – 7:00 p. m.</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#F0EDE9] px-2.5">
                    <span className="text-[#333333]">Sábados</span>
                    <span className="font-semibold text-[#333333]">10:00 a. m. – 1:00 p. m.</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#EBE8E3] px-2.5 text-[#494D50] italic">
                    <span>Domingos y Festivos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="p-6 pt-0 space-y-2 border-t border-[#CCD6DF] mt-4">
            <a
              href="https://wa.me/573114656836?text=Hola%20Eternal%20Institute,%20deseo%20agendar%20mi%20valoración%20en%20la%20Sede%20Chía."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#CC3366] hover:bg-[#B88508] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Escribir a WhatsApp Chía</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Sabana+Norte+Chia+Avenida+Pradilla+2+Este+71"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#F0EDE9] hover:bg-[#EBE8E3] text-[#333333] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#CCD6DF]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B88508]" />
              <span>Cómo llegar (Google Maps / Waze)</span>
            </a>
          </div>
        </article>

        {/* Sede 2: Zipaquirá */}
        <article className={`bg-white border transition-all duration-300 shadow-sm flex flex-col justify-between ${
          selectedSedeId === 'zipaquira' ? 'border-[#67235E] ring-1 ring-[#67235E]' : 'border-[#CCD6DF]'
        }`}>
          <div>
            {/* Image */}
            <div className="relative w-full h-56 bg-[#F0EDE9] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYM2Qx8bJIOmBSLe4eU8Pe1ybSuTW4W6PZGFZK8w_HZG3NR0u_KYL-0YM5CVtbggvofxYarDnuCzKGli5AKZ6zO9PUeuGwk7IXBnsxa16FYxLQ8SI3NkwHOyCumaZIxjc0O79ox1wJve8sTDF4E_oUtYhmA2dfx6gu4-hEITOckwFL_c2dSCmzn-2hjjyU7Kao_vOeTuUaaFRr_P6fOBIz41Kr3ut-Kq62LGjmWQIqIbYoUB7bQY_JA"
                alt="Sede Zipaquirá - C.C. La Casona"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#67235E] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                Sede Histórica · La Casona
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-[10px] font-bold text-[#B88508] tracking-widest uppercase block mb-1">
                  Cundinamarca
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#333333] uppercase">
                  Zipaquirá — C.C. La Casona
                </h2>
                <div className="flex items-start gap-2 mt-2 text-xs text-[#333333]">
                  <MapPin className="w-4 h-4 text-[#67235E] shrink-0 mt-0.5" />
                  <p>
                    Centro Comercial La Casona, Local 230<br />
                    <span className="text-[#494D50]">Sector Histórico & Comercial, Zipaquirá</span>
                  </p>
                </div>
              </div>

              {/* Comfort attributes */}
              <div className="bg-[#F6F3EE] p-3.5 border border-[#CCD6DF] space-y-2">
                <span className="text-[10px] font-semibold text-[#494D50] uppercase tracking-wider block">
                  Confort & Privacidad
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Store className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Ubicación céntrica</span>
                  </div>
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Lock className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Espacio reservado</span>
                  </div>
                  <div className="p-2 bg-white flex flex-col items-center justify-center border border-[#CCD6DF]">
                    <Sparkles className="w-4 h-4 text-[#B88508] mb-1" />
                    <span className="leading-tight">Ambiente sereno</span>
                  </div>
                </div>
              </div>

              {/* Schedules */}
              <div className="space-y-1.5 text-xs">
                <span className="text-[10px] font-bold text-[#B88508] uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Horario de Atención
                </span>
                <div className="space-y-1">
                  <div className="flex justify-between py-1 bg-[#F0EDE9] px-2.5">
                    <span className="text-[#333333]">Lunes a Viernes</span>
                    <span className="font-semibold text-[#333333]">10:00 a. m. – 7:00 p. m.</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#F0EDE9] px-2.5">
                    <span className="text-[#333333]">Sábados</span>
                    <span className="font-semibold text-[#333333]">10:00 a. m. – 1:00 p. m.</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#EBE8E3] px-2.5 text-[#494D50] italic">
                    <span>Domingos y Festivos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="p-6 pt-0 space-y-2 border-t border-[#CCD6DF] mt-4">
            <a
              href="https://wa.me/573114656836?text=Hola%20Eternal%20Institute,%20deseo%20agendar%20mi%20valoración%20en%20la%20Sede%20Zipaquirá."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#67235E] hover:bg-[#B88508] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Escribir a WhatsApp Zipaquirá</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+La+Casona+Zipaquira+Local+230"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#F0EDE9] hover:bg-[#EBE8E3] text-[#333333] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#CCD6DF]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B88508]" />
              <span>Cómo llegar (Google Maps / Waze)</span>
            </a>
          </div>
        </article>

      </div>

      {/* Strategic Corridor Section (From Stitch Design) */}
      <section className="bg-[#F0EDE9] p-6 sm:p-10 border border-[#CCD6DF] space-y-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#B88508] uppercase tracking-widest">
              Conexión Estratégica
            </span>
            <span className="text-[10px] font-semibold text-[#494D50] uppercase">
              ~20 min entre sedes
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#333333] uppercase">
            Sabana Centro de Cundinamarca
          </h3>
          <p className="text-xs sm:text-sm text-[#494D50]">
            Nuestras dos sedes están conectadas por el corredor principal de la Sabana, facilitando tu acceso desde Cajicá, Sopó, Tocancipá o Bogotá Norte.
          </p>
        </div>

        {/* Visual Corridor Image */}
        <div className="relative w-full h-52 bg-white overflow-hidden border border-[#CCD6DF]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnkHU1vuxilrRgL2gG2x-f4KB1nu-YUbjAEioUYREG7io68GFVKhzxW2CMAywozRlSVk3NGxF25CfKnFROdpOO-TaEc1-xtVmLAaA1nqSOsqXRBOB5pMt3M7sn0T_8z_3XzoxPy8JCPKrHdwM8P9eacqPfxjX4aG1jLcfEq9taE-G_SpQNi50jAXE-bVDwHPtqBalXkSVhK81NWu7ncoWRqgbLh1UqeFanlefweKoWTzK0ld3uaDgqEQ"
            alt="Corredor Chía Zipaquirá"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-[#FAF7F2]/95 backdrop-blur-md p-3 border-t border-[#CCD6DF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#CC3366]" />
              <span className="text-xs font-semibold uppercase text-[#333333]">
                Ruta Chía ↔ Zipaquirá
              </span>
            </div>
            <span className="text-xs font-bold text-[#B88508] tracking-wider">18 KM</span>
          </div>
        </div>

        {/* Connectivity diagram */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white border border-[#CCD6DF] flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#CC3366]" />
            <div>
              <span className="text-xs font-bold uppercase text-[#333333] block">Chía</span>
              <span className="text-[11px] text-[#494D50]">Av. Pradilla · Sabana Norte</span>
            </div>
          </div>
          <div className="p-3 bg-white border border-[#CCD6DF] flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#67235E]" />
            <div>
              <span className="text-xs font-bold uppercase text-[#333333] block">Zipaquirá</span>
              <span className="text-[11px] text-[#494D50]">C.C. La Casona · Histórico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Attention Channel in Vivid Magenta (From Stitch) */}
      <section className="bg-[#CC3366] text-white p-6 sm:p-10 space-y-6 shadow-md">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD9DF]">
            Línea Oficial Unificada
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase leading-tight">
            Canal Centralizado de Atención
          </h3>
          <p className="text-xs sm:text-sm text-white/90">
            ¿Tienes dudas sobre qué sede elegir o requieres orientación previa? Nuestro equipo te acompaña en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={buildWhatsAppUrl('Hola, quisiera orientación para elegir la sede más conveniente.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white text-[#333333] hover:bg-[#F6F3EE] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-[#25D366]" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-[#494D50] block">WhatsApp Oficial</span>
                <span className="text-xs font-bold text-[#333333]">{OFFICIAL_PHONE}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#B88508]" />
          </a>

          <a
            href={`mailto:${OFFICIAL_EMAIL}`}
            className="flex items-center justify-between p-3.5 bg-white text-[#333333] hover:bg-[#F6F3EE] transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-5 h-5 text-[#67235E] shrink-0" />
              <div className="text-left min-w-0">
                <span className="text-[10px] uppercase font-bold text-[#494D50] block">Correo Oficial</span>
                <span className="text-xs font-bold text-[#333333] truncate block">{OFFICIAL_EMAIL}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#B88508] shrink-0" />
          </a>
        </div>
      </section>

    </div>
  );
};
