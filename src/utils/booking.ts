/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  sede: 'chia' | 'zipaquira';
  service: string;
  preferredTime?: 'manana' | 'tarde';
  preferredDay?: string;
  comments?: string;
  dataProtectionAccepted: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const OFFICIAL_PHONE = '3114656836';
export const OFFICIAL_PHONE_INTL = '573114656836';
export const OFFICIAL_EMAIL = 'contactoeternalinstitute@gmail.com';

/**
 * Normalizes phone numbers (removes spaces, hyphens, prefixes)
 */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('57') && digits.length === 12) {
    return digits.slice(2);
  }
  return digits;
}

/**
 * Validates a booking form submission according to medical aesthetic protocol
 */
export function validateBookingForm(data: BookingData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Por favor ingresa tu nombre completo.';
  }

  const cleanPhone = normalizePhone(data.phone || '');
  if (!cleanPhone || cleanPhone.length < 7 || cleanPhone.length > 10) {
    errors.phone = 'Por favor ingresa un número de teléfono o WhatsApp válido (10 dígitos).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Por favor ingresa un correo electrónico válido.';
  }

  if (!data.sede || (data.sede !== 'chia' && data.sede !== 'zipaquira')) {
    errors.sede = 'Por favor selecciona la sede de tu preferencia (Chía o Zipaquirá).';
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Por favor indica el servicio de interés o valoración general.';
  }

  if (!data.dataProtectionAccepted) {
    errors.dataProtectionAccepted = 'Es necesario autorizar el tratamiento de datos para coordinar tu cita.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates official WhatsApp wa.me link with URL-encoded message
 */
export function buildWhatsAppUrl(message: string, phone: string = OFFICIAL_PHONE_INTL): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Contextual message preloader as mandated in Section 11 of the specification
 */
export function getWhatsAppContextMessage(options: {
  page?: string;
  serviceName?: string;
  sedeName?: 'Chía' | 'Zipaquirá' | string;
  bookingData?: Partial<BookingData>;
}): string {
  if (options.bookingData && options.bookingData.name) {
    const b = options.bookingData;
    const clientName = (b.name || '').trim();
    const sedeLabel = b.sede === 'chia' ? 'Chía' : 'Zipaquirá';
    const horario = b.preferredTime === 'manana' ? 'en la mañana' : b.preferredTime === 'tarde' ? 'en la tarde' : 'por convenir';
    return `Hola, mi nombre es ${clientName}. Quisiera solicitar una cita de valoración profesional en la sede de ${sedeLabel} para ${b.service || 'orientación general'} (${horario}).`;
  }

  if (options.serviceName) {
    return `Hola, quisiera información sobre ${options.serviceName}.`;
  }

  if (options.sedeName) {
    return `Hola, quisiera información sobre la sede de ${options.sedeName}.`;
  }

  return 'Hola, quisiera información sobre los servicios de Eternal Institute.';
}

/**
 * Sectorial compliance checker (ensures no banned commercial health claims)
 */
const BANNED_TERMS = [
  'garantizado',
  'garantizada',
  'garantizamos',
  '100% efectivo',
  'elimina de raíz',
  'cura definitiva',
  'antes y después',
  'descuento imperdible',
  'precio rebajado',
];

export function checkComplianceCopy(text: string): { isCompliant: boolean; flaggedTerms: string[] } {
  const lower = text.toLowerCase();
  const flagged = BANNED_TERMS.filter((term) => lower.includes(term));
  return {
    isCompliant: flagged.length === 0,
    flaggedTerms: flagged,
  };
}
