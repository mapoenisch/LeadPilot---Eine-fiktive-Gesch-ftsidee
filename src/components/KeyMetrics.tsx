import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const conversionData = [
  { name: 'Ohne LeadPilot', rate: 12 },
  { name: 'Mit LeadPilot', rate: 28 },
];

const timeData = [
  { name: 'Woche 1', time: 48 },
  { name: 'Woche 2', time: 36 },
  { name: 'Woche 3', time: 24 },
  { name: 'Woche 4', time: 12 },
  { name: 'Woche 5', time: 4 },
];

export function KeyMetrics() {
  return (
    <section id="metriken" className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]"
            >
              Die Resultate
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter"
            >
              Messbarer<br /><span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">Erfolg.</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-sm pb-2 border-b border-[#1A1A1A]/10"
          >
            <p className="text-sm leading-relaxed text-[#1A1A1A]/70">
              Automatisierung zahlt sich in harten KPIs aus. Sehen Sie, wie LeadPilot die Performance Ihres Vertriebsteams direkt beeinflusst.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-[#1A1A1A]/10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-12 border-b border-r border-[#1A1A1A]/10 bg-white"
          >
            <div className="mb-12">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Conversion Rate (%)</h4>
              <p className="text-sm text-[#1A1A1A]/60">Verdoppeln Sie Ihre Abschlussquote durch konsequentes Nachfassen.</p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1A1A1A" strokeOpacity={0.1} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#1A1A1A', fontSize: 10, opacity: 0.6 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#1A1A1A', fontSize: 10, opacity: 0.6 }} />
                  <Tooltip 
                    cursor={{ fill: '#1A1A1A', opacity: 0.05 }}
                    contentStyle={{ backgroundColor: '#1A1A1A', color: '#fff', border: 'none', borderRadius: '0px', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="rate" fill="#E56014" radius={[2, 2, 0, 0]} maxBarSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="p-12 border-b border-r border-[#1A1A1A]/10 bg-white"
          >
            <div className="mb-12">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-3">Time-to-Contact (Stunden)</h4>
              <p className="text-sm text-[#1A1A1A]/60">Reduzieren Sie die Reaktionszeit auf neue Leads drastisch.</p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1A1A1A" strokeOpacity={0.1} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#1A1A1A', fontSize: 10, opacity: 0.6 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#1A1A1A', fontSize: 10, opacity: 0.6 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A1A', color: '#fff', border: 'none', borderRadius: '0px', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="time" stroke="#23BAA4" strokeWidth={3} dot={{ fill: '#23BAA4', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
