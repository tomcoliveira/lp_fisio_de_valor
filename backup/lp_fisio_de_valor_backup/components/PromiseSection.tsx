import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PromiseSection: React.FC = () => {
    const promises = [
        'Ter um posicionamento claro e que comunica valor.',
        'Ter uma rotina de captação ativa que funciona mesmo sem anúncios.',
        'Saber negociar com segurança, sem se sentir vendedor.',
    ];
  return (
    <section className="py-24 px-4 bg-lime-50">
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#514e4a] mt-2">
          Nesta mentoria, você irá:
        </h2>
         <div className="mt-8 space-y-4">
          {promises.map((promise, index) => (
            <div key={index} className="flex items-start">
              <CheckIcon />
              <span className="text-gray-700 text-lg">{promise}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-yellow-400 pt-8">
            <p className="font-display text-2xl md:text-3xl italic text-gray-700 leading-relaxed">
            E o melhor: vai ouvir de um familiar o que todo fisioterapeuta sonha em ouvir —
            <br/>
            <span className="font-bold text-[#2c6b67] not-italic">“Finalmente achei alguém que me passou confiança.”</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;