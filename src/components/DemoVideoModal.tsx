import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/95 p-4 sm:p-6 lg:p-10"
        >
          <div className="w-full max-w-5xl relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-white/50">Produktdemo</h3>
              <button 
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.1 }}
              className="aspect-video bg-black border border-white/10 relative flex items-center justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform mb-6">
                  <Play className="w-8 h-8 text-[#1A1A1A] ml-2" fill="currentColor" />
                </button>
                <p className="text-white font-serif italic text-xl">Video abspielen (Dummy)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
