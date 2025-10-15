import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-28 pb-24 px-4 overflow-hidden min-h-[95vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-left max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight animate-fade-in uppercase">
            O VALOR DA FISIO não é um evento. É o começo de uma nova jornada que vai te transformar em um verdadeiro Fisio de Valor.
          </h1>
          <p style={{ animationDelay: '200ms' }} className="mt-6 text-xl md:text-2xl text-gray-700 animate-fade-in">
            A jornada que transforma competência técnica em autoridade, segurança e reconhecimento.
          </p>
          <p style={{ animationDelay: '400ms' }} className="mt-8 text-lg md:text-xl text-gray-600 animate-fade-in">
            Aprenda o que nunca te ensinaram sobre posicionamento, captação e negociação — pra finalmente ser pago pelo que realmente entrega.
          </p>
          <div style={{ animationDelay: '600ms' }} className="mt-12 animate-fade-in">
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