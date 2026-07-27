import { motion } from 'motion/react';

const steps = [
  {
    week: "Woche 01",
    title: "Kickoff & Datenmigration",
    description: "Wir binden Ihre bestehenden Datenquellen an. Egal ob verstreute Excel-Listen oder veraltete CRM-Systeme – wir strukturieren und importieren Ihre Kontakte verlustfrei."
  },
  {
    week: "Woche 02",
    title: "Workflow Design",
    description: "Gemeinsam definieren wir Ihre idealen Sales-Prozesse. Wir übersetzen Ihre Best Practices in automatisierte Regeln und Follow-up-Sequenzen."
  },
  {
    week: "Woche 03",
    title: "Team Onboarding",
    description: "In kompakten, praxisnahen Sessions schulen wir Ihr Sales-Team. Der Fokus liegt auf direkter Anwendung, nicht auf theoretischen Funktionen."
  },
  {
    week: "Woche 04",
    title: "Go-Live & Optimierung",
    description: "Der offizielle Startschuss. Im laufenden Betrieb analysieren wir die ersten Ergebnisse und schleifen die Automatisierungen für maximale Effizienz fein."
  }
];

export function ImplementationStrategy() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-white/50"
            >
              Implementation Strategy
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter"
            >
              Startklar in<br /><span className="font-serif italic font-normal tracking-normal text-white/40">4 Wochen.</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm pb-2 border-b border-white/20"
          >
            <p className="text-sm leading-relaxed text-white/70">
              Ein CRM-Wechsel muss kein monatelanges IT-Projekt sein. Unser strukturierter Onboarding-Prozess garantiert einen reibungslosen Übergang.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:mb-24 last:mb-0">
                  {/* Content Left (or top on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24 text-left md:text-right' : 'md:order-3 md:pl-16 lg:pl-24 text-left'}`}
                  >
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-2 block">{step.week}</span>
                      <h4 className="text-2xl font-serif italic text-white">{step.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-white/70 max-w-sm ml-auto mr-auto md:mx-0">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Center Node */}
                  <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-[#1A1A1A] bg-white items-center justify-center z-10`}>
                     <span className="text-[10px] font-bold text-[#1A1A1A]">{index + 1}</span>
                  </div>

                  {/* Empty Spacer for alignment */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
