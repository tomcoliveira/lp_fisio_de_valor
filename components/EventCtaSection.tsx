import React from 'react';

const EventCtaSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-[#2c6b67]">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
          O Valor da Fisio — 23 de outubro
        </h2>
        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
          O encontro onde você entende, de uma vez por todas, o que faz um fisioterapeuta ser valorizado — e como se tornar um Fisio de Valor.
        </p>
        <p className="mt-4 text-lg text-teal-200 max-w-3xl mx-auto">
          Quem participar do evento e decidir entrar na mentoria durante o encontro vai receber uma condição especial que não será revelada antes.
        </p>
        <div className="mt-12">
          <a
            href="#cta"
            className="bg-[#FFC700] text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            QUERO PARTICIPAR DO EVENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventCtaSection;
