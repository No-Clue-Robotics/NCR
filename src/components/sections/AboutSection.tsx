import React from 'react';
import { Language, LEADERSHIP_TEAM, MISSION_PILLARS, TEAM_INFO } from '@/data/ncrData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Quote, ShieldCheck, Compass } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#0C0E11] border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01 // IDENTITAS"
          eyebrow={
            lang === 'id'
              ? 'Komunitas Terbuka Lintas Sekolah'
              : 'Beyond School Boundaries'
          }
          title={
            lang === 'id'
              ? 'Berawal dari Rasa Ingin Tahu, Tumbuh Menjadi Komunitas Rekayasa.'
              : 'Born from Curiosity, Built into an Open Engineering Community.'
          }
          description={
            lang === 'id'
              ? 'Berbeda dari tim robotika konvensional yang terikat pada satu sekolah, No Clue Robotics (NCR #30647) dibangun sebagai ruang terbuka bagi pelajar lintas sekolah, kota, dan latar belakang di Indonesia.'
              : 'Unlike conventional school-bound robotics clubs, No Clue Robotics (NCR #30647) is built around an open community model uniting students across schools, cities, and backgrounds in Indonesia.'
          }
        />

        {/* Editorial Story + Visual Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Narrative & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C4FF01]">
                  {lang === 'id' ? 'Kisah & Latar Belakang Kami' : 'Our Story & Background'}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  EST. {TEAM_INFO.founded.toUpperCase()}
                </span>
              </div>

              <p className="text-zinc-200 leading-relaxed text-base">
                {lang === 'id'
                  ? 'No Clue Robotics (N.C.R) bermula pada November 2025 dari sekelompok teman yang memiliki ketertarikan kuat terhadap robotika, meskipun awalnya memiliki keterbatasan pengalaman dan belum memiliki arah yang pasti. Dari titik awal itulah lahir filosofi kami: ketidaktahuan di awal tidak pernah menjadi batas untuk mengeksplorasi, bereksperimen, dan membangun sesuatu yang luar biasa.'
                  : 'No Clue Robotics (N.C.R) began in November 2025 with a group of friends who shared a strong interest in robotics, despite initially having limited experience and no clear roadmap. From that humble starting point came our core philosophy: not knowing where to start should never prevent anyone from exploring, experimenting, and building something extraordinary.'}
              </p>

              <p className="text-zinc-300 leading-relaxed text-base">
                {lang === 'id'
                  ? 'Saat ini, NCR terdiri dari 11 pelajar SMA/SMK dari berbagai sekolah di Indonesia dan didampingi oleh 3 mentor berpengalaman di bidang robotika. Berbasis di Cimanggis, Depok di bawah ekosistem Yayasan Indonesia FIRST Robotik, kami berkomitmen mendukung visi Indonesia Emas 2045 melalui inovasi teknologi dan kompetisi global FIRST Tech Challenge.'
                  : 'Today, NCR consists of 11 high school students from various Indonesian schools supported by 3 experienced robotics mentors. Based in Cimanggis, Depok within the Yayasan Indonesia FIRST Robotik ecosystem, we are committed to supporting the Golden Indonesia 2045 vision through technological innovation and global FIRST Tech Challenge competition.'}
              </p>

              {/* Verified Pit Banner Quote */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/[0.07] border-l-2 border-l-[#C4FF01]">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#C4FF01] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display italic text-sm sm:text-base text-white">
                      &ldquo;{TEAM_INFO.pitQuote}&rdquo;
                    </p>
                    <p className="mt-2 font-mono text-xs text-zinc-400">
                      — NCR Line&apos;s • Pit Banner FTC Nusantara Championship (#30647)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#14181D] to-[#0E1014] border border-white/[0.08] flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#C4FF01]/15 border border-[#C4FF01]/30 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#C4FF01]" />
              </div>
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C4FF01]">
                  {lang === 'id' ? 'Visi Organisasi' : 'Our Vision'}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {lang === 'id'
                    ? 'Komunitas Robotika Terkoneksi Global yang Merepresentasikan Kreativitas Indonesia'
                    : 'A Globally Connected Robotics Community Representing Indonesian Creativity'}
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {lang === 'id'
                    ? 'Menciptakan komunitas robotika yang terhubung secara global, merepresentasikan kreativitas dan budaya Indonesia, menginspirasi generasi muda untuk mengeksplorasi teknologi, serta memberdayakan mereka mengejar potensi tanpa batas melalui inovasi.'
                    : 'To create a globally connected robotics community that represents Indonesian creativity and culture, inspires young generations to explore technology, and empowers them to pursue limitless possibilities through innovation.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Photography Stack */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden glass-panel p-2.5">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                <img
                  src="/assets/photos/team-portrait-backdrop.jpg"
                  alt="Skuad No Clue Robotics #30647 bersama Robot di FTC Nusantara Championship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 font-mono text-[11px] text-[#C4FF01]">
                  SQUAD // #30647
                </div>
              </div>
              <div className="p-3">
                <p className="font-display font-semibold text-sm text-white">
                  {lang === 'id'
                    ? '11 Pelajar Lintas Sekolah & 3 Mentor Robotika'
                    : '11 Cross-School Students & 3 Robotics Mentors'}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {lang === 'id'
                    ? 'Bersatu di bawah identitas independen No Clue Robotics (#30647) di Science Techno Park Universitas Indonesia.'
                    : 'United under the independent identity of No Clue Robotics (#30647) at Science Techno Park Universitas Indonesia.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden glass-panel p-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/assets/photos/pit-banner-robot.jpg"
                    alt="Pit Banner NCR 30647 dan Robot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 px-1 text-xs font-mono text-zinc-300">
                  {lang === 'id' ? 'Area Pit & Identitas NCR' : 'NCR Pit & Identity Banner'}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden glass-panel p-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/assets/photos/workshop-rev-kit.jpg"
                    alt="Eksplorasi REV Control Hub di Workshop Depok"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 px-1 text-xs font-mono text-zinc-300">
                  {lang === 'id' ? 'Markas Latihan Depok' : 'Depok Base Workshop'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Mission Pillars Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {lang === 'id'
                ? 'Pilar Misi & Budaya Rekayasa'
                : 'Mission Pillars & Engineering Culture'}
            </h3>
            <span className="font-mono text-xs text-[#C4FF01]">
              &ldquo;{TEAM_INFO.motto}&rdquo;
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MISSION_PILLARS.map((pillar) => (
              <div
                key={pillar.code}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-[#C4FF01]/35 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#C4FF01] mb-3">
                    PILLAR // {pillar.code}
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {pillar.title[lang]}
                  </h4>
                  <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                    {pillar.description[lang]}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>NCR #30647</span>
                  <span className="text-[#7A9E00]">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Organization Structure & Leadership */}
        <div className="mt-14 pt-12 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C4FF01] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {lang === 'id'
                    ? 'Struktur Kepemimpinan & Organisasi'
                    : 'Leadership & Organizational Structure'}
                </span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                {lang === 'id'
                  ? 'Inti Penggerak No Clue Robotics'
                  : 'Core Leadership of No Clue Robotics'}
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              {TEAM_INFO.foundation} • Depok, Jawa Barat
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-xl glass-panel hover:border-white/20 transition-colors"
              >
                <span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-[#C4FF01] border border-white/[0.08]">
                  {member.badge}
                </span>
                <h4 className="mt-3 font-display font-bold text-lg text-white">
                  {member.name}
                </h4>
                <div className="text-xs font-mono uppercase tracking-wider text-[#C4FF01] mt-0.5">
                  {member.role[lang]}
                </div>
                <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                  {member.division[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
