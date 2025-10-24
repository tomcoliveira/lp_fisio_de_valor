import React from 'react';

const pricingTiers = [
  { date: '23/10', price: 'R$ 997', note: 'Lote 1 (Encerrado)' },
  { date: '24/10 – 01/11', price: 'R$ 1.197', installments: '12x de R$ 121,94', special: true, note: 'Lote 2 (Aberto)' },
  { date: '02/11 – 08/11', price: 'R$ 1.397' },
  { date: '09/11 – 17/11', price: 'R$ 1.597' },
];

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-32 px-4 bg-[#2c6b67]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
          SEJA O FISIO DE VALOR.
        </h2>
        <p className="text-lg text-teal-200 mt-4 max-w-2xl mx-auto">
          A mentoria que vai transformar seu trabalho em reconhecimento, previsibilidade e renda real. Garanta sua vaga agora e comece a jornada.
        </p>
        
        <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Valores e Lotes</h3>
            <div className="space-y-2 text-left">
                {pricingTiers.map((tier, index) => (
                <div 
                    key={index} 
                    className={`py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-300 ${tier.special ? 'bg-teal-800/60 rounded-lg -mx-4 px-4' : ''} ${index > 0 ? 'border-t border-teal-600/50' : ''}`}
                >
                    <div className={`font-semibold ${tier.special ? 'text-white' : 'text-teal-200'}`}>{tier.date}:</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 mt-2 sm:mt-0 text-left sm:text-right">
                    <div className="flex items-baseline gap-x-4">
                        <span className={`text-xl font-bold ${tier.special ? 'text-[#FFC700]' : 'text-white'}`}>{tier.price}</span>
                        {tier.installments && <span className={`text-base font-medium ${tier.special ? 'text-yellow-200' : 'text-teal-300'}`}>{tier.installments}</span>}
                    </div>
                    {tier.note && <span className={`text-sm ${tier.special ? 'text-yellow-200' : 'text-teal-300'}`}>{tier.note}</span>}
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-20 space-y-6">
            <div className="bg-white p-8 rounded-lg border-4 border-[#FFC700] text-left shadow-2xl flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Mentoria Fisio de Valor</h3>
                    <p className="text-gray-600 mt-3 text-base">Acesso completo à mentoria, aulas gravadas, encontros ao vivo e grupo de acompanhamento para transformar sua carreira.</p>
                </div>
                <div className="flex-shrink-0">
                    <a 
                    href="https://pay.hotmart.com/Q95596464W?off=2illqtc6" 
                    onClick={() => {
                      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                        window.gtag('event', 'click', {
                          event_category: 'conversion',
                          event_label: 'mentoria_main_button'
                        });
                      }
                    }}
                    className="hotmart-fb hotmart__button-checkout inline-block w-full sm:w-auto text-center bg-[#FFC700] text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FFC700]"
                    >
                    GARANTIR MINHA VAGA
                    </a>
                </div>
            </div>

            <div className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-left">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col">
                        <h4 className="text-lg font-bold text-gray-900">Mentoria + Kit Essencial</h4>
                        <p className="text-gray-600 mt-2 text-sm flex-grow">Todo o conteúdo da mentoria, mais o kit com mais de 80 fichas práticas.</p>
                        <div className="mt-4">
                        <a 
                            href="https://pay.hotmart.com/X102576529F?off=72jtiwri" 
                            onClick={() => {
                              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                                window.gtag('event', 'click', {
                                  event_category: 'conversion',
                                  event_label: 'combo_kit_button'
                                });
                              }
                            }}
                            className="hotmart-fb hotmart__button-checkout block w-full text-center bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-900 transition-all"
                        >
                            QUERO O KIT
                        </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col">
                        <h4 className="text-lg font-bold text-gray-900">Prática Fisioterapêutica no Alzheimer</h4>
                        <p className="text-gray-600 mt-2 text-sm flex-grow">Um curso prático para atender com segurança e eficácia.</p>
                        <div className="mt-4">
                        <a 
                            href="https://pay.kiwify.com.br/d01m59o"
                            onClick={() => {
                              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                                window.gtag('event', 'click', {
                                  event_category: 'conversion',
                                  event_label: 'alzheimer_course_button'
                                });
                              }
                            }}
                            className="block w-full text-center bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-900 transition-all"
                        >
                            SAIBA MAIS
                        </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col">
                        <h4 className="text-lg font-bold text-gray-900">Instagram para Fisioterapeutas</h4>
                        <p className="text-gray-600 mt-2 text-sm flex-grow">Atraia pacientes particulares de forma estratégica e autêntica.</p>
                        <div className="mt-4">
                        <a 
                            href="https://pay.hotmart.com/J97390891S" 
                            onClick={() => {
                              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                                window.gtag('event', 'click', {
                                  event_category: 'conversion',
                                  event_label: 'instagram_course_button'
                                });
                              }
                            }}
                            className="block w-full text-center bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-900 transition-all"
                        >
                            SAIBA MAIS
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
