import React from 'react';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 sm:px-8 md:px-12 absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto max-w-5xl">
        <img src={logo} alt="Fisio de Valor por Carla Gutschow Logo" className="h-32 md:h-48" />
      </div>
    </header>
  );
};

export default Header;
