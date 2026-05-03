import React from 'react';
import Navbar from './components/layouts/Navbar';
import SideBorders from './components/layouts/SideBorders';
import Hero from './sections/Hero';
import ScatteredWork from './sections/ScatteredWork';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1c1a1a] text-[#2c2c2c] relative font-sans overflow-x-hidden selection:bg-[#e74c3c] selection:text-white">
      <SideBorders />

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        
        <main className="w-full max-w-5xl px-4 sm:px-12 flex flex-col">
          <Hero />
          
          {/* Add the new components here */}
          <ScatteredWork />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;