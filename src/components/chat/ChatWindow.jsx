import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Send, Bot, Shield } from 'lucide-react';
import { useChatStore } from '@/state/chatStore';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

export const ChatWindow = () => {
  const { 
    messages, 
    isOpen, 
    setIsOpen, 
    sendMessage, 
    isTyping, 
    hasGreeted, 
    setHasGreeted,
    addMessage 
  } = useChatStore();
  
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setTimeout(() => {
        addMessage({ role: 'ai', content: "Hi, I’m here to help. What can I do for you today?" });
        setHasGreeted(true);
      }, 500);
    }
  }, [isOpen, hasGreeted, addMessage, setHasGreeted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-6 w-[380px] h-[550px] bg-[#0d0d12] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[100] focus-within:ring-2 ring-indigo-500/20"
          role="dialog"
          aria-label="Support Chat"
        >
          {/* Header */}
          <div className="bg-zinc-900/80 backdrop-blur-md px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Shield className="size-4 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Support AI</h3>
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors"
                aria-label="Minimize"
              >
                <Minus size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-gradient-to-b from-transparent to-zinc-900/20"
          >
            {messages.length === 0 && !isTyping && (
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <Bot className="size-10 text-zinc-700 mb-3" />
                <p className="text-sm text-zinc-500">AstraGuard Assistant is ready to help.</p>
              </div>
            )}
            
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            
            {isTyping && <TypingIndicator />}
          </div>

          {/* Input Footer */}
          <div className="p-4 bg-zinc-900/50 border-t border-zinc-800">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 ring-indigo-500/40 resize-none max-h-32 min-h-[50px] transition-all disabled:opacity-50"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 bottom-2.5 p-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-700 text-white rounded-lg transition-all"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-zinc-600 mt-2 text-center">
              Powered by AstraGuard AI Security
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
