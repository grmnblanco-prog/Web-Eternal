import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeTextForSpeech } from './speech.ts';

test('sanitizeTextForSpeech strips markdown formatting for natural voice synthesis', () => {
  const markdownText = '¡Hola! En **Eternal Institute** ofrecemos:\n• Rejuvenecimiento facial\n• Manejo de sobrepeso\nVisita https://ejemplo.com para más.';
  const cleaned = sanitizeTextForSpeech(markdownText);

  assert.equal(cleaned.includes('**'), false);
  assert.equal(cleaned.includes('•'), false);
  assert.equal(cleaned.includes('https://'), false);
  assert.ok(cleaned.includes('Eternal Institute'));
  assert.ok(cleaned.includes('Rejuvenecimiento facial'));
});

test('sanitizeTextForSpeech handles bullet dashes and multiple newlines', () => {
  const bulletText = 'Nuestras sedes son:\n- Chía en Sabana Norte\n- Zipaquirá en La Casona';
  const cleaned = sanitizeTextForSpeech(bulletText);

  assert.equal(cleaned.includes('- '), false);
  assert.ok(cleaned.includes('Chía en Sabana Norte'));
  assert.ok(cleaned.includes('Zipaquirá en La Casona'));
});
