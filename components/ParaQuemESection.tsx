import React from 'react';
import { PARA_QUEM_ITEMS } from '../constants';

const ParaQuemESection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-teal-50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Essa jornada é pra fisioterapeutas que:</h2>
            <ul className="space-y-4">
              {PARA_QUEM_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-[#FFC700] mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Fisio de Valor Logo" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemESection;