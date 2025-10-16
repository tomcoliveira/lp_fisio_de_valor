import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FaqItem } from '../types';

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-lg">
      <dt className="text-lg">
        <button onClick={onClick} className="flex w-full items-start justify-between text-left text-gray-900 p-6">
          <span className="font-medium">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <svg
              className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-6 px-6">
            <p className="text-base text-gray-600">{item.answer}</p>
        </div>
      </dd>
    </div>
  );
};


const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-teal-50 py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Dúvidas Frequentes</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tudo o que você precisa saber sobre a mentoria Fisio de Valor.
          </p>
        </div>
        <dl className="mt-10 space-y-4">
           {FAQ_ITEMS.map((item, index) => (
            <FaqItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqSection;