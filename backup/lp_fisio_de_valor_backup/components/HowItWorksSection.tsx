import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#514e4a] mb-6 md:mb-8">Como funciona a Mentoria</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <p>O formato é em grupo, com acesso a aulas gravadas e um grupo ativo no Telegram pra suporte, trocas e acompanhamento.</p>
                <p>As aulas ao vivo acontecem uma vez por mês, com espaço pra tirar dúvidas, revisar casos e alinhar estratégias.</p>
                <p>E pra quem prefere ritmo próprio, todo o conteúdo fica gravado — o que has sido, inclusive, a forma favorita de quem já participa.</p>
                <p className="font-bold text-[#2c6b67]">Vagas limitadas pra garantir acompanhamento próximo e respostas personalizadas.</p>
            </div>
            <div className="mt-10">
                <a
                    href="#cta"
                    className="bg-[#2c6b67] text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                    QUERO ENTRAR NA MENTORIA
                </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-lime-300 to-teal-300 rounded-full opacity-30 filter blur-2xl"></div>
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