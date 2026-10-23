/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';
import { MapPin, Clock, Mail, Phone, Instagram, ShieldCheck, FileText, Download } from 'lucide-react';
import { OFFICIAL_EMAIL, OFFICIAL_PHONE, buildWhatsAppUrl } from '../utils/booking';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBrandKit: () => void;
  onOpenReviewDoc: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBrandKit,
  onOpenReviewDoc,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4D1845] text-[#FAF7F2] border-t border-[#D4A73A]/25 relative overflow-hidden">
      {/* Subtle background golden glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A73A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Logo variant="horizontal" theme="white" size="md" />
            <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-sans pt-1">
              Centro de estética y medicina estética responsable con sedes en Chía y Zipaquirá.
              Acompañamos a cada persona con seguimiento personalizado, responsable y detallado,
              para que su proceso se desarrolle correctamente.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#D4A73A] text-xs font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Atención bajo valoración previa individual</span>
            </div>
            
            {/* Quick Actions for Deliverables */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-2 text-xs text-[#F3DE9C] hover:text-white transition-colors cursor-pointer text-left"
              >
                <Download className="w-3.5 h-3.5 text-[#D4A73A]" />
                <span>Kit de Marca y Logos SVG oficiales</span>
              </button>
              <button
                onClick={onOpenReviewDoc}
                className="inline-flex items-center gap-2 text-xs text-[#F3DE9C] hover:text-white transition-colors cursor-pointer text-left"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4A73A]" />
                <span>Documento de Textos para Dirección</span>
              </button>
            </div>
          </div>

          {/* Column 2: Sedes y Horarios */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F3DE9C] tracking-wide border-b border-[#D4A73A]/30 pb-2">
              Nuestras Sedes
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-white block">Sede Chía</span>
                <p className="text-[#FAF7F2]/80 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A73A] shrink-0 mt-0.5" />
                  <span>Avenida Pradilla 2 Este 71, local 129 — Centro Comercial Sabana Norte</span>
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="font-semibold text-white block">Sede Zipaquirá</span>
                <p className="text-[#FAF7F2]/80 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A73A] shrink-0 mt-0.5" />
                  <span>Centro Comercial La Casona, local 230</span>
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-[#FAF7F2]/75 space-y-1">
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#D4A73A]" />
                  <span>Lunes a Viernes: 10:00 a. m. a 7:00 p. m.</span>
                </p>
                <p className="pl-4">Sábados: hasta el mediodía (1:00 p. m.)</p>
                <p className="pl-4 text-white/50">Domingos y festivos: Sin servicio</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F3DE9C] tracking-wide border-b border-[#D4A73A]/30 pb-2">
              Contacto y Canales
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={buildWhatsAppUrl('Hola, quisiera información sobre los servicios de Eternal Institute.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#F3DE9C] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: {OFFICIAL_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#F3DE9C] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4A73A]" />
                  <span>{OFFICIAL_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/eternalinstituteestetica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#F3DE9C] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#CC3366]" />
                  <span>@eternalinstituteestetica</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/valoracion')}
                className="w-full py-2.5 px-4 bg-[#CC3366] hover:bg-[#B52857] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Valoración Previa
              </button>
            </div>
          </div>

          {/* Column 4: Marco Ético y Legal */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#F3DE9C] tracking-wide border-b border-[#D4A73A]/30 pb-2">
              Transparencia Sectorial
            </h3>
            <p className="text-[11px] text-[#FAF7F2]/75 leading-relaxed">
              En cumplimiento de la legislación colombiana para servicios de medicina estética y salud,
              Eternal Institute no ofrece promesas de resultados ni procedimientos sin previa valoración
              profesional individual. Los tratamientos tienen propósito estético y de bienestar, no curativo.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <button
                onClick={() => onNavigate('/datos')}
                className="block text-[#D4A73A] hover:underline cursor-pointer"
              >
                Política de tratamiento de datos personales
              </button>
              <button
                onClick={() => onNavigate('/preguntas')}
                className="block text-[#D4A73A] hover:underline cursor-pointer"
              >
                Preguntas frecuentes sobre valoración
              </button>
            </div>
          </div>

        </div>

        {/* Bottom divider and copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/60 gap-4">
          <p>© {currentYear} Eternal Institute Medicina Estética Responsable. Chía y Zipaquirá, Colombia.</p>
          <div className="flex items-center gap-4">
            <span>Directora: Martha Lucía Aguilera Muñoz</span>
            <span className="hidden sm:inline">·</span>
            <span>Seguimiento personalizado, responsable y detallado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
