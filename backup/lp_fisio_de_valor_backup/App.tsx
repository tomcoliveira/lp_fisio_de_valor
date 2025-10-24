import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ViradaDeChaveSection from './components/ViradaDeChaveSection';
import DominarSection from './components/DominarSection';
import ParaQuemESection from './components/ParaQuemESection';
import HowItWorksSection from './components/HowItWorksSection';
import PromiseSection from './components/PromiseSection';
import DepoimentoSection from './components/DepoimentoSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#514e4a] min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <ViradaDeChaveSection />
        <DominarSection />
        <ParaQuemESection />
        <HowItWorksSection />
        <PromiseSection />
        <DepoimentoSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default App;