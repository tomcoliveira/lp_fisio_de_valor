import React from 'react';

const PromiseSection: React.FC = () => {
  const conquests = [
    'Ter um posicionamento claro e confiante.',
    'Construir uma rotina de captação previsível.',
    'Negociar sem medo, com postura e propósito.',
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-[#2c6b67] text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">O que você vai conquistar</h2>
            <ul className="space-y-4">
              {conquests.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-[#FFC700] mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-teal-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-teal-900/50 p-8 rounded-xl border border-teal-600">
                <p className="text-xl md:text-2xl text-center italic text-white">
                  E o melhor: vai ouvir do familiar o que todo fisioterapeuta sonha em ouvir:
                </p>
                <p className="mt-4 text-2xl md:text-3xl text-center font-bold text-[#FFC700]">
                  “Finalmente achei alguém que me passou confiança.”
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;