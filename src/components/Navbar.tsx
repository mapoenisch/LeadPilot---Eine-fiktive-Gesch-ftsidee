import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-end h-24 pb-6">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-widest font-bold">
            <a href="#problem" className="text-[#1A1A1A] hover:text-[#E56014] transition-colors">Problem</a>
            <a href="#funktionen" className="text-[#1A1A1A] hover:text-[#E56014] transition-colors">Funktionen</a>
            <a href="#preise" className="text-[#1A1A1A] hover:text-[#E56014] transition-colors">Preise</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014] border-b border-[#1A1A1A] hover:border-[#E56014] pb-1 transition-colors">
              Login
            </button>
            <button className="bg-[#E56014] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#c95310] transition-colors">
              14 Tage Testen
            </button>
          </div>

          <div className="md:hidden flex items-center mb-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A1A1A] hover:text-[#E56014]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F8F6] border-b border-[#1A1A1A]/10 px-4 pt-2 pb-6 space-y-6">
          <a href="#problem" className="block text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014]" onClick={() => setIsOpen(false)}>Problem</a>
          <a href="#funktionen" className="block text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014]" onClick={() => setIsOpen(false)}>Funktionen</a>
          <a href="#preise" className="block text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014]" onClick={() => setIsOpen(false)}>Preise</a>
          <div className="pt-6 border-t border-[#1A1A1A]/10 flex flex-col gap-4">
            <button className="w-full text-left text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014]">
              Login
            </button>
            <button className="w-full text-center bg-[#E56014] text-white px-4 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#c95310]">
              Kostenlos testen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
