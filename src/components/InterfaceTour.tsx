import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

const slides = [
  {
    id: 'pipeline',
    title: 'Pipeline im Blick',
    description: 'Sehen Sie sofort, wo jeder Lead steht. Engpässe werden durch das System automatisch farblich hervorgehoben.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    annotations: [
      { top: '30%', left: '20%', text: 'Deal Stage' },
      { top: '60%', left: '60%', text: 'Umsatz-Forecast' }
    ]
  },
  {
    id: 'details',
    title: '360° Lead Profil',
    description: 'Alle Interaktionen, E-Mails und Notizen an einem Ort. Keine Informationsverluste bei Urlaubsübergaben.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80',
    annotations: [
      { top: '40%', left: '45%', text: 'Aktivitäten-Historie' }
    ]
  },
  {
    id: 'workflows',
    title: 'Visual Workflow Builder',
    description: 'Definieren Sie Wenn-Dann-Regeln für Follow-Ups. Komplett ohne Code, einfach per Drag & Drop.',
    image: 'https://images.unsplash.com/photo-1618788372246-ce5f4ef07130?auto=format&fit=crop&w=2000&q=80',
    annotations: [
      { top: '50%', left: '50%', text: 'Auto-Follow-Up' }
    ]
  }
];

export function InterfaceTour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-32 bg-white border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#E56014]">Tour the Interface</h2>
            <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter">
              Klarheit im<br /><span className="font-serif italic font-normal tracking-normal text-[#23BAA4]">Dashboard.</span>
            </h3>
          </div>
          <div className="flex gap-4 pb-4">
            <button 
              onClick={prev}
              className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center hover:bg-[#E56014] hover:text-white hover:border-[#E56014] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center hover:bg-[#E56014] hover:text-white hover:border-[#E56014] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 flex flex-col justify-center">
             <div className="space-y-12">
               {slides.map((slide, index) => (
                 <div 
                   key={slide.id}
                   className={`transition-opacity duration-500 cursor-pointer ${index === currentIndex ? 'opacity-100' : 'opacity-30'}`}
                   onClick={() => setCurrentIndex(index)}
                 >
                   <div className="flex items-center gap-4 mb-4">
                     <span className="text-xl font-serif italic text-[#23BAA4]">0{index + 1}.</span>
                     <h4 className="text-sm uppercase tracking-widest font-bold text-[#1A1A1A]">{slide.title}</h4>
                   </div>
                   <AnimatePresence>
                     {index === currentIndex && (
                       <motion.p
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="text-sm leading-relaxed text-[#1A1A1A]/70 overflow-hidden"
                       >
                         {slide.description}
                       </motion.p>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
             </div>
          </div>
          <div className="md:col-span-8">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-[#F9F8F6] border border-[#1A1A1A]/10 p-2 overflow-hidden">
               <AnimatePresence mode="wait">
                 <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full bg-[#1A1A1A]"
                 >
                   <img 
                     src={slides[currentIndex].image} 
                     alt={slides[currentIndex].title}
                     className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale"
                   />
                   
                   {/* Annotations */}
                   {slides[currentIndex].annotations.map((ann, i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, scale: 0 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                       className="absolute flex items-center gap-2 bg-[#E56014] text-white px-3 py-2 text-[10px] uppercase tracking-widest font-bold shadow-2xl"
                       style={{ top: ann.top, left: ann.left }}
                     >
                       <Plus className="w-3 h-3" />
                       {ann.text}
                     </motion.div>
                   ))}
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
