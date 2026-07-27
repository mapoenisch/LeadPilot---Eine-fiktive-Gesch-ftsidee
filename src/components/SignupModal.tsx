import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function SignupModal({ isOpen, onClose, title = "14 Tage kostenlos testen" }: SignupModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300); // reset after close animation
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-sm p-4 sm:p-6 lg:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#F9F8F6] w-full max-w-xl border-4 border-white shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 md:p-12">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-4 h-8 border-r-2 border-b-2 border-white rotate-45 mb-2"
                    ></motion.div>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Erfolgreich angefragt</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/70 font-serif italic">
                    Wir haben Ihnen soeben eine E-Mail mit den Zugangsdaten geschickt. Sie werden in Kürze weitergeleitet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-semibold text-[#1A1A1A]/50 block">Loslegen</span>
                    <h2 className="text-[32px] md:text-[40px] leading-[0.9] font-black uppercase tracking-tighter mb-4">
                      {title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/70 font-serif italic">
                      Geben Sie Ihre Arbeits-E-Mail ein, um Ihren Workspace in wenigen Sekunden einzurichten. Keine Kreditkarte erforderlich.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mb-2 block">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white border border-[#1A1A1A]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mb-2 block">Arbeits E-Mail</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white border border-[#1A1A1A]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                        placeholder="max@unternehmen.de"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mb-2 block">Unternehmen</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white border border-[#1A1A1A]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors"
                        placeholder="Muster GmbH"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#333] transition-colors mt-4 flex items-center justify-between group"
                    >
                      <span>Jetzt Zugang anfordern</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
