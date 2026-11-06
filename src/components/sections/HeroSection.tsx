import React, { useState } from 'react';
import { ArrowRight, Trophy, Cpu, Users, MapPin } from 'lucide-react';
import { HERO_STATS, Language, TEAM_INFO } from '@/data/ncrData';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const [activeVisual, setActiveVisual] = useState<'action' | 'team' | 'cad'>('action');

  const visuals = {
    action: {
      src: '/assets/photos/robot-action-field.jpg',
      badge: 'LIVE MATCH // FTC DECODE™',
      title:
        lang === 'id'
          ? 'Robot #30647 Beraksi di Arena FTC Nusantara Championship'
          : 'Robot #30647 in Action at the FTC Nusantara Championship',
      subtitle:
        lang === 'id'
          ? 'Melontarkan elemen permainan Artifact menggunakan dual-wheel launcher turret & modul visi.'
          : 'Launching a purple Artifact game element using its dual-wheel launcher turret & vision module.',
    },
    team: {
      src: '/assets/photos/team-awards-backdrop.jpg',
      badge: 'SQUAD // 11 STUDENTS + 3 MENTORS',
      title:
        lang === 'id'
          ? 'Inspire Award 2nd Winner & Winning Alliance (#30647)'
          : 'Inspire Award 2nd Winner & Winning Alliance (#30647)',
      subtitle:
        lang === 'id'
          ? 'Skuad lengkap No Clue Robotics di Science Techno Park Universitas Indonesia.'
          : 'The full No Clue Robotics squad at Science Techno Park Universitas Indonesia.',
    },
    cad: {
      src: '/assets/cad/robot-cad-iso.png',
      badge: '3D CAD // REV CONTROL HUB',
      title:
        lang === 'id'
          ? 'Arsitektur 3D CAD Kustom Robot #30647'
          : 'Custom 3D CAD Architecture of Robot #30647',
      subtitle:
        lang === 'id'
          ? 'Dirancang dengan front omni-intake, pelat sasis truss-cut, dan transmisi rantai ganda.'
          : 'Engineered with front omni-intake, truss-cut chassis plates, and dual-chain transmission.',
    },
  };

  const current = visuals[activeVisual];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#090A0B] bg-engineering-grid border-b border-white/[0.07]"
    >
      {/* Subtle restrained ambient radial highlight */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[38rem] h-[38rem] rounded-full bg-[#C4FF01]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Telemetry / Identity Strip */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4FF01]/10 border border-[#C4FF01]/30">
            <span className="w-2 h-2 rounded-full bg-[#C4FF01]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#C4FF01]">
              FTC TEAM #30647
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill font-mono text-xs text-zinc-300">
            <span>FIRST® TECH CHALLENGE — DECODE™ 2025–2026</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill font-mono text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[#7A9E00]" />
            <span>Depok, Indonesia</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C4FF01]">
                NO CLUE ROBOTICS • &ldquo;{TEAM_INFO.motto}&rdquo;
              </p>

              <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.5rem] font-bold tracking-tight text-white leading-[1.06]">
                {lang === 'id' ? (
                  <>
                    Rekayasa Robotika Pemuda{' '}
                    <span className="text-[#C4FF01]">Melampaui Batas</span> Sekolah.
                  </>
                ) : (
                  <>
                    Youth Robotics Engineering{' '}
                    <span className="text-[#C4FF01]">Beyond School</span> Boundaries.
                  </>
                )}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              {lang === 'id'
                ? 'No Clue Robotics (NCR #30647) adalah komunitas robotika independen pertama di Indonesia yang menyatukan 11 pelajar SMA/SMK lintas sekolah dan 3 mentor berpengalaman. Fokus utama kami saat ini adalah merancang, memfabrikasi, dan memprogram robot kompetitif untuk FIRST Tech Challenge (FTC) musim DECODE™ 2025–2026.'
                : "No Clue Robotics (NCR #30647) is Indonesia's first independent community-based youth robotics organization, uniting 11 high school students from diverse schools with 3 experienced mentors. Our primary focus is designing, fabricating, and programming competitive robots for the FIRST Tech Challenge (FTC) DECODE™ 2025–2026 season."}
            </p>

            {/* Verified Competition Honors Pill Box */}
            <div className="p-4 rounded-xl glass-panel border-l-2 border-l-[#C4FF01] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C4FF01]/10 border border-[#C4FF01]/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4 text-[#C4FF01]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#C4FF01]">
                    {lang === 'id'
                      ? 'Rekam Jejak Terverifikasi • FTC Nusantara Championship'
                      : 'Verified Track Record • FTC Nusantara Championship'}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Inspire Award 2nd Winner &amp; Winning Alliance (1st Pick)
                  </div>
                </div>
              </div>
              <a
                href="#journey"
                className="font-mono text-xs text-zinc-300 hover:text-[#C4FF01] underline underline-offset-4 shrink-0"
              >
                {lang === 'id' ? 'Lihat Detail →' : 'View Details →'}
              </a>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#ftc"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C4FF01] hover:bg-[#d2ff38] text-[#090A0B] font-display font-bold text-sm tracking-wide transition-colors"
              >
                <span>
                  {lang === 'id'
                    ? 'Eksplorasi Robot FTC #30647'
                    : 'Explore FTC Robot #30647'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white font-display font-medium text-sm transition-colors"
              >
                <span>
                  {lang === 'id' ? 'Tentang Komunitas NCR' : 'About NCR Community'}
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl glass-panel p-2.5 sm:p-3.5 shadow-2xl shadow-black/80">
              {/* Viewport Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-2.5 mb-2.5 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C4FF01]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                    {current.badge}
                  </span>
                </div>

                {/* Viewport Mode Switcher */}
                <div className="inline-flex items-center rounded-md bg-black/50 p-0.5 border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveVisual('action')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeVisual === 'action'
                        ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {lang === 'id' ? 'Aksi Robot' : 'Field Action'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVisual('team')}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeVisual === 'team'
                        ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Users className="w-3 h-3" />
                    <span>{lang === 'id' ? 'Tim & Trofi' : 'Team & Awards'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVisual('cad')}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeVisual === 'cad'
                        ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>3D CAD</span>
                  </button>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#0B0D10] border border-white/[0.06] flex items-center justify-center">
                <img
                  src={current.src}
                  alt={current.title}
                  className={`w-full h-full transition-all duration-300 ${
                    activeVisual === 'cad'
                      ? 'object-contain p-6 bg-engineering-dots'
                      : 'object-cover'
                  }`}
                />

                {/* Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display font-semibold text-sm sm:text-base text-white">
                        {current.title}
                      </p>
                      <p className="text-xs text-zinc-300 mt-0.5 line-clamp-2">
                        {current.subtitle}
                      </p>
                    </div>
                    <img
                      src="/assets/logos/ncr-logo-full.png"
                      alt="NCR 30647 Official Mark"
                      className="h-10 w-10 rounded border border-white/15 shrink-0 hidden sm:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Verified Telemetry Stats Grid */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.value}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-[#C4FF01]/30 transition-colors"
            >
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#C4FF01] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1.5 font-display font-semibold text-sm text-white">
                {stat.label[lang]}
              </div>
              <div className="mt-1 text-xs text-zinc-400 leading-relaxed">
                {stat.sublabel[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
