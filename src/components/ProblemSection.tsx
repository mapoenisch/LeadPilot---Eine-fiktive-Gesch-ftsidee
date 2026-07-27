import { AlertTriangle, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 bg-white border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]">Die Herausforderung</h2>
              <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                Warum bis zu <span className="font-serif italic font-normal tracking-normal text-[#E56014]">70% aller Leads</span> nie kontaktiert werden.
              </h3>
              <p className="text-lg text-[#1A1A1A]/70 mb-12 leading-relaxed max-w-xl">
                Ein Interessent füllt das Kontaktformular aus. Zwei Tage später hat noch niemand angerufen. Eine Woche später ist der Kontakt im Postfach untergegangen. Kommt Ihnen das bekannt vor?
              </p>
              
              <div className="space-y-12 border-t border-[#1A1A1A]/10 pt-12">
                <div className="flex gap-8">
                  <div className="text-[32px] font-serif italic leading-none text-[#23BAA4]">01.</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Zettelwirtschaft & Excel-Chaos</h4>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/60 max-w-md">Leads landen in verstreuten Listen, die eigentlich nur eine Person wirklich pflegt. Fällt diese aus, steht der Vertrieb still.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="text-[32px] font-serif italic leading-none text-[#23BAA4]">02.</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Unklare Verantwortlichkeiten</h4>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/60 max-w-md">Wenn ein Lead theoretisch "dem ganzen Team" gehört, fühlt sich in der Praxis niemand wirklich zuständig.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="text-[32px] font-serif italic leading-none text-[#23BAA4]">03.</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Fehlender Prozess</h4>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/60 max-w-md">Nach einem Anruf bleibt es bei einem vagen "ich melde mich nächste Woche". Ohne System geht genau das im Tagesgeschäft unter.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 md:pl-10 md:border-l border-[#1A1A1A]/10 h-full">
            <motion.div
              className="sticky top-32 flex flex-col justify-between h-[calc(100%-8rem)] min-h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <div className="mb-10">
                  <h3 className="text-2xl font-serif italic mb-4 text-[#23BAA4]">Die Lösung.</h3>
                  <p className="text-sm text-[#1A1A1A]/60 uppercase tracking-widest font-bold">Ein klares System statt Vorwürfen an das Team.</p>
                </div>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 border-b border-[#1A1A1A]/10 pb-6">
                    <span className="w-1.5 h-1.5 bg-[#E56014] rounded-full mt-2 shrink-0"></span>
                    <span className="text-sm leading-relaxed text-[#1A1A1A]/80"><strong>Jeder Lead</strong> bekommt einen klaren nächsten Schritt</span>
                  </li>
                  <li className="flex items-start gap-4 border-b border-[#1A1A1A]/10 pb-6">
                    <span className="w-1.5 h-1.5 bg-[#E56014] rounded-full mt-2 shrink-0"></span>
                    <span className="text-sm leading-relaxed text-[#1A1A1A]/80"><strong>Klare Zuweisung</strong> an einen spezifischen Mitarbeiter</span>
                  </li>
                  <li className="flex items-start gap-4 pb-6">
                    <span className="w-1.5 h-1.5 bg-[#E56014] rounded-full mt-2 shrink-0"></span>
                    <span className="text-sm leading-relaxed text-[#1A1A1A]/80"><strong>Automatische Erinnerungen</strong>, bevor ein Lead abkühlt</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-10 border-t border-[#1A1A1A]/10">
                <div className="text-[64px] font-black tracking-tighter leading-none text-[#23BAA4]">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mt-2">Transparenz im Prozess</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
