/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Send,
  MessageCircle,
  Calendar,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { createSpeechHelper, createSpeechRecognitionHelper } from '../utils/speech';
import { OFFICIAL_PHONE, buildWhatsAppUrl } from '../utils/booking';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  showWhatsAppCta?: boolean;
}

interface VirtualAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: (serviceName?: string) => void;
}

export const VirtualAssistantModal: React.FC<VirtualAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigateToBooking,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '¡Hola! Soy Elena, tu orientadora virtual en Eternal Institute. Estoy aquí para contarte sobre nuestros tratamientos faciales y corporales, nuestras sedes en Chía y Zipaquirá o explicarte cómo funciona la valoración profesional sin compromiso. ¿En qué te puedo orientar hoy?',
      timestamp: 'Ahora',
      showWhatsAppCta: true,
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false); // Audio toggle (unintrusive by default)
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const speechHelper = useRef(createSpeechHelper());
  const recognitionHelper = useRef(createSpeechRecognitionHelper());

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Clean up speech on close
  useEffect(() => {
    if (!isOpen) {
      speechHelper.current.stop();
      recognitionHelper.current.stopListening();
      setIsSpeaking(false);
      setIsListening(false);
      setCurrentlySpeakingId(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    '¿Qué es la valoración previa?',
    'Sedes y horarios en Chía y Zipaquirá',
    'Tratamiento para sobrepeso',
    'Rejuvenecimiento facial',
    'Depilación láser definitiva',
  ];

  const handleSpeak = (text: string, msgId: string) => {
    if (currentlySpeakingId === msgId && isSpeaking) {
      speechHelper.current.stop();
      setIsSpeaking(false);
      setCurrentlySpeakingId(null);
      return;
    }

    setCurrentlySpeakingId(msgId);
    speechHelper.current.speak(
      text,
      () => setIsSpeaking(true),
      () => {
        setIsSpeaking(false);
        setCurrentlySpeakingId(null);
      }
    );
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: text,
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const replyText = data.reply || 'Con gusto te oriento sobre nuestros servicios y sedes.';

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showWhatsAppCta: true,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // If spoken audio mode is enabled, speak out loud
      if (isAudioEnabled) {
        handleSpeak(replyText, assistantMsg.id);
      }
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          'Puedes consultarnos cualquier inquietud directamente a través de nuestra línea de WhatsApp al 3114656836 para recibir asesoría personalizada inmediata.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showWhatsAppCta: true,
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleVoiceInput = () => {
    if (isListening) {
      recognitionHelper.current.stopListening();
      setIsListening(false);
    } else {
      const started = recognitionHelper.current.startListening(
        (transcript) => {
          setInput(transcript);
          setIsListening(false);
          // Automatically send voice command
          if (transcript.trim()) {
            handleSendMessage(transcript);
          }
        },
        (err) => {
          console.warn('Voice input recognition error:', err);
          setIsListening(false);
        },
        () => setIsListening(false)
      );
      if (started) {
        setIsListening(true);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="assistant-title"
    >
      <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full h-[88vh] max-h-[720px] shadow-2xl border border-[#CCD6DF] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#551A4D] via-[#67235E] to-[#4D1845] text-white flex items-center justify-between border-b border-[#D4A73A]/30">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/assets/elena_portrait.jpg"
                alt="Elena - Asistente Virtual"
                className="w-11 h-11 rounded-full object-cover border-2 border-[#D4A73A] shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#67235E]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 id="assistant-title" className="font-display text-lg font-bold tracking-tight">
                  Elena · Asistente Virtual
                </h2>
                <span className="px-2 py-0.5 bg-[#D4A73A]/20 text-[#F3DE9C] text-[10px] uppercase tracking-wider font-semibold rounded">
                  IA Oficial
                </span>
              </div>
              <p className="text-[11px] text-white/75 font-sans">
                Orientación ética y personalizada · Chía y Zipaquirá
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Speech Toggle Button */}
            <button
              onClick={() => {
                const next = !isAudioEnabled;
                setIsAudioEnabled(next);
                if (!next) {
                  speechHelper.current.stop();
                  setIsSpeaking(false);
                  setCurrentlySpeakingId(null);
                }
              }}
              className={`p-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                isAudioEnabled
                  ? 'bg-[#D4A73A] text-[#333333] font-semibold'
                  : 'bg-white/10 text-white/80 hover:text-white hover:bg-white/20'
              }`}
              title={isAudioEnabled ? 'Respuestas habladas activadas' : 'Activar respuestas habladas con voz'}
              aria-label={isAudioEnabled ? 'Desactivar voz hablada' : 'Activar voz hablada'}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline text-[11px]">{isAudioEnabled ? 'Voz ON' : 'Voz OFF'}</span>
            </button>

            {/* Direct WhatsApp channel shortcut in header */}
            <a
              href={buildWhatsAppUrl('Hola, quisiera comunicarme con una coordinadora por WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors cursor-pointer"
              title="Chatear por WhatsApp con una persona"
              aria-label="Abrir WhatsApp oficial"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar asistente virtual"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Banner Helper Notice */}
        {isAudioEnabled && (
          <div className="bg-amber-50 px-4 py-2 text-[11px] text-amber-900 border-b border-amber-200/80 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#B88508]" />
              <strong>Modo hablado activado:</strong> Elena leerá en voz alta sus respuestas.
            </span>
            <button
              onClick={() => {
                speechHelper.current.stop();
                setIsSpeaking(false);
                setIsAudioEnabled(false);
              }}
              className="text-xs text-[#B88508] underline hover:text-[#67235E]"
            >
              Silenciar
            </button>
          </div>
        )}

        {/* Messages List Area */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs font-sans">
          {messages.map((msg) => {
            const isAssistant = msg.role === 'assistant';
            const isPlayingThis = currentlySpeakingId === msg.id && isSpeaking;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
              >
                {isAssistant && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A73A]/60 shadow-xs shrink-0 mt-1">
                    <img
                      src="/assets/elena_portrait.jpg"
                      alt="Elena"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[78%] space-y-2 ${isAssistant ? '' : 'items-end'}`}>
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl shadow-xs leading-relaxed whitespace-pre-wrap ${
                      isAssistant
                        ? 'bg-white text-[#333333] border border-[#CCD6DF]'
                        : 'bg-[#67235E] text-white rounded-tr-none'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {/* Assistant Message Actions: Speak out loud button + Timestamp */}
                  {isAssistant && (
                    <div className="flex flex-wrap items-center gap-2 pt-0.5 px-1 text-[11px] text-[#494D50]">
                      <button
                        onClick={() => handleSpeak(msg.content, msg.id)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] transition-colors cursor-pointer ${
                          isPlayingThis
                            ? 'bg-[#B88508] text-white border-[#B88508]'
                            : 'bg-white border-[#CCD6DF] text-[#494D50] hover:text-[#67235E] hover:border-[#B88508]'
                        }`}
                        title="Escuchar esta respuesta"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlayingThis ? 'Reproduciendo...' : 'Escuchar'}</span>
                      </button>

                      <span className="text-gray-400">{msg.timestamp}</span>

                      {/* In-chat WhatsApp Handoff Option */}
                      {msg.showWhatsAppCta && (
                        <a
                          href={buildWhatsAppUrl(
                            `Hola, estuve conversando con la asistente Elena y quisiera hablar con una coordinadora de Eternal Institute: "${msg.content.slice(0, 80)}..."`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-800 font-medium ml-auto"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Pasar a WhatsApp ({OFFICIAL_PHONE})</span>
                        </a>
                      )}
                    </div>
                  )}

                  {!isAssistant && (
                    <div className="text-right text-[10px] text-gray-400 px-1">
                      {msg.timestamp}
                    </div>
                  )}
                </div>

                {!isAssistant && (
                  <div className="w-8 h-8 rounded-xl bg-[#CC3366] text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4A73A]/60 shadow-xs shrink-0">
                <img
                  src="/assets/elena_portrait.jpg"
                  alt="Elena"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-white border border-[#CCD6DF] rounded-2xl text-xs text-[#494D50] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CC3366] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#B88508] animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-[#67235E] animate-pulse delay-200" />
                <span className="italic pl-1">Elena está redactando tu respuesta...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggested Chips (Non-invasive guidance) */}
        <div className="px-4 py-2 border-t border-[#CCD6DF]/80 bg-white/70 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88508] shrink-0">
            Sugerencias:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              disabled={isLoading}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#F0EDE9] hover:bg-[#FAF7F2] text-[#333333] hover:text-[#67235E] border border-[#CCD6DF] rounded-full text-[11px] font-medium transition-colors shrink-0 cursor-pointer disabled:opacity-50"
            >
              <span>{prompt}</span>
              <ChevronRight className="w-3 h-3 text-[#B88508]" />
            </button>
          ))}
        </div>

        {/* Bottom Input & Voice Command Controls */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#CCD6DF] space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Mic Button for spoken voice input */}
            <button
              type="button"
              onClick={handleToggleVoiceInput}
              disabled={isLoading}
              className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse shadow-md ring-2 ring-red-300'
                  : 'bg-[#F0EDE9] hover:bg-[#EBE8E3] text-[#333333] border border-[#CCD6DF]'
              }`}
              title={isListening ? 'Escuchando... clic para detener' : 'Hablar por micrófono'}
              aria-label={isListening ? 'Detener dictado por voz' : 'Hablar por micrófono a Elena'}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-[#67235E]" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? 'Escuchando tu voz...' : 'Escribe o presiona el micrófono para hablar...'}
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-xl border border-[#CCD6DF] text-xs bg-white focus:outline-none focus:border-[#67235E] disabled:bg-gray-50"
              aria-label="Mensaje para la asistente virtual"
            />

            {/* Send button */}
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 rounded-xl bg-[#CC3366] hover:bg-[#B88508] text-white transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Footer Links: WhatsApp Alternative & Booking */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-[#494D50] pt-1 px-1">
            <button
              onClick={() => {
                onClose();
                onNavigateToBooking();
              }}
              className="text-[#67235E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#CC3366]" />
              <span>Agendar valoración médica previa</span>
            </button>

            <a
              href={buildWhatsAppUrl('Hola, quisiera consultar directamente por WhatsApp al 3114656836.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: {OFFICIAL_PHONE}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
