/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, ServiceDetail } from '../data/services';
import { Search, Sparkles, ShieldCheck, ArrowRight, Calendar, Scale, CheckCircle2 } from 'lucide-react';

interface ServicesViewProps {
  onSelectService: (service: ServiceDetail) => void;
  onNavigate: (path: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectService, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos (15)' },
    { id: 'facial', label: 'Faciales' },
    { id: 'corporal', label: 'Corporales' },
    { id: 'bienestar', label: 'Bienestar & Otros' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    let matchesCategory = false;
    if (selectedCategory === 'todos') {
      matchesCategory = true;
    } else if (selectedCategory === 'facial') {
      matchesCategory = service.category === 'facial' || service.category === 'mirada';
    } else if (selectedCategory === 'corporal') {
      matchesCategory = service.category === 'corporal';
    } else if (selectedCategory === 'bienestar') {
      matchesCategory = service.category === 'bienestar';
    }

    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Architectural Hero & Framing Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#B88508]" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B88508]">
            Catálogo Clínico Regulado
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#67235E] uppercase tracking-tight">
          Nuestros Servicios
        </h1>
        <p className="text-sm sm:text-base text-[#494D50] leading-relaxed">
          Procedimientos estéticos y de bienestar orientados a tus necesidades individuales. Todo tratamiento requiere valoración profesional previa presencial.
        </p>
      </div>

      {/* Visual Editorial Anchor (Photo from Stitch) */}
      <div className="w-full relative overflow-hidden bg-[#F0EDE9] border border-[#CCD6DF] shadow-xs">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEi8ZNOKORDhKzFjutw44bQElG9njsOYr_3GZPBCdqEUtTKLiqgDQwzfD1tDd53bJ1foCK2eJ3HWQAyZRMBcIOB6VclN5Kotuk3j26zyFzcayUcTo2IvPrQFuWudSVDTwx-ZZ3DTOh-mq0oUnPUYkl6Qhxc_yQufGJnFNt66u5DIkAz3nz-kcXDwBhMRgEYnC9AgBmgNEtqH0V-Y4GGMXIECoD7w11HlWfpxxiBwE6FNeSSpcQzhtmXA"
          alt="Consultorio de valoración médica Eternal Institute"
          className="w-full h-44 sm:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A73A]">
            Rigor Científico & Belleza Ética
          </span>
          <p className="font-display text-base sm:text-xl font-medium mt-1">
            Diagnóstico individualizado antes de cada intervención
          </p>
        </div>
      </div>

      {/* Interactive Category Filter (Pill Strip) & Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-1" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#67235E] text-white shadow-xs'
                  : 'bg-[#F0EDE9] text-[#333333] hover:bg-[#EBE8E3]'
              }`}
              role="tab"
              aria-selected={selectedCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por servicio..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#CCD6DF] text-xs focus:outline-none focus:border-[#67235E]"
            aria-label="Buscar servicio"
          />
        </div>
      </div>

      {/* Services Grid (Stitch 0px Architectural Structure) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map((service, index) => (
          <article
            key={service.id}
            className="bg-white border border-[#CCD6DF] hover:border-[#B88508] p-6 shadow-xs flex flex-col justify-between transition-colors group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[#B88508] tracking-wider">
                  {service.categoryLabel}
                </span>
                <span className="px-2 py-0.5 bg-[#F0EDE9] text-[10px] text-[#494D50] uppercase font-semibold">
                  Protocolo Clínico
                </span>
              </div>

              <h2 className="font-display text-lg font-bold text-[#333333] group-hover:text-[#67235E] transition-colors">
                {service.name}
              </h2>

              <p className="text-xs text-[#494D50] leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-[#CCD6DF] flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-[#67235E] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B88508]" />
                Previa Valoración
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  aria-label={`Ver detalles de ${service.name}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#CC3366] hover:text-[#B88508] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Consultar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Ethical & Sector Notice (From Stitch) */}
      <section className="bg-[#EBE8E3] p-6 sm:p-8 border border-[#CCD6DF] space-y-2.5">
        <div className="flex items-center gap-2 text-[#735200]">
          <Scale className="w-5 h-5 text-[#B88508]" />
          <h3 className="font-display text-base font-bold text-[#333333] uppercase">
            Transparencia & Marco Legal
          </h3>
        </div>
        <p className="text-xs text-[#333333] leading-relaxed">
          En cumplimiento con la ética médica y la normativa vigente en Colombia, no publicamos tarifas fijas sin una valoración diagnóstica individual. Cada organismo responde de forma única y el plan de tratamiento se formula con absoluta honestidad facultativa.
        </p>
      </section>

      {/* Primary Conversion Section (Deep Plum from Stitch) */}
      <section className="bg-[#67235E] text-white p-8 sm:p-12 text-center space-y-5 border border-[#D4A73A]/40 shadow-sm">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A73A] block">
          Inicia Tu Proceso con Responsabilidad
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
          Diagnóstico ético adaptado a tu biología
        </h3>
        <p className="text-xs sm:text-sm text-white/90 max-w-md mx-auto">
          Reserva tu espacio presencial en nuestras sedes de Chía o Zipaquirá con nuestro equipo de profesionales.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('/valoracion')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#CC3366] hover:bg-[#D4A73A] hover:text-[#333333] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Agendar valoración médica previa
          </button>
        </div>
      </section>

    </div>
  );
};
