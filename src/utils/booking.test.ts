import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizePhone,
  validateBookingForm,
  buildWhatsAppUrl,
  getWhatsAppContextMessage,
  checkComplianceCopy,
  OFFICIAL_PHONE_INTL,
} from './booking.ts';

test('normalizePhone handles Colombian numbers with and without prefix', () => {
  assert.equal(normalizePhone('3114656836'), '3114656836');
  assert.equal(normalizePhone('+57 311 465 6836'), '3114656836');
  assert.equal(normalizePhone('311-465-6836'), '3114656836');
});

test('validateBookingForm rejects incomplete or invalid data', () => {
  const result = validateBookingForm({
    name: '',
    phone: '123',
    email: 'invalido',
    sede: 'chia',
    service: '',
    dataProtectionAccepted: false,
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.service);
  assert.ok(result.errors.dataProtectionAccepted);
});

test('validateBookingForm accepts well-formed booking submissions', () => {
  const result = validateBookingForm({
    name: 'Carolina Gómez',
    phone: '3114656836',
    email: 'carolina.gomez@ejemplo.com',
    sede: 'zipaquira',
    service: 'Rejuvenecimiento facial',
    dataProtectionAccepted: true,
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('buildWhatsAppUrl constructs correct wa.me link', () => {
  const url = buildWhatsAppUrl('Hola mundo');
  assert.equal(url, `https://wa.me/${OFFICIAL_PHONE_INTL}?text=Hola%20mundo`);
});

test('getWhatsAppContextMessage meets exact prompt section 11 requirements', () => {
  // Inicio
  assert.equal(
    getWhatsAppContextMessage({ page: 'home' }),
    'Hola, quisiera información sobre los servicios de Eternal Institute.'
  );

  // Servicio
  assert.equal(
    getWhatsAppContextMessage({ serviceName: 'Manejo de sobrepeso' }),
    'Hola, quisiera información sobre Manejo de sobrepeso.'
  );

  // Sede
  assert.equal(
    getWhatsAppContextMessage({ sedeName: 'Chía' }),
    'Hola, quisiera información sobre la sede de Chía.'
  );

  // Agendamiento formulario
  const bookingMsg = getWhatsAppContextMessage({
    bookingData: {
      name: 'María Paula',
      sede: 'chia',
      service: 'Moldeo corporal',
      preferredTime: 'tarde',
    },
  });
  assert.ok(bookingMsg.includes('María Paula'));
  assert.ok(bookingMsg.includes('Chía'));
  assert.ok(bookingMsg.includes('Moldeo corporal'));
});

test('checkComplianceCopy flags non-compliant health marketing phrases', () => {
  const cleanText = 'Tratamiento estético orientado a mejorar la apariencia de la piel, previa valoración profesional.';
  const badText = 'Resultados 100% garantizado con precio rebajado y fotos de antes y después.';

  assert.equal(checkComplianceCopy(cleanText).isCompliant, true);
  const badResult = checkComplianceCopy(badText);
  assert.equal(badResult.isCompliant, false);
  assert.ok(badResult.flaggedTerms.includes('garantizado'));
});
