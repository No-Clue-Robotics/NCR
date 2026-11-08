import React, { useEffect, useState } from 'react';
import { Language } from '@/data/ncrData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FtcSection } from '@/components/sections/FtcSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('id');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#090A0B] text-[#F5F7FA] flex flex-col">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-grow">
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <FtcSection lang={lang} />
        <JourneySection lang={lang} />
        <GallerySection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
