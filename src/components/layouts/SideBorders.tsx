import React from 'react';

const SideBorders: React.FC = () => {
  // You would replace this array with actual paths to your SVG stamp files
  const stamps = ['stamp1', 'stamp2', 'stamp3', 'stamp4'];

  return (
    <>
      {/* Left Border */}
      <div className="fixed left-0 top-0 bottom-0 w-12 md:w-16 bg-[#1c1a1a] border-r border-[#333] hidden sm:flex flex-col items-center py-4 gap-6 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`left-${i}`} className="w-8 h-8 md:w-10 md:h-10 bg-[#e74c3c] rounded opacity-80 flex-shrink-0">
            {/* <img src={stamps[i % stamps.length]} alt="stamp" /> */}
          </div>
        ))}
      </div>

      {/* Right Border */}
      <div className="fixed right-0 top-0 bottom-0 w-12 md:w-16 bg-[#1c1a1a] border-l border-[#333] hidden sm:flex flex-col items-center py-4 gap-6 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`right-${i}`} className="w-8 h-8 md:w-10 md:h-10 bg-[#e74c3c] rounded opacity-80 flex-shrink-0">
             {/* <img src={stamps[i % stamps.length]} alt="stamp" /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBorders;