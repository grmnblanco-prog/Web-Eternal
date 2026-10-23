/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Copy, Check, FileText, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { FINAL_TEXTS_DOCUMENT, IMAGE_PROVENANCE_LIST } from '../data/deliverables';

interface ReviewDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewDocumentModal: React.FC<ReviewDocumentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'textos' | 'imagenes'>('textos');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAllTexts = () => {
    let fullText = `${FINAL_TEXTS_DOCUMENT.title}\nCliente: ${FINAL_TEXTS_DOCUMENT.client}\nPara: ${FINAL_TEXTS_DOCUMENT.preparedFor}\nFecha: ${FINAL_TEXTS_DOCUMENT.date}\n\n`;
    FINAL_TEXTS_DOCUMENT.sections.forEach((sec) => {
      fullText += `=== ${sec.page} ===\n${sec.content}\n\n`;
    });
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-doc-title"
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#CCD6DF] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#571C4F] to-[#67235E] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar documento"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3DE9C] block mb-1">
            Entregables Oficiales #3 y #4 · Sección 14
          </span>
          <h2 id="review-doc-title" className="font-serif text-2xl sm:text-3xl font-bold">
            Documento de Textos & Procedencia de Imágenes
          </h2>
          <p className="text-xs text-[#FAF7F2]/80 mt-1 max-w-xl">
            Preparado para revisión y aprobación previa de Martha Lucía Aguilera Muñoz y la dirección del centro.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#CCD6DF] bg-[#FAF7F2] px-6 sm:px-8">
          <button
            onClick={() => setActiveTab('textos')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'textos'
                ? 'border-[#B88508] text-[#67235E] bg-white'
                : 'border-transparent text-[#494D50] hover:text-[#67235E]'
            }`}
          >
            <FileText className="w-4 h-4 text-[#B88508]" />
            <span>Textos Finales por Página (Entregable #4)</span>
          </button>

          <button
            onClick={() => setActiveTab('imagenes')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'imagenes'
                ? 'border-[#B88508] text-[#67235E] bg-white'
                : 'border-transparent text-[#494D50] hover:text-[#67235E]'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#B88508]" />
            <span>Lista de Imágenes y Procedencia (Entregable #3)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {activeTab === 'textos' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-[#CCD6DF]/60">
                <span className="text-xs text-[#494D50]">
                  Textos compilados rigurosamente sin promesas, sin precios y con enfoque de estética responsable.
                </span>
                <button
                  onClick={handleCopyAllTexts}
                  className="px-4 py-2 bg-[#67235E] hover:bg-[#521c4b] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar todo el documento'}</span>
                </button>
              </div>

              <div className="space-y-6 text-xs text-[#333333]">
                {FINAL_TEXTS_DOCUMENT.sections.map((sec, idx) => (
                  <div key={idx} className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#CCD6DF] space-y-2">
                    <h3 className="font-serif font-bold text-sm text-[#67235E] border-b border-[#CCD6DF]/60 pb-1.5">
                      {sec.page}
                    </h3>
                    <pre className="font-sans whitespace-pre-wrap text-[11px] text-[#494D50] leading-relaxed">
                      {sec.content}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-[#494D50]">
                Conforme a la Sección 8 del prompt, se han priorizado imágenes originales con derechos comprobados del centro, evitando fotografías de antes/después o testimonios sin consentimiento vigente.
              </p>

              <div className="border border-[#CCD6DF] rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F2] text-[#67235E] font-bold border-b border-[#CCD6DF]">
                    <tr>
                      <th className="p-3.5">Recurso / Descripción</th>
                      <th className="p-3.5">Fuente / Origen</th>
                      <th className="p-3.5">Tipo</th>
                      <th className="p-3.5">Uso en la Web</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CCD6DF]">
                    {IMAGE_PROVENANCE_LIST.map((img, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/30">
                        <td className="p-3.5 font-medium text-[#333333]">{img.description}</td>
                        <td className="p-3.5 font-mono text-[11px] text-gray-500 break-all">{img.source}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#67235E]/10 text-[#67235E]">
                            {img.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-gray-600">{img.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#CCD6DF] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#67235E] text-white text-xs font-semibold rounded-xl hover:bg-[#521c4b] transition-colors cursor-pointer"
          >
            Cerrar Documento
          </button>
        </div>

      </div>
    </div>
  );
};
