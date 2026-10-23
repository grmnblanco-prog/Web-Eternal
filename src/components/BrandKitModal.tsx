/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, Eye } from 'lucide-react';
import { Logo } from './Logo';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const logos = [
    {
      id: 'h-color',
      title: 'Logotipo Horizontal · Color Oficial',
      desc: 'Versión principal para cabecera, papelería y documentos web.',
      svgFile: '/logo-horizontal-color.svg',
      component: <Logo variant="horizontal" theme="color" size="lg" />,
      bg: 'bg-[#FAF7F2]',
    },
    {
      id: 'sq-color',
      title: 'Logotipo Cuadrado · Ciruela y Oro',
      desc: 'Para avatares de redes sociales, portadas y aplicaciones cuadradas.',
      svgFile: '/logo-square-color.svg',
      component: <Logo variant="square" theme="color" size="lg" />,
      bg: 'bg-[#FAF7F2] border border-[#CCD6DF]',
    },
    {
      id: 'h-mono',
      title: 'Logotipo Horizontal · Monocromo Tinta (#333333)',
      desc: 'Para impresión a una sola tinta, facturación y fondos blancos.',
      svgFile: '/logo-horizontal-dark.svg',
      component: <Logo variant="horizontal" theme="monochrome" size="lg" />,
      bg: 'bg-white',
    },
    {
      id: 'sq-mono',
      title: 'Logotipo Cuadrado · Monocromo',
      desc: 'Para sellos, cuños o papelería monocroma.',
      svgFile: '/logo-square-dark.svg',
      component: <Logo variant="square" theme="monochrome" size="lg" />,
      bg: 'bg-white',
    },
  ];

  const palette = [
    { name: 'Dorado Principal', hex: '#B88508', role: 'Acento principal y detalles finos' },
    { name: 'Dorado Claro', hex: '#D4A73A', role: 'Hover, degradados y destellos' },
    { name: 'Ciruela Imperial', hex: '#67235E', role: 'Color secundario y titulares' },
    { name: 'Magenta', hex: '#CC3366', role: 'Acento terciario para CTAs de acción' },
    { name: 'Tinta', hex: '#333333', role: 'Texto principal y monocromo' },
    { name: 'Tinta Suave', hex: '#494D50', role: 'Texto secundario' },
    { name: 'Niebla', hex: '#CCD6DF', role: 'Bordes, líneas y separadores' },
    { name: 'Marfil', hex: '#FAF7F2', role: 'Fondo luminoso y aireado' },
  ];

  const handleCopyLink = (file: string, id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}${file}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brandkit-title"
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#CCD6DF] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#67235E] to-[#4D1845] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar kit de marca"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3DE9C] block mb-1">
            Entregable de Identidad Visual · Sección 14
          </span>
          <h2 id="brandkit-title" className="font-serif text-2xl sm:text-3xl font-bold">
            Kit de Identidad & Logos SVG Oficiales
          </h2>
          <p className="text-xs text-[#FAF7F2]/80 mt-1 max-w-xl">
            Diseñados para Eternal Institute: serif clásica, monograma geométrico sin clichés de siluetas ni hojas, lectura óptima en vector SVG.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Logo Grid */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#67235E]">
              Variaciones de Logotipo (Entregables SVG)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {logos.map((l) => (
                <div
                  key={l.id}
                  className="rounded-2xl border border-[#CCD6DF] overflow-hidden flex flex-col justify-between"
                >
                  <div className={`p-8 flex items-center justify-center min-h-[160px] ${l.bg}`}>
                    {l.component}
                  </div>

                  <div className="p-4 bg-[#FAF7F2] border-t border-[#CCD6DF] space-y-2">
                    <div>
                      <h4 className="font-semibold text-xs text-[#67235E]">{l.title}</h4>
                      <p className="text-[11px] text-[#494D50]">{l.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={l.svgFile}
                        download
                        className="flex-1 py-1.5 px-3 bg-[#67235E] hover:bg-[#521c4b] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar SVG</span>
                      </a>
                      <button
                        onClick={() => handleCopyLink(l.svgFile, l.id)}
                        className="py-1.5 px-3 bg-white border border-[#CCD6DF] hover:border-[#B88508] text-[#333333] text-[11px] font-medium rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copiar ruta del archivo"
                      >
                        {copiedId === l.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === l.id ? 'Copiado' : 'Ruta'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-4 pt-4 border-t border-[#CCD6DF]">
            <h3 className="font-serif text-lg font-bold text-[#67235E]">
              Paleta Cromática de Marca
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {palette.map((c) => (
                <div key={c.hex} className="p-3 rounded-xl border border-[#CCD6DF] bg-white space-y-2">
                  <div
                    className="w-full h-10 rounded-lg shadow-inner border border-black/5"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="font-bold text-[#333333] block text-[11px]">{c.name}</span>
                    <span className="font-mono text-[10px] text-gray-500 block">{c.hex}</span>
                    <span className="text-[10px] text-gray-400 block leading-tight mt-0.5">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#CCD6DF] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#67235E] text-white text-xs font-semibold rounded-xl hover:bg-[#521c4b] transition-colors cursor-pointer"
          >
            Cerrar Kit de Marca
          </button>
        </div>

      </div>
    </div>
  );
};
