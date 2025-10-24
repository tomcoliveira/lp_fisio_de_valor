import React from 'react';
import { DEPOIMENTO } from '../constants';

const DepoimentoSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-teal-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-10 md:p-14 rounded-xl shadow-lg text-center relative">
          <svg className="absolute top-0 left-0 -translate-x-4 -translate-y-4 h-16 w-16 text-teal-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.333 7C5.8 7 3 9.8 3 13.333c0 2.25 1.125 4.333 2.917 5.583.5.333 1.083.5 1.75.5H9v-5.833h-2.5c-.458 0-.833-.375-.833-.834 0-.458.375-.833.833-.833H9V7zm13.334 0c-3.533 0-6.333 2.8-6.333 6.333 0 2.25 1.125 4.333 2.916 5.583.5.333 1.084.5 1.75.5h1.334v-5.833H19.5c-.458 0-.833-.375-.833-.834 0-.458.375-.833.833-.833h2.5V7z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic relative z-10">
            <p>"{DEPOIMENTO.quote}"</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DepoimentoSection;