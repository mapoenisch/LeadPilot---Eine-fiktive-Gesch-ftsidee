import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Wie lange dauert die Implementierung im Team?",
    answer: "Da LeadPilot bewusst schlank gehalten ist, dauert das Setup in der Regel weniger als 24 Stunden. Ihr Team kann nach einer kurzen 30-minütigen Einführung sofort produktiv arbeiten – ohne wochenlange IT-Projekte."
  },
  {
    question: "Ist die Software DSGVO-konform?",
    answer: "Ja, zu 100%. Wir hosten alle Daten ausschließlich auf zertifizierten Servern in Deutschland (ISO 27001). Ihre Daten und die Ihrer Kunden sind nach den höchsten europäischen Standards geschützt."
  },
  {
    question: "Lässt sich LeadPilot in unsere bestehenden Systeme integrieren?",
    answer: "Absolut. LeadPilot bietet offene REST-APIs und native Integrationen zu gängigen Tools wie Zapier, Make, Office 365 und Google Workspace. So fügt sich das System nahtlos in Ihre bestehende Landschaft ein."
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer: "Nein. Wir glauben, dass Software durch Leistung überzeugen sollte, nicht durch Knebelverträge. Sie können LeadPilot flexibel monatlich kündigen oder anpassen."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#1A1A1A]/50">FAQ</h2>
              <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                Häufige<br /><span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">Fragen.</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/70 max-w-sm">
                Antworten auf die wichtigsten Fragen zur Einführung, Sicherheit und Nutzung von LeadPilot.
              </p>
            </motion.div>
          </div>
          
          <div className="md:col-span-7">
            <div className="border-t border-[#1A1A1A]/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-[#1A1A1A]/10"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center py-8 text-left group"
                    >
                      <span className="font-serif italic text-xl md:text-2xl text-[#1A1A1A] group-hover:text-[#1A1A1A]/60 transition-colors pr-8">
                        {faq.question}
                      </span>
                      <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[#1A1A1A]/20 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors text-[#1A1A1A]">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-sm leading-relaxed text-[#1A1A1A]/70 max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
