import React from 'react';
import { motion } from 'framer-motion';

export const MessageBubble = ({ message }) => {
  const isAi = message.role === 'ai';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
          isAi
            ? 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
            : 'bg-indigo-600 text-white rounded-tr-none'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <div
          className={`text-[10px] mt-1 ${
            isAi ? 'text-zinc-500' : 'text-indigo-200'
          }`}
        >
          {message.timestamp}
        </div>
      </div>
    </motion.div>
  );
};
