import React from 'react';

const FloatingCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 p-3 border-t border-gray-200 shadow-lg z-30">
      <a
        href="#cta"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: 'floating_cta_button'
            });
          }
        }}
        className="w-full text-center bg-[#FFC700] text-black font-bold py-3 px-6 rounded-lg text-base hover:bg-opacity-90 transition-all block"
      >
        QUERO VIVER ESSA JORNADA
      </a>
    </div>
  );
};

export default FloatingCta;