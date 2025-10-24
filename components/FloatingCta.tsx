import React from 'react';

const FloatingCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 border-t border-gray-200 shadow-lg z-30">
      <a
        href="https://pay.hotmart.com/X102576529F?checkoutMode=2"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center bg-[#FFC700] text-black font-bold py-3 px-6 rounded-lg text-base hover:bg-opacity-90 transition-all block"
      >
        QUERO VIVER ESSA JORNADA
      </a>
    </div>
  );
};

export default FloatingCta;