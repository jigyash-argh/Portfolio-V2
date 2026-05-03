import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative w-full pt-10">
      
      {/* Background doodles */}
      <div className="absolute -left-12 top-20 text-4xl opacity-80 hidden lg:block hover:rotate-12 transition-transform cursor-pointer">
        🧃
      </div>
      <div className="absolute -right-12 top-40 text-4xl opacity-80 hidden lg:block hover:-rotate-12 transition-transform cursor-pointer">
        🍜
      </div>

      {/* The Notebook Container */}
      <div className="w-full bg-[#fdf6e9] rounded-[2rem] border-[6px] border-[#e74c3c] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
        
        {/* Red Binder Tape at top */}
        <div className="h-5 w-full bg-[#e74c3c]"></div>

        {/* The Grid Paper Body */}
        <div className="flex-1 relative p-8 md:p-14"
             style={{
               backgroundImage: `linear-gradient(to right, rgba(231, 76, 60, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(231, 76, 60, 0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between h-full gap-8">
            
            {/* Text Content */}
            <div className="flex flex-col justify-center max-w-sm xl:max-w-md">
              {/* Using the handwritten font */}
              <h1 className="text-5xl md:text-6xl font-handwritten text-[#e74c3c] mb-1">
                Jackie <span className="text-2xl align-top">:)</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-[#e74c3c] mb-6 tracking-wide">
                Product Designer
              </h2>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#e74c3c] leading-[1.1] mb-8">
                Software should<br/>
                <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl">feel easy</span>
              </h3>
              
              <p className="text-[#e74c3c] font-medium tracking-wider text-sm uppercase">
                Cape Town • GMT +2:00
              </p>
            </div>

            {/* Illustration Area */}
            <div className="flex-1 flex justify-center items-end relative min-h-[300px]">
              {/* Replace this div with your actual illustration image */}
              <div className="w-full max-w-[400px] aspect-square border-4 border-dashed border-[#e74c3c]/30 rounded-2xl flex items-center justify-center">
                 <span className="font-handwritten text-[#e74c3c]/50 text-xl">
                   [Main Illustration Here]
                 </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;