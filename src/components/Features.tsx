import { BrainCircuit, ListChecks, LineChart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: ListChecks,
    title: 'Automatische Lead-Zuweisung',
    description: 'Nach jedem Kontakt legt das System automatisch die nächste fällige Aktivität an. Nie wieder Excel-Tabellen pflegen.'
  },
  {
    icon: BrainCircuit,
    title: 'KI-gestütztes Scoring',
    description: 'Unsere Engine priorisiert Ihre Leads nach Abschlusswahrscheinlichkeit, damit Sie Ihre Zeit in die richtigen Kunden investieren.'
  },
  {
    icon: LineChart,
    title: 'Echtzeit-Pipeline',
    description: 'Ein klares Dashboard zeigt dem Vertriebsleiter sofort, welche Leads überfällig sind und wie sich die Umsätze entwickeln.'
  },
  {
    icon: ShieldCheck,
    title: 'Made für den Mittelstand',
    description: 'Einfacher als Salesforce oder HubSpot. Innerhalb weniger Tage eingeführt und zu 100% DSGVO-konform (Hosting in Europa).'
  }
];

export function Features() {
  return (
    <section id="funktionen" className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]">Software</h2>
            <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter">
              Alles für den<br />strukturierten<br /><span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">Vertrieb.</span>
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-sm pb-2 border-b border-[#1A1A1A]/10"
          >
            <p className="text-sm leading-relaxed text-[#1A1A1A]/70">
              Wir haben LeadPilot bewusst schlank gehalten. Keine überladenen Menüs, keine unnötigen Marketing-Features – reiner Fokus auf Ihren Sales-Erfolg.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-[#1A1A1A]/10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-12 border-b border-r border-[#1A1A1A]/10 bg-white group hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="mb-12">
                  <Icon className="h-8 w-8 text-[#23BAA4] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4 group-hover:text-[#23BAA4] transition-colors">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/60 group-hover:text-white/70 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
