import { FaqItem, DominarItem } from './types';
import React from 'react';

// FIX: Rewrote JSX to React.createElement to support usage in a .ts file.
// The file contains React components but has a .ts extension, which does not
// allow JSX syntax. Using React.createElement is the equivalent and works
// in regular TypeScript files.
const DominarIcon1 = () => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-10 w-10 text-[#2c6b67]",
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
        className: "h-10 w-10 text-[#2c6b67]",
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
        className: "h-10 w-10 text-[#2c6b67]",
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
        description: 'Monte uma rotina previsível sem depender de sorte.',
    },
    {
        icon: React.createElement(DominarIcon3),
        title: 'Negociação e Vendas',
        description: 'Conduza conversas com familiares sem medo de falar de preço.',
    }
];

export const PARA_QUEM_ITEMS: string[] = [
  'Fisioterapeutas que querem construir uma carreira sólida no atendimento domiciliar.',
  'Quem cansou de depender de indicação e quer previsibilidade.',
  'Quem quer subir ticket e ser reconhecido como especialista.',
];

export const DEPOIMENTO = {
  quote: "Quando eu aprendi a me posicionar e demonstrar, na prática, os resultados que eu alcanço, que deixei de ouvir 'tá caro'. Agora escuto: 'quando podemos começar?'",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'E se eu estiver começando agora?',
    answer: 'Perfeito. Vai aprender a se posicionar certo desde o início.',
  },
  {
    question: 'E se eu já estiver cheio de pacientes?',
    answer: 'Vai aprender a cobrar o que vale e criar fila de espera.',
  },
  {
    question: 'Tem garantia?',
    answer: 'Sim. Se até a metade você não tiver clareza sobre seu posicionamento e rotina, ganha uma sessão 1:1 extra pra ajustar.',
  },
];