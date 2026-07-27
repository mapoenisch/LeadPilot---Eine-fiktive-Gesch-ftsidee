/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Features } from './components/Features';
import { InterfaceTour } from './components/InterfaceTour';
import { KeyMetrics } from './components/KeyMetrics';
import { CaseStudy } from './components/CaseStudy';
import { ClientVoices } from './components/ClientVoices';
import { ImplementationStrategy } from './components/ImplementationStrategy';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white border-8 sm:border-12 border-white box-border flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <Features />
        <InterfaceTour />
        <KeyMetrics />
        <CaseStudy />
        <ClientVoices />
        <ImplementationStrategy />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
