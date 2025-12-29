import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { useChatStore } from '@/state/chatStore';
import { ChatWindow } from './ChatWindow';

export const ChatButton = () => {
  const { isOpen, setIsOpen } = useChatStore();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="size-14 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center transition-colors hover:bg-indigo-700"
          aria-label={isOpen ? "Close Chat" : "Open Support Chat"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageSquare size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <ChatWindow />
    </>
  );
};
