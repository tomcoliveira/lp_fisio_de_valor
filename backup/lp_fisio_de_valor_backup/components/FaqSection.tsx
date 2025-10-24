import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FaqItemComponent: React.FC<{ item: typeof FAQ_ITEMS[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
      >
        <span className="text-lg font-semibold text-[#514e4a]">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2c6b67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 px-2 text-gray-600">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#514e4a] mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;