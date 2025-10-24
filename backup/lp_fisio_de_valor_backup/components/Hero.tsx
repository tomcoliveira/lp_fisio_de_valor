import React from 'react';
import heroBanner from '@/assets/banner.png';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-4 overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center bg-contain md:bg-right bg-center md:bg-no-repeat bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-left max-w-full md:max-w-lg w-full">
          <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-[#514e4a] leading-tight animate-fade-in uppercase">
            Seja o Fisio de Valor.
          </h1>
          <p style={{ animationDelay: '200ms' }} className="mt-4 text-base sm:text-lg md:text-2xl text-gray-700 animate-fade-in">
            A mentoria que transforma competência técnica em autoridade, segurança e reconhecimento.
          </p>
          <p style={{ animationDelay: '400ms' }} className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 animate-fade-in hidden md:block">
            Aprenda o que nunca te ensinaram sobre posicionamento, captação e vendas — pra finalmente ser pago pelo que realmente entrega.
          </p>
          <div style={{ animationDelay: '600ms' }} className="mt-8 md:mt-12 animate-fade-in">
            <a
              href="#cta"
              className="bg-[#2c6b67] text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-lg text-base md:text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md inline-block w-auto"
            >
              QUERO SER UM FISIO DE VALOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
