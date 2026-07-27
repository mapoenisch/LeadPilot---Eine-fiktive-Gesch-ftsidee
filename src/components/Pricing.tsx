import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SignupModal } from './SignupModal';

const tiers = [
  {
    name: 'Starter',
    priceMonthly: '49',
    priceAnnual: '39',
    description: 'Für kleine Teams, die Excel hinter sich lassen wollen.',
    features: [
      '1–10 Nutzer',
      'Zentrale Lead-Erfassung',
      'Automatische Aufgaben-Zuweisung',
      'Basis-Dashboard & Pipeline',
      'E-Mail-Support'
    ],
    highlighted: false,
    cta: 'Kostenlos testen'
  },
  {
    name: 'Growth',
    priceMonthly: '89',
    priceAnnual: '75',
    description: 'Für wachsende Teams mit Fokus auf KI und Effizienz.',
    features: [
      '10–50 Nutzer',
      'Alles aus Starter',
      'KI-Lead-Scoring',
      'Erweiterte Automatisierungen',
      'Persönliches Onboarding'
    ],
    highlighted: true,
    cta: 'Kostenlos testen'
  },
  {
    name: 'Pro',
    priceMonthly: 'Individuell',
    priceAnnual: 'Individuell',
    description: 'Für etablierte Vertriebsorganisationen.',
    features: [
      '50+ Nutzer',
      'Erweiterte Integrationen',
      'Individuelle Rollen & Rechte',
      'Dedizierter Customer Success',
      'SLA & API-Zugang'
    ],
    highlighted: false,
    cta: 'Vertrieb kontaktieren'
  }
];

export function Pricing() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isAnnual, setIsAnnual] = useState(true);

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsSignupOpen(true);
  };

  return (
    <>
      <section id="preise" className="py-32 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]">Investment</h2>
              <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8 md:mb-0">
                Einfache<br /><span className="font-serif italic font-normal tracking-normal text-[#23BAA4]">Preise.</span>
              </h3>
            </div>
            <div className="flex flex-col items-start md:items-end gap-8">
              <div className="flex items-center p-1 bg-[#F9F8F6] border border-[#1A1A1A]/10">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest font-bold transition-colors ${
                    !isAnnual ? 'bg-[#E56014] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                  }`}
                >
                  Monatlich
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest font-bold transition-colors flex items-center gap-2 ${
                    isAnnual ? 'bg-[#E56014] text-white' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                  }`}
                >
                  Jährlich <span className={`text-[10px] px-2 py-0.5 rounded-full ${isAnnual ? 'bg-white/20' : 'bg-[#E56014]/10 text-[#E56014]'}`}>-20%</span>
                </button>
              </div>
              <div className="max-w-sm pb-2 border-b border-[#1A1A1A]/10 md:text-right">
                <p className="text-sm leading-relaxed text-[#1A1A1A]/70">
                  Jeder verlorene Lead kostet mehr als unsere Software. Investieren Sie in Struktur, die sich ab Tag 1 auszahlt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-[#1A1A1A]/10">
            {tiers.map((tier, index) => {
              const currentPrice = isAnnual ? tier.priceAnnual : tier.priceMonthly;
              return (
              <motion.div
                key={index}
                className={`relative flex flex-col p-12 border-b border-r border-[#1A1A1A]/10 ${
                  tier.highlighted 
                    ? 'bg-[#F9F8F6]' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#E56014] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4">
                    Am beliebtesten
                  </div>
                )}
                
                <div className="mb-12 border-b border-[#1A1A1A]/10 pb-8">
                  <h4 className="text-2xl font-serif italic mb-4">{tier.name}</h4>
                  <p className="text-sm text-[#1A1A1A]/60 min-h-[40px]">{tier.description}</p>
                </div>
                
                <div className="mb-12">
                  <div className="flex items-start gap-1">
                    {currentPrice !== 'Individuell' && <span className="text-xl font-medium mt-1">€</span>}
                    <motion.span 
                      key={currentPrice}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[64px] font-black tracking-tighter leading-none"
                    >
                      {currentPrice}
                    </motion.span>
                  </div>
                  {currentPrice !== 'Individuell' && <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mt-2">/ Nutzer / Monat</div>}
                </div>
                
                <ul className="space-y-6 mb-12 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-4">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${tier.highlighted ? 'bg-[#E56014]' : 'bg-[#23BAA4]'}`}></span>
                      <span className="text-sm text-[#1A1A1A]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanClick(`${tier.name} Plan`)}
                  className={`w-full py-5 text-xs uppercase tracking-widest font-bold transition-colors ${
                    tier.highlighted 
                      ? 'bg-[#E56014] text-white hover:bg-[#c95310]' 
                      : 'bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        title={`Anfrage: ${selectedPlan}`} 
      />
    </>
  );
}
