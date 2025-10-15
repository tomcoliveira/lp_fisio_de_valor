// FIX: Import FaqItem type to be used for the FAQ_ITEMS constant.
import { DominarItem, FaqItem } from './types';
import React from 'react';

const DominarIcon1 = () => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#FFC700]",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5
  },
    React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  )
);
const DominarIcon2 = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10 text-[#FFC700]",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5
    },
        React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 10V3L4 14h7v7l9-11h-7z"
        })
    )
);
const DominarIcon3 = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10 text-[#FFC700]",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.5
    },
        React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        })
    )
);


export const DOMINAR_ITEMS: DominarItem[] = [
    {
        icon: React.createElement(DominarIcon1),
        title: 'Posicionamento',
        description: 'Aprenda a se apresentar como valor, não custo.',
    },
    {
        icon: React.createElement(DominarIcon2),
        title: 'Captação',
        description: 'Crie uma rotina previsível, que não dependa de sorte.',
    },
    {
        icon: React.createElement(DominarIcon3),
        title: 'Negociação e Vendas',
        description: 'Conduza conversas com familiares com confiança, sem medo de falar de preço.',
    }
];

export const PARA_QUEM_ITEMS: string[] = [
  'Querem ser reconhecidos como referência, não como “disponíveis”.',
  'Cansaram de depender de indicação e improviso.',
  'Querem subir ticket e construir uma rotina previsível.',
];

export const DEPOIMENTO = {
  quote: "Quando aprendi a me posicionar e demonstrar resultados, parei de ouvir ‘tá caro’. Agora escuto: ‘quando podemos começar?’",
};

// FIX: Add FAQ_ITEMS to fix missing export error in FaqSection.tsx
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Para quem é a mentoria?',
    answer: 'A mentoria é para fisioterapeutas que atendem a domicílio e querem se posicionar como autoridade, captar pacientes de forma previsível e negociar com confiança, sem depender apenas de indicações. Se você se sente subvalorizado e quer ser reconhecido pelo resultado que entrega, a mentoria é para você.'
  },
  {
    question: 'Como funciona o acesso às aulas?',
    answer: 'Você terá acesso a uma plataforma com todas as aulas gravadas para assistir no seu ritmo. Além disso, teremos encontros mensais ao vivo para tirar dúvidas e um grupo de acompanhamento contínuo no Telegram para trocas diárias.'
  },
  {
    question: 'E se eu não puder participar dos encontros ao vivo?',
    answer: 'Não se preocupe. Todos os encontros ao vivo são gravados e disponibilizados na plataforma em até 24 horas para você assistir quando for melhor.'
  },
  {
    question: 'A mentoria oferece certificado?',
    answer: 'Sim, ao final da mentoria, você receberá um certificado de conclusão que comprova sua participação e o desenvolvimento das habilidades de posicionamento, captação e negociação.'
  },
  {
    question: 'Qual a duração do acesso à mentoria?',
    answer: 'O acesso à plataforma com as aulas gravadas e ao grupo do Telegram é vitalício. Você poderá revisitar o conteúdo sempre que precisar.'
  }
];