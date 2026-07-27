import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "LeadPilot hat unsere Sales-Pipeline revolutioniert. Wir arbeiten jetzt viel strukturierter und effizienter.",
    author: "Sarah Schmidt",
    role: "CEO, TechFlow GmbH"
  },
  {
    quote: "Dank der Automatisierung verlieren wir keine Leads mehr. Das System denkt für uns mit.",
    author: "Michael Bauer",
    role: "Head of Sales, Digital Pioneers"
  },
  {
    quote: "Die Einführung war erstaunlich einfach und die Ergebnisse in Form von Abschlüssen sofort sichtbar.",
    author: "Elena Wagner",
    role: "Vertriebsleitung, Wagner Maschinenbau"
  }
];

export function ClientVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-white border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#1A1A1A]/50">Client Voices</h2>
            <h3 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter">
              Was unsere<br /><span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">Kunden sagen.</span>
            </h3>
          </div>
          <div className="flex gap-4 pb-4">
            <button 
              onClick={prev}
              className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center border-t border-l border-[#1A1A1A]/10 p-8 md:p-20 bg-[#F9F8F6]"
            >
              <div className="text-[80px] font-serif italic leading-none text-[#1A1A1A]/10 mb-4 h-10">"</div>
              <p className="text-2xl md:text-4xl leading-relaxed text-[#1A1A1A] mb-12 font-serif italic max-w-4xl">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A] mb-2">{testimonials[currentIndex].author}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
