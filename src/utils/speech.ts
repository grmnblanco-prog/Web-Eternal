/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SpeechController {
  isSpeaking: boolean;
  speak: (text: string, onEnd?: () => void) => void;
  stop: () => void;
  isSupported: boolean;
}

/**
 * Clean text for natural speech synthesis (removes asterisks, bullets, URLs)
 */
export function sanitizeTextForSpeech(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/[•-]\s+/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\n+/g, '. ')
    .trim();
}

/**
 * Creates a speech synthesis instance configured for warm, clear Spanish pronunciation
 */
export function createSpeechHelper(): {
  speak: (text: string, onStart?: () => void, onEnd?: () => void) => void;
  stop: () => void;
  isSupported: boolean;
} {
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const stop = () => {
    if (isSupported) {
      window.speechSynthesis.cancel();
    }
  };

  const speak = (text: string, onStart?: () => void, onEnd?: () => void) => {
    if (!isSupported) {
      if (onEnd) onEnd();
      return;
    }

    // Stop any ongoing speech
    stop();

    const clean = sanitizeTextForSpeech(text);
    if (!clean) {
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'es-CO';
    utterance.rate = 1.0;
    utterance.pitch = 1.05; // Slightly warmer, gentle pitch

    // Try finding a pleasant Spanish voice
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice =
      voices.find((v) => v.lang.startsWith('es-CO')) ||
      voices.find((v) => v.lang.startsWith('es-MX')) ||
      voices.find((v) => v.lang.startsWith('es-US')) ||
      voices.find((v) => v.lang.startsWith('es'));

    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (err) => {
      console.warn('Speech synthesis error:', err);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  };

  return {
    speak,
    stop,
    isSupported,
  };
}

/**
 * Speech recognition helper for voice input
 */
export function createSpeechRecognitionHelper(): {
  startListening: (
    onResult: (transcript: string) => void,
    onError?: (err: any) => void,
    onEnd?: () => void
  ) => boolean;
  stopListening: () => void;
  isSupported: boolean;
} {
  const isSupported =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  let recognitionInstance: any = null;

  const stopListening = () => {
    if (recognitionInstance) {
      try {
        recognitionInstance.stop();
      } catch (e) {
        // ignore
      }
      recognitionInstance = null;
    }
  };

  const startListening = (
    onResult: (transcript: string) => void,
    onError?: (err: any) => void,
    onEnd?: () => void
  ): boolean => {
    if (!isSupported) return false;

    stopListening();

    try {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-CO';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0]?.[0]?.transcript || '';
        onResult(transcript);
      };

      recognition.onerror = (event: any) => {
        if (onError) onError(event);
      };

      recognition.onend = () => {
        recognitionInstance = null;
        if (onEnd) onEnd();
      };

      recognitionInstance = recognition;
      recognition.start();
      return true;
    } catch (err) {
      if (onError) onError(err);
      return false;
    }
  };

  return {
    startListening,
    stopListening,
    isSupported,
  };
}
