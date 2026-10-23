/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PRIORITY_SERVICES, ServiceDetail } from '../data/services';
import { LOCATIONS } from '../data/locations';
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Phone,
  Stethoscope,
  Building2,
  FileText
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/booking';
import { GoldenSparkles } from './GoldenSparkles';
import { Logo } from './Logo';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onSelectService: (service: ServiceDetail) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectService }) => {
  // Editorial imagery curated from Stitch design system
  const serviceImages: Record<string, { image: string; tag: string }> = {
    'sobrepeso': {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDodznSvzu7ro_M2vpYpvlmLVDQNen0z6CpjqqXPOGdv16WdyehhKZ6o4U7IoRLstRFjuQ_fFDMFtiL1UUJtTdPyHDMusLTVaX0ih31e5V98KzSnn0IKUYk1oJAz_feYR1fHhlejStBbNeV-yiR3ixqfEoEYweAZOHE-PBhQwSMeZ2haIrNdCeUs-MWPyvGCzTMfSXT4sawRdoesEPr7ib0NWmBqpt4bjzmKYFW5nOWbOpohUpNs388Pw',
      tag: 'Metabólico',
    },
    'rejuvenecimiento-facial': {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUrFEdRJgoD_lpBP7Tpp9rMmWNq77eoDnkBzC9QZtV2t61ISP3ysdCYA816rCL-1sBw9GyRg-SyciUJwz2_IcPoUrafdccwzpzfcCvfiZeRMYeo4Ktq46EtPsgZlfFZXdL9Sc7zZ2pZEzEWdECuyl-fbWtWkyLrOIZFAYTJqyJgvxj0r2Y5ut7kbpGUGr1TY83pYO8zG4jWZgDvK9kYJSpRbu2VQxOFDCwveEIlmRJ8kRKvXobEwDWw',
      tag: 'Dermocosmética',
    },
    'depilacion-laser': {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlScQAc18ksQaAnHoKeP6_iXXIhKEAjhwTD5N2ovm6-haof9z4_Uxmtx3sJWI36q9-TtUwo2z1X9v2VjXZZSngBc-OSEEx6ltKJPARoE4GBd7B20JCAP11PSzE9N7GwtztSoAv47NvBtBL8J2OXORAaMZYwypWvqk7uuD5K4kpfGOqrsSgF8_6Y1hp-_rh1MPdbmmUhCxjKLS8pWHcGz-A4-RRGUi0QHceVM_CIXw7pIMa6vYfzLbTNA',
      tag: 'Tecnología',
    },
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION (Sculptural Avant-Garde Ivory with Golden Sparkles) */}
      <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-[#CCD6DF] bg-[#FAF7F2] overflow-hidden">
        {/* Animated Golden Sparkles for delightful luxury visual impact */}
        <GoldenSparkles density="medium" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline and Rationale */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Deontological Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F6F3EE] border border-[#CCD6DF] text-[#735200] text-xs font-medium">
                <span className="w-2 h-2 bg-[#D4A73A]" />
                <span className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-[#333333]">
                  Previa valoración individual · Sin promesas irreales
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#67235E] tracking-tight leading-[1.12]">
                Medicina estética responsable orientada a tu bienestar
              </h1>

              {/* Verified Subtitle */}
              <p className="text-sm sm:text-base text-[#494D50] leading-relaxed max-w-xl">
                Acompañamos a cada persona con seguimiento personalizado, responsable y detallado en nuestras sedes de Chía y Zipaquirá.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/valoracion')}
                  className="px-8 py-3.5 bg-[#CC3366] hover:bg-[#B88508] text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar valoración</span>
                </button>

                <button
                  onClick={() => onNavigate('/servicios')}
                  className="px-7 py-3.5 bg-[#F6F3EE] hover:bg-[#EBE8E3] text-[#333333] border border-[#CCD6DF] text-xs font-semibold uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver servicios</span>
                  <ArrowRight className="w-4 h-4 text-[#B88508]" />
                </button>
              </div>

              {/* 3 Pillars Summary */}
              <div className="pt-4 border-t border-[#CCD6DF] grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-[#494D50]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88508] shrink-0" />
                  <span>Previa valoración individual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88508] shrink-0" />
                  <span>Casi 20 años de experiencia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88508] shrink-0" />
                  <span>Seguimiento continuo</span>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Clinic Visual */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-72 sm:h-96 bg-[#F0EDE9] overflow-hidden border border-[#CCD6DF] shadow-sm group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdrPPioesSdWticwcP18MU-qHVWeN3a7CyavtFScCJXLau4noBooHGKWLD80aP8Jl4OIyaPZsrPTrCsao5D3mZp3Ih9vL6dNyxDHe1Ua4KIRZj18FaiPsLpRyVKkzUNx0_LesbfJ8WQFnBhbFUe2sceNMEfCIkpFtYEwMwqSn3QdktiHNgNhQAQhzE562FB4kBCGcQ8jkn_SoTEMXCEN1TsjRKLvhCJOsZ_udWEX42C90MounmbkBDcg"
                  alt="Instalaciones serenas de Eternal Institute"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Institutional Monogram with Clock & Sparkle */}
                <div className="absolute top-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-[#D4A73A]/50 flex items-center gap-2">
                  <Logo variant="symbol" size="sm" withSparkle={true} />
                  <div className="pr-1 hidden sm:block text-left">
                    <span className="block text-[9px] font-bold text-[#67235E] tracking-wider leading-none">ETERNAL</span>
                    <span className="block text-[8px] text-[#C29B38] font-semibold tracking-widest leading-none mt-0.5">INSTITUTE</span>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-[#FAF7F2]/95 backdrop-blur-md p-3.5 border-t border-[#CCD6DF] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#B88508]" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#333333]">
                      Espacios de diagnóstico serenos
                    </span>
                  </div>
                  <span className="text-[11px] text-[#494D50] font-medium">Chía · Zipaquirá</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. POR QUÉ ELEGIRNOS — LOS CUATRO PILARES CLÍNICOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
            Fundamentos Clínicos
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#67235E]">
            Rigor científico y criterio individual
          </h2>
          <p className="text-xs sm:text-sm text-[#494D50] max-w-xl">
            Cuatro pilares éticos respaldan nuestra práctica diaria sin recurrir a expectativas desmedidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Pilar 1 */}
          <div className="bg-white p-6 border border-[#CCD6DF] hover:border-[#B88508] transition-colors space-y-3">
            <div className="w-10 h-10 bg-[#F0EDE9] flex items-center justify-center text-[#67235E]">
              <Sparkles className="w-5 h-5 text-[#B88508]" />
            </div>
            <h3 className="font-display text-base font-bold text-[#333333]">
              Tratamientos faciales y corporales
            </h3>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Orientados a mejorar la salud, la estética y la autoestima de cada persona mediante protocolos adaptados a tu fisiología.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-6 border border-[#CCD6DF] hover:border-[#B88508] transition-colors space-y-3">
            <div className="w-10 h-10 bg-[#F0EDE9] flex items-center justify-center text-[#67235E]">
              <ShieldCheck className="w-5 h-5 text-[#B88508]" />
            </div>
            <h3 className="font-display text-base font-bold text-[#333333]">
              Infraestructura y equipos
            </h3>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Sedes cómodas con equipos de tecnología adecuada para garantizar una atención personalizada y precisa.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white p-6 border border-[#CCD6DF] hover:border-[#B88508] transition-colors space-y-3">
            <div className="w-10 h-10 bg-[#F0EDE9] flex items-center justify-center text-[#67235E]">
              <Award className="w-5 h-5 text-[#B88508]" />
            </div>
            <h3 className="font-display text-base font-bold text-[#333333]">
              Amplia experiencia
            </h3>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Equipo liderado por Martha Lucía Aguilera Muñoz, con una trayectoria continuada de casi veinte años en el sector.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="bg-white p-6 border border-[#CCD6DF] hover:border-[#B88508] transition-colors space-y-3">
            <div className="w-10 h-10 bg-[#F0EDE9] flex items-center justify-center text-[#67235E]">
              <HeartHandshake className="w-5 h-5 text-[#B88508]" />
            </div>
            <h3 className="font-display text-base font-bold text-[#333333]">
              Atención integral
            </h3>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Seguimiento personalizado, responsable y detallado durante cada fase del proceso terapéutico y preventivo.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SERVICIOS DESTACADOS CON FOTOGRAFÍA EDITORIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-[#CCD6DF] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
                Áreas Clínicas Clave
              </span>
              <span className="text-[11px] font-bold text-[#CC3366] uppercase">3 de 15</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#67235E]">
              Servicios Destacados
            </h2>
            <p className="text-xs sm:text-sm text-[#494D50] mt-1">
              Tratamientos no invasivos planificados tras un estudio anatómico individualizado.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/servicios')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#67235E] hover:text-[#CC3366] transition-colors cursor-pointer"
          >
            <span>Explorar los 15 servicios</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRIORITY_SERVICES.map((service) => {
            const meta = serviceImages[service.id] || {
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEi8ZNOKORDhKzFjutw44bQElG9njsOYr_3GZPBCdqEUtTKLiqgDQwzfD1tDd53bJ1foCK2eJ3HWQAyZRMBcIOB6VclN5Kotuk3j26zyFzcayUcTo2IvPrQFuWudSVDTwx-ZZ3DTOh-mq0oUnPUYkl6Qhxc_yQufGJnFNt66u5DIkAz3nz-kcXDwBhMRgEYnC9AgBmgNEtqH0V-Y4GGMXIECoD7w11HlWfpxxiBwE6FNeSSpcQzhtmXA',
              tag: 'Especializado',
            };

            return (
              <div
                key={service.id}
                className="bg-white border border-[#CCD6DF] hover:border-[#B88508] transition-colors flex flex-col justify-between overflow-hidden group shadow-xs"
              >
                <div>
                  {/* Photo container */}
                  <div className="h-44 w-full bg-[#F0EDE9] relative overflow-hidden">
                    <img
                      src={meta.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#67235E] text-white text-[10px] font-semibold uppercase tracking-wider">
                      {meta.tag}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#B88508] uppercase tracking-wider">
                        Sujeto a valoración previa
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#333333] group-hover:text-[#67235E] transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-[#494D50] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#CCD6DF]/60 mt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    aria-label={`Ver ficha detallada de ${service.name}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#CC3366] hover:text-[#B88508] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('/valoracion')}
                    aria-label={`Valorar ${service.name}`}
                    className="py-1.5 px-3 bg-[#67235E] hover:bg-[#CC3366] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Valorar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SEDES CHÍA Y ZIPAQUIRÁ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F3EE] border border-[#CCD6DF] p-6 sm:p-10 space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
              Presencia Regional
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#67235E]">
              Sedes en Cundinamarca
            </h2>
            <p className="text-xs sm:text-sm text-[#494D50]">
              Instalaciones autorizadas concebidas para brindarte tranquilidad, privacidad y confort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white border border-[#CCD6DF] p-6 space-y-4 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-[#333333]">
                      {loc.name}
                    </span>
                    <span className="text-[10px] uppercase font-semibold bg-[#F0EDE9] px-2 py-0.5 text-[#494D50]">
                      Sabana Centro
                    </span>
                  </div>

                  <p className="text-xs text-[#333333] leading-relaxed">
                    <strong>{loc.landmark}</strong>, {loc.address}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#494D50] pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#B88508] shrink-0" />
                    <span>Lun - Vie: 10:00 a. m. a 7:00 p. m. | Sáb: hasta el mediodía</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#CCD6DF] flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2 px-3 border border-[#CCD6DF] hover:border-[#B88508] text-[#333333] text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#B88508]" />
                    <span>Ver ruta (GPS)</span>
                  </a>

                  <a
                    href={buildWhatsAppUrl(loc.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp {loc.city.split(',')[0]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/sedes')}
              className="text-xs font-semibold uppercase tracking-wider text-[#67235E] hover:text-[#CC3366] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Ver fotografías arquitectónicas de las sedes y planos de acceso</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. BLOQUE DE CIERRE: COMPROMISO BIOÉTICO (Deep Plum from Stitch) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#67235E] text-white p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-lg border border-[#D4A73A]/40">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 bg-white/10 mx-auto flex items-center justify-center text-[#D4A73A]">
              <Stethoscope className="w-6 h-6" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4A73A] block">
              Compromiso Bioético
            </span>

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              El primer paso es tu valoración individual
            </h2>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
              Una valoración individual permite determinar de manera segura y profesional los procedimientos adecuados para ti, sin compromisos y con absoluta transparencia sobre tus posibilidades biológicas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('/valoracion')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#CC3366] hover:bg-[#D4A73A] hover:text-[#333333] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Solicitar valoración personalizada
              </button>
            </div>

            <span className="text-[10px] text-white/70 uppercase tracking-widest block pt-2">
              Atención en Chía o Zipaquirá · Agenda sujeta a disponibilidad facultativa
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
