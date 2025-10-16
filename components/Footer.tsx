import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c6b67] text-white">
      <div className="container mx-auto max-w-5xl py-16 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Fisio de Valor — por Carla Gutschov</h3>
        <p className="mt-4 text-lg text-teal-200 max-w-2xl mx-auto">
          O seu próximo nível profissional começa aqui. Chega de ser subvalorizado. É hora de construir o reconhecimento que você merece.
        </p>
        <div className="mt-10">
           <a
              href="#cta"
              className="bg-[#FFC700] text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              QUERO FAZER PARTE DESSA JORNADA
            </a>
        </div>
        <div className="mt-16 border-t border-teal-600 pt-8">
            <img src="/logo-white.png" alt="Fisio de Valor por Carla Gutschov Logo" className="h-10 mx-auto mb-4" />
            <p className="text-sm text-teal-300">
              © {new Date().getFullYear()} Fisio de Valor. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;