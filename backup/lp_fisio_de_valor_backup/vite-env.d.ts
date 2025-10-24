/// <reference types="vite/client" />

// Allow importing asset files without TypeScript complaints.
declare module '*.png' {
  const value: string;
  export default value;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
