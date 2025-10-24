import React from 'react';
import { DOMINAR_ITEMS } from '../constants';

const DominarSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#514e4a]">O que você vai dominar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {DOMINAR_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#514e4a] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-left">
            <p className="text-lg text-gray-700 max-w-2xl">
                Tudo com linguagem simples, método comprovado e prática aplicada à realidade do atendimento domiciliar.
            </p>
        </div>
      </div>
    </section>
  );
};

export default DominarSection;