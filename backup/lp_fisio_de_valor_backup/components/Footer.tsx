import React from 'react';
import logo from '@/assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#514e4a] text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl text-left">
        <img src={logo} alt="Fisio de Valor Logo" className="h-24 filter invert brightness-0" />
        <h3 className="text-2xl md:text-3xl font-bold mt-6">
          Seu próximo nível profissional começa aqui.
        </h3>
        <p className="mt-4 text-gray-300">
          Chega de se sentir perdido(a). É hora de ter um plano, um método e o reconhecimento que você merece.
        </p>
        <div className="mt-10">
          <a
            href="#cta"
            className="bg-white text-[#2c6b67] font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-200 transition-all inline-block"
          >
            QUERO ME INSCREVER AGORA
          </a>
        </div>
        <div className="mt-16 border-t border-gray-600 pt-8">
          <p className="text-gray-400">© {new Date().getFullYear()} Fisio de Valor por Carla Gutschow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
