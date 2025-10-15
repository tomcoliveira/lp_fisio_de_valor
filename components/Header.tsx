import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-3 px-4 sm:px-8 md:px-12 absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto max-w-5xl">
        <img src="/logo.png" alt="Fisio de Valor por Carla Gutschow Logo" className="h-8 md:h-10" />
      </div>
    </header>
  );
};

export default Header;