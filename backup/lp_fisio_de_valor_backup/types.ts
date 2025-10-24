// FIX: Import React because React.ReactNode is used in the DominarItem interface.
import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DominarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
