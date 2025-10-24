import React from 'react';
import { PARA_QUEM_ITEMS } from '../constants';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ParaQuemESection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#514e4a] mb-12">Para quem é a Mentoria</h2>
          <div className="space-y-4">
            {PARA_QUEM_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckIcon />
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemESection;