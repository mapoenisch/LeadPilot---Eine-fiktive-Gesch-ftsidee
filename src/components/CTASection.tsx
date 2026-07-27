import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SignupModal } from './SignupModal';

export function CTASection() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-[#1A1A1A] border-b border-[#1A1A1A]/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-white/50">Next Steps</h2>
                <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                  Verlorene Leads sind ein Zeichen von <span className="font-serif italic font-normal tracking-normal text-white/60">fehlender Struktur.</span>
                </h3>
                <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-xl">
                  Und Struktur lässt sich nachrüsten. Testen Sie LeadPilot 14 Tage kostenlos und verschaffen Sie sich selbst den Überblick.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button 
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-white text-[#1A1A1A] px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-[#F9F8F6] transition-colors"
                  >
                    Kostenlos testen
                  </button>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Keine Kreditkarte</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Startklar in 2 Min</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
               <div className="text-[200px] font-serif italic leading-none text-white/5 pointer-events-none">
                  LP.
               </div>
            </div>
          </div>
        </div>
      </section>

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}
