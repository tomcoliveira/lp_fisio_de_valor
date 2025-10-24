import React from 'react';

const ViradaDeChaveSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl text-left">
        <p className="font-display text-3xl md:text-4xl leading-relaxed text-left text-[#514e4a] italic">
          Você não precisa ser o mais popular, o mais barato ou o mais disponível.
          <br />
          <span className="font-bold text-[#2c6b67] not-italic">Precisa ser o mais confiável.</span>
        </p>
        <p className="mt-12 text-left text-xl text-gray-700 max-w-2xl">
          O familiar não compra fisioterapia. Compra segurança, controle e resultado.
        </p>
        <p className="mt-8 text-left text-xl text-gray-800 font-semibold max-w-2xl">
          Essa mentoria é pra quem quer parar de ser visto como “mais um profissional” e começar a ser reconhecido como o fisioterapeuta que resolve.
        </p>
      </div>
    </section>
  );
};

export default ViradaDeChaveSection;