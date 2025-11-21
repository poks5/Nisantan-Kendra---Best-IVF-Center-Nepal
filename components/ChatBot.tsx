import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Minimize2 } from 'lucide-react';
import { Translation, ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';

interface ChatBotProps {
  t: Translation;
  lang: 'en' | 'ne';
}

export const ChatBot: React.FC<ChatBotProps> = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
        setMessages([{ role: 'model', text: t.ai.welcome }]);
    }
  }, [isOpen, t.ai.welcome]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Add user message
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userText }];
    setMessages(newHistory);

    // Placeholder for model response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    let accumulatedText = "";

    await streamChatResponse(
      newHistory, 
      lang,
      (chunk) => {
        accumulatedText += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: accumulatedText };
          return updated;
        });
      }
    );
    
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-[90vw] max-w-[380px] h-[550px] mb-4 flex flex-col overflow-hidden border border-slate-100 animate-fade-in-up ring-1 ring-slate-900/5">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex justify-between items-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-900 opacity-90"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-base">Nisantan Assistant</h3>
                <p className="text-xs text-brand-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                  {t.ai.online}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 relative z-10">
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition">
                <Minimize2 size={18} />
                </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-thin">
            <div className="text-center text-[10px] text-slate-400 my-2 bg-slate-100/50 py-1.5 px-3 rounded-full mx-auto w-fit border border-slate-100">
              {t.ai.disclaimer}
            </div>
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-2xl rounded-br-sm' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-sm'
                }`}>
                  {msg.text || (isLoading && idx === messages.length -1 ? <span className="flex gap-1"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]"></span><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span></span> : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-4 py-2.5 border border-slate-200 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400 min-w-0"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !inputValue.trim()}
                className={`p-2 rounded-xl transition-all ${inputValue.trim() ? 'bg-brand-600 text-white shadow-md hover:bg-brand-700' : 'text-slate-300 bg-slate-100'}`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-brand-600 to-brand-500'}`}
      >
        {isOpen ? <X size={28} className="text-white" /> : <MessageSquare size={28} className="text-white fill-white/20" />}
        
        {/* Notification Ping */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};