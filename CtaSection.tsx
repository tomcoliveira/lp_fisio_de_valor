import React, { useState } from 'react';

const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Erro ao enviar formulário');
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <section id="cta" className="py-24 md:py-32 px-4 bg-teal-50">
      <div className="container mx-auto max-w-4xl text-left">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900">
          SEJA O FISIO DE VALOR.
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-xl">
          A mentoria que vai transformar seu trabalho em reconhecimento, previsibilidade e renda real. Preencha abaixo para entrar na lista de espera e garantir acesso antecipado à condição especial.
        </p>

        {submitted ? (
          <div className="mt-10 bg-white p-8 rounded-lg shadow-md text-center animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4 4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-teal-900">Inscrição enviada!</h3>
            <p className="text-teal-700 mt-2">Obrigado! Em breve entraremos em contato com mais informações.</p>
          </div>
        ) : (
          <div className="mt-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-lg">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC700] placeholder:text-gray-500 transition-all" 
                />
              </div>
               <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Seu melhor e-mail</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC700] placeholder:text-gray-500 transition-all" 
                />
              </div>
               <div>
                <label htmlFor="whatsapp" className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp" 
                  id="whatsapp" 
                  required 
                  value={formData.whatsapp} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC700] placeholder:text-gray-500 transition-all" 
                  placeholder="(XX) XXXXX-XXXX" 
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#FFC700] text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FFC700]"
              >
                <span>QUERO ME INSCREVER</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default CtaSection;