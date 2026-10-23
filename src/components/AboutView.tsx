/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DIRECTOR_DATA, CLINICAL_STAFF } from '../data/team';
import {
  Award,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
  Calendar,
  Building,
  Heart
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Intro Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#D4A73A]" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B88508]">
            Compromiso Clínico
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#67235E] uppercase tracking-tight">
          Dirección y Equipo Profesional
        </h1>
        <p className="text-sm sm:text-base text-[#494D50] leading-relaxed">
          Ética médica, rigor metodológico y un acompañamiento profundamente humano diseñado para transformar la salud y el bienestar.
        </p>
      </div>

      {/* Directora Feature Card (From Stitch Design) */}
      <div className="bg-white border border-[#CCD6DF] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Portrait Container */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F0EDE9] border border-[#CCD6DF]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbeyTkqpIqHNV3ZOZEt8PbAEnfx63Rbg5RAcGP8pdyr_SrVFAlrbAi4ahRDTqSxqnrbmDyaBOrMuHVtLqQz_DQuBysbQgPBKyK_JsVR_PUWaECYFEiT-ENFymKNa1ySJFXcaMoXRNJCSw0SkpFfDJirZ_rFA2u2va1YMxgqoToVdTlFlOu8t8TjrbOrIiOePwLcDKk1wo6MpiSWhrbxw-VpiKhv-MXaMrBSpxRZUkbmnjOLzaeFu9cig"
              alt="Martha Lucía Aguilera Muñoz"
              className="w-full h-full object-cover contrast-[1.05]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-12 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A73A] block mb-1">
                Fundadora & Dirección General
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
                Martha Lucía Aguilera Muñoz
              </h2>
            </div>
          </div>
        </div>

        {/* Credentials & Bio */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Experience Badge */}
          <div className="p-3 bg-[#F6F3EE] border border-[#CCD6DF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B88508]" />
              <span className="font-sans text-xs uppercase tracking-wider text-[#333333] font-bold">
                Casi 20 Años de Trayectoria
              </span>
            </div>
            <span className="text-[10px] font-bold text-[#B88508] uppercase tracking-widest">
              Sector Salud
            </span>
          </div>

          {/* Exact Credentials Copy */}
          <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
            Enfermera profesional, especialista en sobrepeso y rejuvenecimiento facial y corporal, life coach y esteticista con casi veinte años de experiencia en el sector de la salud y el bienestar.
          </p>

          <p className="text-xs text-[#494D50] leading-relaxed">
            {DIRECTOR_DATA.bio}
          </p>

          {/* Subdued Golden Framed Philosophy Quotation */}
          <div className="p-5 bg-[#FAF7F2] border border-[#D4A73A]/40 relative">
            <Quote className="w-6 h-6 text-[#D4A73A] absolute top-3 left-3 opacity-30" />
            <blockquote className="font-serif text-sm sm:text-base text-[#67235E] leading-relaxed italic pl-6">
              «Entendemos la estética como un acto de cuidado responsable, donde la seguridad y el acompañamiento personalizado están siempre por encima de cualquier tendencia.»
            </blockquote>
            <div className="mt-3 flex items-center justify-end gap-2 text-[11px] text-[#B88508] font-bold uppercase tracking-wider">
              <span className="w-8 h-[1px] bg-[#D4A73A]/60" />
              <span>Martha L. Aguilera M.</span>
            </div>
          </div>

        </div>

      </div>

      {/* Supportive Clinical Team Section (From Stitch) */}
      <section className="bg-[#EBE8E3] p-6 sm:p-10 space-y-6 border border-[#CCD6DF]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#67235E]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88508]">
              Vocación & Rigor
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#67235E] uppercase tracking-tight">
            Equipo de Auxiliares de Enfermería
          </h3>
          <p className="text-xs sm:text-sm text-[#494D50]">
            Presencia constante y activa en nuestras sedes de <strong>Chía</strong> y <strong>Zipaquirá</strong>.
          </p>
        </div>

        {/* Support Team Imagery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#CCD6DF]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU2nUxKaTk5He50WmViOVDUoTeyQ-y7TyFdlm0LAlh0s3KBXpVfUYckJr5DPR-tsPDTl0bYuFIkAuCCthgS0a3iiowdkz6tCmhAzG8D56LcijUF9CHOP9Eoe7Mkcjp5iTFk1MYg4pyhMNeGdKV9dw99qoozIfiQ9A4pAGiKcTrw28V16ej_PcZH2J6bwnbanfVrD5akgKGA4cPk_mXJeOR_NWoCKjiPI74ZiKDPBeFubdQLZVVX6b4PA"
              alt="Atención auxiliar en sede Chía"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-2 bg-black/75 text-center text-[10px] font-bold uppercase tracking-wider text-white">
              Sede Chía · C.C. Sabana Norte
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#CCD6DF]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGDihuLKGmoxsHzmIsLpc4lfQKK1QtRS3Ecg1l4Plo4LyWzOzm3jqWNtvDyTQOY87QPHkgcTc5oVgBLcWL10IFieeKLE002BgCvI9Fks-c-ledg7Eyn-g03Zq0P1oieeFrLa0piFR_4XCJnfh7gYNC0to7Y7OYdUUQPAROaIia4CBKLgQtK0ElNG8Lv76bXClhB2Ay4Vx0uf6kQmA7BM1eK1tfA7PlwiDNOC5xb_msjjALJ6DPZxqqA"
              alt="Atención auxiliar en sede Zipaquirá"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-2 bg-black/75 text-center text-[10px] font-bold uppercase tracking-wider text-white">
              Sede Zipaquirá · C.C. La Casona
            </div>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="bg-white p-6 border border-[#CCD6DF] space-y-3">
          <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
            Nuestras auxiliares de enfermería han sido capacitadas bajo exigentes estándares técnicos para asegurar que cada momento de tu visita transcurra en un entorno de calidez empática, absoluta discreción y estrictos protocolos de bioseguridad sanitaria.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#735200] font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B88508]" />
              Acreditación Sanitaria
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#CC3366]" />
              Calidez Humana
            </span>
          </div>
        </div>
      </section>

      {/* 3 Pilares de Práctica Médica (From Stitch Design) */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
            Filosofía de Trabajo
          </span>
          <h3 className="font-display text-2xl font-bold text-[#67235E] uppercase tracking-tight">
            Los Pilares de Nuestra Práctica
          </h3>
          <p className="text-xs sm:text-sm text-[#494D50]">
            Fundamentos irrenunciables que guían cada evaluación médica y decisión terapéutica en Eternal Institute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Principio 01 */}
          <div className="bg-white p-6 border border-[#CCD6DF] space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88508] block">
              Principio 01
            </span>
            <h4 className="font-display text-base font-bold text-[#333333] uppercase">
              Rigor Sanitario
            </h4>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Protocolos certificados y bioseguridad médica rigurosa. Cada insumo, aparatología médica y producto responde a trazabilidad sanitaria certificada e inspeccionada.
            </p>
          </div>

          {/* Principio 02 */}
          <div className="bg-white p-6 border border-[#CCD6DF] space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88508] block">
              Principio 02
            </span>
            <h4 className="font-display text-base font-bold text-[#333333] uppercase">
              Seguimiento Continuo
            </h4>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Acompañamiento cercano y meticuloso en cada fase del proceso. No limitamos la relación clínica a la cabina: monitorizamos tu evolución biológica paso a paso.
            </p>
          </div>

          {/* Principio 03 */}
          <div className="bg-white p-6 border border-[#CCD6DF] space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88508] block">
              Principio 03
            </span>
            <h4 className="font-display text-base font-bold text-[#333333] uppercase">
              Enfoque Ético y Honesto
            </h4>
            <p className="text-xs text-[#494D50] leading-relaxed">
              Transparencia absoluta con cada paciente. Recomendamos únicamente lo que tu fisionomía y salud realmente necesitan, descartando tratamientos innecesarios o desmedidos.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Quote Card in Deep Plum */}
      <section className="bg-[#67235E] text-white p-8 border border-[#D4A73A]/40 shadow-sm space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A73A] block">
          Criterio Facultativo
        </span>
        <p className="font-display text-lg sm:text-xl font-medium leading-snug">
          «La belleza armónica es el resultado visible de un cuerpo en equilibrio y una salud integral respetada.»
        </p>
        <div className="flex items-center justify-between text-xs text-white/70 uppercase tracking-wider pt-2 border-t border-white/20">
          <span>Sedes Chía & Zipaquirá</span>
          <span>Atención Personalizada</span>
        </div>
      </section>

      {/* Action CTA Block */}
      <div className="bg-white border border-[#CCD6DF] p-8 text-center space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88508] block">
          Paso Inicial de Cuidado
        </span>
        <h3 className="font-display text-2xl font-bold text-[#67235E] uppercase tracking-tight">
          Tu Bienestar en Manos Expertas
        </h3>
        <p className="text-xs sm:text-sm text-[#494D50] max-w-md mx-auto">
          Conoce nuestras sedes o agenda tu valoración individual para iniciar un plan responsable y adaptado a ti.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('/valoracion')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#CC3366] hover:bg-[#B88508] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Agendar Valoración Individual
          </button>
          <button
            onClick={() => onNavigate('/sedes')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#F6F3EE] hover:bg-[#EBE8E3] text-[#333333] border border-[#CCD6DF] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Conoce Nuestras Sedes
          </button>
        </div>
      </div>

    </div>
  );
};
