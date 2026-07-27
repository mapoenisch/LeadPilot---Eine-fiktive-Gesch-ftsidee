import { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentModal } from './ContentModal';
import { 
  impressumContent, 
  datenschutzContent, 
  agbContent, 
  blogContent, 
  webinarContent, 
  helpCenterContent, 
  customerCasesContent 
} from '../data/dummyContent';

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; content: React.ReactNode | null }>({
    isOpen: false,
    title: '',
    content: null
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const openModal = (e: React.MouseEvent, title: string, content: React.ReactNode) => {
    e.preventDefault();
    setModalConfig({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <footer className="bg-[#F9F8F6] text-[#1A1A1A] border-t border-[#1A1A1A]/10">
        <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/10 border-b border-[#1A1A1A]/10">
          <div className="p-10 flex flex-col justify-between min-h-[300px] md:col-span-4">
            <div>
              <span className="text-2xl font-black tracking-tighter uppercase italic block mb-6">LeadPilot.</span>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/60 max-w-sm">
                Das KI-gestützte Sales-CRM, das dafür sorgt, dass kein Lead im B2B-Mittelstand mehr vergessen wird.
              </p>
            </div>
          </div>
          
          <div className="p-10 flex flex-col md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#1A1A1A]/50">Produkt</h4>
            <ul className="space-y-4">
              <li><a href="#funktionen" className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Funktionen</a></li>
              <li><a href="#preise" className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Preise</a></li>
              <li><a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Integrationen</a></li>
              <li><a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div className="p-10 flex flex-col md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#1A1A1A]/50">Ressourcen</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => openModal(e, 'Blog', blogContent)} className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Blog</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'Webinare', webinarContent)} className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Webinare</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'Hilfe-Center', helpCenterContent)} className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Hilfe-Center</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'Kunden-Cases', customerCasesContent)} className="text-xs uppercase tracking-widest font-bold hover:text-[#1A1A1A]/60 transition-colors">Kunden-Cases</a></li>
            </ul>
          </div>
          
          <div className="p-10 flex flex-col justify-between min-h-[300px] md:col-span-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 font-semibold text-[#1A1A1A]/50">B2B Automation Insights</h4>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/60 mb-8 max-w-sm">
                Erhalten Sie monatlich praxisnahe Strategien zur Vertriebsautomatisierung direkt in Ihr Postfach.
              </p>
              {subscribed ? (
                <div className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
                  Erfolgreich abonniert.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail Adresse" 
                    className="bg-transparent border-b border-[#1A1A1A]/20 pb-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/40 font-serif italic"
                    required
                  />
                  <button 
                    type="submit" 
                    className="group self-start flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#1A1A1A]/60 transition-colors"
                  >
                    <span className="border-b border-[#1A1A1A] pb-1">Abonnieren</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">
          <div>© {new Date().getFullYear()} LeadPilot Technology Group</div>
          <div className="flex flex-wrap gap-6 mt-6 md:mt-0">
            <a href="#" onClick={(e) => openModal(e, 'Impressum', impressumContent)} className="hover:text-[#1A1A1A] transition-colors">Impressum</a>
            <a href="#" onClick={(e) => openModal(e, 'Datenschutz', datenschutzContent)} className="hover:text-[#1A1A1A] transition-colors">Datenschutz</a>
            <a href="#" onClick={(e) => openModal(e, 'AGB', agbContent)} className="hover:text-[#1A1A1A] transition-colors">AGB</a>
            <span className="text-[#1A1A1A]/20">|</span>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      <ContentModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        content={modalConfig.content} 
      />
    </>
  );
}
