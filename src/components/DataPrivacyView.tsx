/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, Phone, FileText, AlertCircle } from 'lucide-react';
import { OFFICIAL_EMAIL, OFFICIAL_PHONE } from '../utils/booking';

export const DataPrivacyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Title */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B88508]">
          Marco Legal y Normativo · Colombia
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#67235E]">
          Política de Tratamiento de Datos Personales
        </h1>
        <p className="text-xs sm:text-sm text-[#494D50]">
          En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto Reglamentario 1377 de 2013.
        </p>
      </div>

      {/* Notice / Status Indicator */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Aviso de revisión legal:</strong> La siguiente estructura general establece los principios de recolección y custodia de información para la gestión de citas de valoración en Eternal Institute. El texto formal definitivo se encuentra en proceso de homologación por la dirección jurídica del centro.
        </p>
      </div>

      {/* Structured Sections */}
      <div className="bg-white rounded-3xl border border-[#CCD6DF] p-6 sm:p-10 space-y-8 text-xs text-[#333333] leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#67235E]">
            1. Identificación del Responsable del Tratamiento
          </h2>
          <p className="text-[#494D50]">
            <strong>Razón Social:</strong> Eternal Institute Medicina Estética Responsable<br />
            <strong>Dirección comercial:</strong> Avenida Pradilla 2 Este 71, local 129 (Chía) y Centro Comercial La Casona local 230 (Zipaquirá), Cundinamarca, Colombia.<br />
            <strong>Correo electrónico:</strong> {OFFICIAL_EMAIL}<br />
            <strong>Línea de contacto:</strong> {OFFICIAL_PHONE}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#67235E]">
            2. Finalidad del Tratamiento de Datos
          </h2>
          <p className="text-[#494D50]">
            Los datos personales recolectados a través de nuestro sitio web y formularios de agendamiento (nombre, teléfono, correo electrónico, sede de preferencia y motivo de consulta) serán tratados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#494D50]">
            <li>Coordinar, agendar y confirmar citas de valoración profesional presencial.</li>
            <li>Brindar respuesta oportuna a consultas sobre servicios y protocolos estéticos.</li>
            <li>Llevar el registro de seguimiento estético individualizado en sede, salvaguardando el secreto profesional y la confidencialidad.</li>
            <li>Remitir recordatorios de citas solicitadas expresamente por el titular.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#67235E]">
            3. Datos de Carácter Sensible y de Salud
          </h2>
          <p className="text-[#494D50]">
            Eternal Institute informa que la información referente a antecedentes físicos o condiciones de la piel se clasifica como dato sensible. Su suministro es de carácter voluntario y se recopila únicamente con el consentimiento previo, expreso e informado del paciente durante la valoración clínica para asegurar un procedimiento estético exento de contraindicaciones.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#67235E]">
            4. Derechos de los Titulares (Habeas Data)
          </h2>
          <p className="text-[#494D50]">
            De acuerdo con el artículo 8 de la Ley 1581 de 2012, usted como titular de datos personales cuenta con el derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#494D50]">
            <li>Conocer, actualizar y rectificar sus datos personales en cualquier momento.</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
            <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
            <li>Revocar la autorización o solicitar la supresión de sus datos cuando no medie un deber legal o contractual de permanencia.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#67235E]">
            5. Canales para el Ejercicio de sus Derechos
          </h2>
          <p className="text-[#494D50]">
            Para ejercer sus derechos de consulta, rectificación o supresión de datos, puede enviar una solicitud escrita indicando su nombre completo y número de identificación a:
          </p>
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#CCD6DF] space-y-1 text-xs">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#B88508]" />
              <strong>Correo:</strong> {OFFICIAL_EMAIL}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#25D366]" />
              <strong>WhatsApp de atención:</strong> {OFFICIAL_PHONE}
            </p>
          </div>
        </section>

      </div>

    </div>
  );
};
