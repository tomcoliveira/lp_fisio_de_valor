import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Como funciona</h2>
            <div className="space-y-6 text-lg text-gray-700">
                <p>O Fisio de Valor é uma mentoria prática e em grupo, com acesso a aulas gravadas, encontros mensais ao vivo e acompanhamento contínuo no Telegram.</p>
                <p className="font-semibold text-gray-900">Você aprende, aplica e volta com resultado. Sem teoria distante, sem fórmulas prontas.</p>
                <p>Cada aula é pensada pra te posicionar como o fisioterapeuta que o familiar confia — e quer pagar pelo valor que você entrega.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#FFC700] to-teal-500 rounded-full opacity-10 filter blur-3xl"></div>
                <img 
                    src="/mentor.png" 
                    alt="Carla Gutschow" 
                    className="relative w-full z-10"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;