import React from 'react';
import { motion } from 'framer-motion';

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="size-1.5 bg-zinc-400 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};
