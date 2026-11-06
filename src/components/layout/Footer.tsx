import React from 'react';
import { Language, TEAM_INFO } from '@/data/ncrData';
import { NcrMarkSvg } from '@/components/ui/NcrLogo';
import { Mail, Phone, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#060708] border-t border-white/[0.08] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.07]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
                <NcrMarkSvg className="w-6 h-6 text-white" accentDot />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white tracking-tight">
                    NO CLUE ROBOTICS
                  </span>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#C4FF01]/15 text-[#C4FF01] border border-[#C4FF01]/30">
                    #30647
                  </span>
                </div>
                <p className="font-mono text-xs text-zinc-400">
                  {TEAM_INFO.motto}
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              {lang === 'id'
                ? 'Komunitas robotika pemuda independen pertama di Indonesia yang menyatukan pelajar lintas sekolah untuk berkompetisi di FIRST Tech Challenge (FTC) dan memperluas akses edukasi STEM.'
                : "Indonesia's first independent community-based youth robotics organization uniting students across schools to compete in FIRST Tech Challenge (FTC) and expand STEM education access."}
            </p>

            <div className="pt-1 flex items-center gap-3">
              <img
                src="/assets/logos/ftc-decode-white.png"
                alt="FIRST Tech Challenge DECODE Presented by RTX"
                className="h-9 w-auto opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Beranda' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Tentang NCR' : 'About NCR'}
                </a>
              </li>
              <li>
                <a href="#ftc" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Rekayasa FTC #30647' : 'FTC #30647 Engineering'}
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Pencapaian & Program' : 'Achievements & Programs'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Galeri Dokumentasi' : 'Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C4FF01] transition-colors">
                  {lang === 'id' ? 'Kemitraan & Kontak' : 'Partnership & Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              {lang === 'id' ? 'Kontak Terverifikasi' : 'Verified Contact'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C4FF01] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${TEAM_INFO.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {TEAM_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C4FF01] shrink-0 mt-0.5" />
                <a
                  href={TEAM_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {TEAM_INFO.contact.phone} ({TEAM_INFO.contact.leadMentor} — Lead Mentor)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#C4FF01] shrink-0 mt-0.5" />
                <a
                  href={TEAM_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>{TEAM_INFO.contact.instagramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C4FF01] shrink-0 mt-0.5" />
                <span className="text-zinc-400">
                  {TEAM_INFO.foundation}, {TEAM_INFO.location.street}, {TEAM_INFO.location.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            © {new Date().getFullYear()} No Clue Robotics (NCR #30647). All rights reserved.
          </p>
          <p>
            FIRST® and FIRST® Tech Challenge are registered trademarks of For Inspiration and Recognition of Science and Technology (FIRST).
          </p>
        </div>
      </div>
    </footer>
  );
};
