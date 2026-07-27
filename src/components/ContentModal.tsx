import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function ContentModal({ isOpen, onClose, title, content }: ContentModalProps) {
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#F9F8F6] text-[#1A1A1A] w-full max-w-4xl max-h-[90vh] overflow-y-auto border-8 border-white shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 md:p-16">
              <div className="mb-12 border-b border-[#1A1A1A]/10 pb-12">
                <h2 className="text-[32px] md:text-[48px] leading-[0.9] font-black uppercase tracking-tighter">
                  {title}
                </h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed text-[#1A1A1A]/80">
                {content}
              </div>
              <div className="mt-12 pt-8 border-t border-[#1A1A1A]/10">
                <button onClick={onClose} className="w-full sm:w-auto text-center border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors py-4 px-8 text-xs uppercase tracking-widest font-bold">
                  Schließen
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
