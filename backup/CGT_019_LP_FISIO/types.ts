import React from 'react';

export interface DominarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// FIX: Add FaqItem interface for the FAQ section data structure.
export interface FaqItem {
  question: string;
  answer: string;
}
