import React, { useEffect } from 'react';

const pricingTiers = [
  { date: '23/10', price: 'R$ 997', note: 'Bônus exclusivo do evento (Kit 60+ por R$ 50), até 23h59', special: true },
  { date: '24/10 – 01/11', price: 'R$ 1.197' },
  { date: '02/11 – 08/11', price: 'R$ 1.397' },
  { date: '09/11 – 17/11', price: 'R$ 1.597' },
];

const CtaSection: React.FC = () => {
  useEffect(() => {
    // Carrega o script do widget Hotmart
    const script = document.createElement('script');
    script.src = 'https://static.hotmart.com/checkout/widget.min.js';
    script.async = true;
    document.head.appendChild(script);

    // Carrega o CSS do Hotmart
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup ao desmontar
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return (
    <section id="cta" className="py-24 md:py-32 px-4 bg-[#2c6b67]">
      <div className="container mx-auto max-w-5xl text-left">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
          SEJA O FISIO DE VALOR.
        </h2>
        <p className="text-lg text-teal-200 mt-4 max-w-2xl">
          A mentoria que vai transformar seu trabalho em reconhecimento, previsibilidade e renda real. Garanta sua vaga agora e comece a jornada.
        </p>

        {/* Pricing Tiers */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Valores e Lotes</h3>
          <div className="max-w-3xl">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center ${index < pricingTiers.length - 1 ? 'border-b border-teal-600/50' : ''}`}
              >
                <div className="font-semibold text-teal-200">{tier.date}:</div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0 text-left sm:text-right">
                  <span className={`text-xl font-bold ${tier.special ? 'text-[#FFC700]' : 'text-white'}`}>{tier.price}</span>
                  {tier.note && <span className={`text-sm ${tier.special ? 'text-yellow-200' : 'text-teal-300'}`}>{tier.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Widgets */}
        <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Escolha sua jornada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Option 1: Mentoria Only */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col text-center md:text-left">
                <h4 className="text-2xl font-bold text-gray-900">Mentoria Fisio de Valor</h4>
                <p className="text-gray-600 mt-2 flex-grow">Acesso completo à mentoria, aulas gravadas, encontros ao vivo e grupo de acompanhamento.</p>
                <div className="mt-8">
                  <a 
                    href="https://pay.hotmart.com/Q95596464W?checkoutMode=2" 
                    className="hotmart-fb hotmart__button-checkout inline-block w-full text-center bg-[#FFC700] text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FFC700]"
                  >
                    QUERO SÓ A MENTORIA
                  </a>
                </div>
              </div>
              {/* Option 2: Mentoria + Kit */}
              <div className="bg-white p-8 rounded-lg border-2 border-[#FFC700] flex flex-col text-center md:text-left shadow-2xl">
                <h4 className="text-2xl font-bold text-gray-900">Mentoria + Kit 60+</h4>
                <p className="text-gray-600 mt-2 flex-grow">Todo o conteúdo da mentoria, mais um kit de ferramentas práticas para acelerar seus resultados nos primeiros 60 dias.</p>
                <div className="mt-8">
                  <a 
                    href="https://pay.hotmart.com/X102576529F?checkoutMode=2" 
                    className="hotmart-fb hotmart__button-checkout inline-block w-full text-center bg-[#FFC700] text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FFC700]"
                  >
                    GARANTIR MENTORIA + KIT 60+
                  </a>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;