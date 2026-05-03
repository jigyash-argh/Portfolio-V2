import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-transparent pt-8 pb-4 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-center items-center gap-6 md:gap-10">
        
        {/* Smiley Icon */}
        <div className="text-[#fdf6e9] hover:text-[#e74c3c] transition-colors cursor-pointer text-xl font-bold rotate-90 md:rotate-0">
          :)
        </div>

        {/* Navigation Links - Lowercase & Handwritten style */}
        <div className="flex gap-6 md:gap-10">
          <a href="#about" className="text-[#fdf6e9] hover:text-[#e74c3c] transition-colors duration-300 text-lg md:text-xl font-handwritten tracking-wide">
            about
          </a>
          <a href="#work" className="text-[#fdf6e9] hover:text-[#e74c3c] transition-colors duration-300 text-lg md:text-xl font-handwritten tracking-wide">
            work
          </a>
          <a href="#connect" className="text-[#fdf6e9] hover:text-[#e74c3c] transition-colors duration-300 text-lg md:text-xl font-handwritten tracking-wide">
            connect
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;