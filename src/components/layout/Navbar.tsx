import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { Language } from '@/data/ncrData';
import { NcrMarkSvg } from '@/components/ui/NcrLogo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: lang === 'id' ? 'Beranda' : 'Home' },
    { href: '#about', label: lang === 'id' ? 'Tentang' : 'About' },
    { href: '#ftc', label: 'FTC #30647' },
    { href: '#journey', label: lang === 'id' ? 'Perjalanan' : 'Journey' },
    { href: '#gallery', label: lang === 'id' ? 'Galeri' : 'Gallery' },
    { href: '#contact', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#090A0B]/90 to-transparent py-4 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="No Clue Robotics #30647 Home"
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center group-hover:border-[#C4FF01]/50 transition-colors">
              <NcrMarkSvg className="w-5 h-5 text-white" accentDot />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base tracking-tight text-white">
                  NO CLUE ROBOTICS
                </span>
                <span className="font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#C4FF01]/15 text-[#C4FF01] border border-[#C4FF01]/30">
                  #30647
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                FIRST Tech Challenge • IDN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white rounded-md hover:bg-white/[0.04] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] font-mono text-xs text-zinc-300 transition-colors cursor-pointer"
              title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C4FF01]" />
              <span className={lang === 'id' ? 'text-[#C4FF01] font-bold' : 'text-zinc-400'}>
                ID
              </span>
              <span className="text-zinc-600">/</span>
              <span className={lang === 'en' ? 'text-[#C4FF01] font-bold' : 'text-zinc-400'}>
                EN
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#C4FF01] hover:bg-[#d2ff38] text-[#090A0B] font-display font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>{lang === 'id' ? 'Kemitraan' : 'Partner With Us'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-zinc-300"
              aria-label="Toggle Language"
            >
              <span className="text-[#C4FF01] font-bold uppercase">{lang}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-200 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/[0.08] mt-3 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-zinc-200 hover:text-[#C4FF01] hover:bg-white/[0.04] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#C4FF01] text-[#090A0B] font-display font-semibold text-xs uppercase tracking-wider"
            >
              <span>{lang === 'id' ? 'Hubungi & Kolaborasi' : 'Contact & Collaborate'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
