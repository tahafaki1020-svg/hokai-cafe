/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import type { CoffeeOffering, JournalArticle } from './data/hokaiData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandStorySection } from './components/BrandStorySection';
import { CoffeeCollectionSection } from './components/CoffeeCollectionSection';
import { ArtOfCoffeeSection } from './components/ArtOfCoffeeSection';
import { CoffeeOriginsSection } from './components/CoffeeOriginsSection';
import { JournalSection } from './components/JournalSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CoffeeDossierModal } from './components/CoffeeDossierModal';
import { JournalArticleModal } from './components/JournalArticleModal';
import { WorldAtelierModal } from './components/WorldAtelierModal';

export default function App() {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeOffering | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(
    null,
  );
  const [worldModalOpen, setWorldModalOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#151515] text-[#211713]">
        <Navbar onOpenWorld={() => setWorldModalOpen(true)} />

        <main>
          <HeroSection />
          <BrandStorySection />
          <CoffeeCollectionSection onSelectCoffee={setSelectedCoffee} />
          <ArtOfCoffeeSection />
          <CoffeeOriginsSection />
          <JournalSection onSelectArticle={setSelectedArticle} />
          <FinalCtaSection onExploreWorld={() => setWorldModalOpen(true)} />
        </main>

        <Footer onOpenWorld={() => setWorldModalOpen(true)} />

        <CoffeeDossierModal
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
          onRequestTasting={() => setWorldModalOpen(true)}
        />

        <JournalArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <WorldAtelierModal
          open={worldModalOpen}
          onClose={() => setWorldModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
