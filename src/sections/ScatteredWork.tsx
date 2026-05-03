import React, { useRef } from 'react';
import TornPaperNote from '../components/ui/TornPaperNote';
import { motion } from 'framer-motion';

const ScatteredWork: React.FC = () => {
  // This ref acts as the bounding box so users can't drag notes off the screen
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="w-full relative min-h-[800px] py-20" ref={containerRef}>
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-[#fdf6e9] text-3xl font-serif">Selected Works</h2>
      </div>

      {/* Draggable Notes - Placed absolutely to look scattered */}
      <TornPaperNote 
        text="tirelessly pursue clarity." 
        rotation={-6} 
        className="top-32 left-[10%] md:left-[20%]"
        dragConstraints={containerRef}
      />
      <TornPaperNote 
        text="Software should empower." 
        rotation={4} 
        className="top-40 right-[10%] md:right-[25%]"
        dragConstraints={containerRef}
      />
      <TornPaperNote 
        text="Design for moments" 
        rotation={-2} 
        className="top-72 left-1/2 -translate-x-1/2"
        dragConstraints={containerRef}
      />

      {/* Draggable Image Snippets */}
      <motion.div 
        drag 
        dragConstraints={containerRef}
        whileHover={{ scale: 1.02, zIndex: 40 }}
        className="absolute top-80 left-[5%] md:left-[15%] w-64 md:w-80 bg-white p-3 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing -rotate-3"
      >
        <div className="w-full aspect-[4/3] bg-zinc-200 rounded-xl border-2 border-dashed border-zinc-400 flex items-center justify-center font-handwritten text-zinc-500 text-xl">
           Project Image 1
        </div>
      </motion.div>

      <motion.div 
        drag 
        dragConstraints={containerRef}
        whileHover={{ scale: 1.02, zIndex: 40 }}
        className="absolute top-96 right-[5%] md:right-[15%] w-64 md:w-80 bg-white p-3 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing rotate-3"
      >
        <div className="w-full aspect-square bg-zinc-200 rounded-xl border-2 border-dashed border-zinc-400 flex items-center justify-center font-handwritten text-zinc-500 text-xl">
           Project Image 2
        </div>
      </motion.div>

    </section>
  );
};

export default ScatteredWork;