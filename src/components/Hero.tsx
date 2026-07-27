import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { DemoVideoModal } from './DemoVideoModal';
import { SignupModal } from './SignupModal';

export function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]">
                  Automatisierte Lead-Generierung
                </h2>
              </motion.div>
              
              <motion.h1 
                className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-black uppercase tracking-tighter mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Kein Lead<br />wird mehr<br /><span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">vergessen.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[#1A1A1A]/70 mb-12 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                LeadPilot weist jedem Lead automatisch den nächsten fälligen Schritt zu. Das KI-gestützte Sales-CRM, das sich ohne IT-Projekt in Tagen einführen lässt.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button 
                  onClick={() => setIsSignupOpen(true)}
                  className="w-full sm:w-auto bg-[#E56014] text-white px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-[#c95310] transition-colors"
                >
                  14 Tage kostenlos testen
                </button>
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="group flex items-center gap-3 w-full sm:w-auto text-[#1A1A1A] font-serif italic text-2xl hover:text-[#23BAA4] transition-colors"
                >
                  <span className="underline underline-offset-8 decoration-1">Produktdemo ansehen</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>
              </motion.div>
            </div>

            <motion.div 
              className="md:col-span-4 border-l-0 md:border-l border-[#1A1A1A]/10 md:pl-10 flex flex-col justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="space-y-12 mb-12 md:mb-0">
                <div>
                  <span className="text-[48px] font-serif italic block mb-2 leading-none text-[#23BAA4]">01.</span>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Zentrales CRM</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/60">Bündeln Sie alle Kundeninteraktionen an einem Ort. Keine verstreuten Excel-Listen mehr.</p>
                </div>
                <div>
                  <span className="text-[48px] font-serif italic block mb-2 leading-none text-[#23BAA4]">02.</span>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-3">Smart Automation</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/60">Individuelle Workflows, die Leads qualifizieren, während Ihr Team sich auf Abschlüsse fokussiert.</p>
                </div>
              </div>
              <div className="pt-10 border-t border-[#1A1A1A]/10">
                <div className="text-[64px] font-black tracking-tighter leading-none text-[#E56014]">+22%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mt-2">Conversion Steigerung</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <DemoVideoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}
