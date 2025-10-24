import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-28 pb-24 px-4 overflow-hidden min-h-[95vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-left max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight animate-fade-in uppercase">
            O Valor da Fisio. A jornada da sua transformação começa agora.
          </h1>
          <p style={{ animationDelay: '200ms' }} className="mt-6 text-xl md:text-2xl text-gray-700 animate-fade-in">
            A mentoria que transforma competência técnica em autoridade, segurança e reconhecimento.
          </p>
          <div style={{ animationDelay: '400ms' }} className="mt-12 animate-fade-in">
            <a
              href="#cta"
              className="bg-[#FFC700] text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              QUERO VIVER ESSA JORNADA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;