import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);

  const toggleCheck = (index: number) => {
    const newItems = [...checkedItems];
    newItems[index] = !newItems[index];
    setCheckedItems(newItems);
  };

  const checklist = [
    "Meaningful work",
    "Diverse team of talented folks",
    "Let's build!"
  ];

  return (
    <section id="connect" className="w-full flex justify-center py-20 mb-20 relative">
      <div className="bg-[#fdf6e9] p-10 md:p-14 rounded-3xl w-full max-w-2xl shadow-xl border-4 border-[#e74c3c] relative">
        
        <h2 className="text-4xl font-serif text-[#e74c3c] mb-8">What I look for</h2>
        
        <div className="flex flex-col gap-6">
          {checklist.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => toggleCheck(index)}
            >
              {/* Custom Hand-drawn Checkbox */}
              <div className="w-8 h-8 border-2 border-[#2c2c2c] rounded flex items-center justify-center relative transition-colors group-hover:border-[#e74c3c]">
                {checkedItems[index] && (
                  <span className="text-[#e74c3c] font-handwritten text-3xl absolute -top-2 left-1">
                    ✓
                  </span>
                )}
              </div>
              
              {/* Label */}
              <span className={`text-2xl font-handwritten transition-colors ${checkedItems[index] ? 'text-[#2c2c2c]' : 'text-zinc-400 group-hover:text-[#2c2c2c]'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Email Button - Only fully active if all items are checked! */}
        <div className="mt-12">
          <a 
            href="mailto:your@email.com" 
            className={`inline-block px-8 py-4 font-bold tracking-widest uppercase transition-all duration-300 border-2 ${
              checkedItems.every(Boolean) 
                ? 'bg-[#e74c3c] text-white border-[#e74c3c] hover:bg-[#c0392b]' 
                : 'bg-transparent text-zinc-400 border-zinc-400 pointer-events-none'
            }`}
          >
            Say Hello :)
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;