/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Calendar, Menu, X, MapPin, Clock, Phone, Bot } from 'lucide-react';
import { OFFICIAL_PHONE, buildWhatsAppUrl } from '../utils/booking';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenAssistant,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/nosotras', label: 'Nosotras' },
    { path: '/sedes', label: 'Sedes' },
    { path: '/valoracion', label: 'Valoración' },
    { path: '/preguntas', label: 'Preguntas' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = buildWhatsAppUrl('Hola, quisiera información sobre los servicios de Eternal Institute.');

  return (
    <>
      {/* Top micro-bar for institutional reliability and reassurance */}
      <div className="bg-[#571C4F] text-[#FAF7F2] text-xs py-1.5 px-4 hidden md:block border-b border-[#D4A73A]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#F3DE9C]">
              <MapPin className="w-3.5 h-3.5 text-[#D4A73A]" />
              Sedes en Chía y Zipaquirá · Cundinamarca
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#D4A73A]" />
              Lun a Vie: 10:00 a. m. – 7:00 p. m. | Sáb: hasta el mediodía
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#F3DE9C] hover:text-white transition-colors font-medium ml-2"
            >
              <Phone className="w-3 h-3" />
              WhatsApp: {OFFICIAL_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#CCD6DF]/80 py-2.5'
            : 'bg-[#FAF7F2] border-b border-[#CCD6DF]/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88508] rounded-xl text-left"
            aria-label="Eternal Institute - Ir al inicio"
          >
            <Logo variant="horizontal" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#67235E] font-semibold bg-[#67235E]/5'
                      : 'text-[#494D50] hover:text-[#67235E] hover:bg-black/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#B88508] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Elena Assistant, Direct WhatsApp & Agendar Valoración */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#67235E] hover:text-[#CC3366] border border-[#D4A73A]/60 hover:border-[#67235E] rounded-full transition-all duration-200 bg-white/90 shadow-2xs cursor-pointer"
              title="Abrir Asistente Virtual Elena"
            >
              <Bot className="w-3.5 h-3.5 text-[#B88508]" />
              <span className="hidden xl:inline">Asistente</span>
              <span>Elena</span>
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chatear por WhatsApp al 3114656836"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#494D50] hover:text-[#67235E] border border-[#CCD6DF] hover:border-[#B88508] rounded-full transition-all duration-200 bg-white/80"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
              <span>{OFFICIAL_PHONE}</span>
            </a>

            <button
              onClick={() => handleLinkClick('/valoracion')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#CC3366] hover:bg-[#B52857] active:scale-95 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar valoración</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('/valoracion')}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#CC3366] rounded-full sm:hidden"
            >
              Valoración
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#333333] hover:text-[#67235E] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#B88508]"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#CCD6DF] bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#67235E]/10 text-[#67235E] font-semibold'
                        : 'text-[#333333] hover:bg-black/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#B88508]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-[#CCD6DF]/70 space-y-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAssistant();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#67235E]/10 border border-[#D4A73A]/40 text-[#67235E] font-semibold text-xs uppercase tracking-wider cursor-pointer"
              >
                <Bot className="w-4 h-4 text-[#B88508]" />
                <span>Hablar con Asistente Elena (Voz & Chat)</span>
              </button>

              <button
                onClick={() => handleLinkClick('/valoracion')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#CC3366] text-white font-semibold text-sm uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar valoración previa
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#25D366] text-[#333333] font-medium text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp directo: {OFFICIAL_PHONE}
              </a>

              <div className="text-[11px] text-[#494D50] text-center pt-2">
                Sedes en Chía y Zipaquirá · Lunes a Viernes 10am - 7pm
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
