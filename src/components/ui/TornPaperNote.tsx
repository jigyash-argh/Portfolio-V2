import React from 'react';
import { motion } from 'framer-motion';

interface TornPaperNoteProps {
  text: string;
  rotation?: number;
  className?: string;
  dragConstraints?: React.RefObject<Element>;
}

const TornPaperNote: React.FC<TornPaperNoteProps> = ({ text, rotation = 0, className = "", dragConstraints }) => {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
      initial={{ rotate: rotation }}
      className={`absolute cursor-grab active:cursor-grabbing w-48 bg-[#e8d5c4] p-4 shadow-md ${className}`}
      // A CSS clip-path to give it a slightly irregular, torn paper edge at the bottom
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 80% 96%, 70% 100%, 60% 95%, 50% 100%, 40% 96%, 30% 100%, 20% 95%, 10% 100%, 0 95%)' }}
    >
      {/* Masking Tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm -rotate-3 border border-white/20 shadow-sm"></div>
      
      {/* Note Text */}
      <p className="font-handwritten text-2xl text-[#2c2c2c] leading-tight text-center mt-2">
        {text}
      </p>
      
      {/* Faint lines for notebook paper effect */}
      <div className="absolute inset-0 top-8 pointer-events-none opacity-20"
           style={{ backgroundImage: 'linear-gradient(transparent 90%, #3b82f6 90%)', backgroundSize: '100% 1.5rem' }}>
      </div>
    </motion.div>
  );
};

export default TornPaperNote;