import React from 'react';
import {
  Language,
  NCR_PROGRAMS,
  TIMELINE_PHASES,
  VERIFIED_ACHIEVEMENTS,
} from '@/data/ncrData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Award, CheckCircle, Sparkles, Calendar } from 'lucide-react';

interface JourneySectionProps {
  lang: Language;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ lang }) => {
  return (
    <section
      id="journey"
      className="py-20 lg:py-28 bg-[#0C0E11] border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03 // REKAM JEJAK & PROGRAM"
          eyebrow={
            lang === 'id'
              ? 'Prestasi Terverifikasi & Linimasa Perkembangan'
              : 'Verified Achievements & Development Roadmap'
          }
          title={
            lang === 'id'
              ? 'Pencapaian Kompetisi & Program Dampak Komunitas.'
              : 'Competition Milestones & Community Impact Programs.'
          }
          description={
            lang === 'id'
              ? 'Sejak didirikan pada November 2025, No Clue Robotics (#30647) telah membuktikan kualitas rekayasa dan kolaborasinya di panggung nasional FIRST Tech Challenge sekaligus menjalankan inisiatif edukasi terbuka.'
              : 'Since its founding in November 2025, No Clue Robotics (#30647) has proven its engineering and collaborative strength on the national FIRST Tech Challenge stage while running open educational initiatives.'
          }
        />

        {/* Verified Achievements Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VERIFIED_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl glass-panel overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-[#C4FF01]/40 transition-colors"
            >
              <div>
                {/* Main Award Photo + Secondary Inset */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171C] via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4FF01] text-[#090A0B] font-mono text-xs font-bold shadow-lg">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.rank}</span>
                  </div>

                  {item.secondaryImage && (
                    <div className="hidden sm:block absolute bottom-3 right-3 w-36 aspect-[16/10] rounded-lg overflow-hidden border-2 border-[#C4FF01]/60 shadow-2xl bg-black">
                      <img
                        src={item.secondaryImage}
                        alt={`${item.title[lang]} proof`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Award Description */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="font-mono text-xs text-[#C4FF01] uppercase tracking-wider">
                    {item.year} • {item.event}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title[lang]}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="font-mono text-[11px] text-zinc-400">
                      {metric.label[lang]}
                    </div>
                    <div className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4-Phase Engineering & Development Timeline */}
        <div className="mt-16 pt-14 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
                <Calendar className="w-4 h-4" />
                <span>
                  {lang === 'id'
                    ? 'Linimasa Tahapan Rekayasa'
                    : 'Engineering Phase Roadmap'}
                </span>
              </div>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'id'
                  ? 'Perjalanan Pengembangan NCR (2025–2026)'
                  : 'NCR Development Journey (2025–2026)'}
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Cimanggis, Depok → Universitas Indonesia → National Stage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIMELINE_PHASES.map((step) => {
              const isActive = step.status === 'active';
              return (
                <div
                  key={step.phase}
                  className={`p-6 rounded-xl border transition-colors flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#C4FF01]/[0.05] border-[#C4FF01]/50'
                      : 'bg-white/[0.02] border-white/[0.07]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-[#C4FF01]">
                        {step.phase}
                      </span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase ${
                          isActive
                            ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                            : 'bg-white/[0.06] text-zinc-300'
                        }`}
                      >
                        {isActive
                          ? lang === 'id'
                            ? 'Berlangsung'
                            : 'Active'
                          : lang === 'id'
                          ? 'Tercapai'
                          : 'Completed'}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-zinc-400 mb-1.5">
                      {step.period[lang]}
                    </div>

                    <h4 className="font-display font-bold text-base text-white">
                      {step.title[lang]}
                    </h4>

                    <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                      {step.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C4FF01]" />
                    <span>NCR #30647 Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Core Programs & Activities */}
        <div className="mt-16 pt-14 border-t border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
                <Sparkles className="w-4 h-4" />
                <span>
                  {lang === 'id'
                    ? 'Program & Aktivitas Organisasi'
                    : 'Organizational Programs & Activities'}
                </span>
              </div>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'id'
                  ? 'Lebih dari Sekadar Tim Kompetisi'
                  : 'Extending Beyond Competitive Robotics'}
              </h3>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              {lang === 'id'
                ? 'Program NCR dirancang untuk memadukan kompetisi robotika, edukasi langsung di sekolah, serta berbagi pengetahuan terbuka.'
                : 'NCR programs combine competitive robotics, hands-on school workshops, and open digital knowledge sharing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NCR_PROGRAMS.map((prog) => (
              <div
                key={prog.code}
                className="p-6 sm:p-7 rounded-2xl glass-panel hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#C4FF01]">
                      {prog.code}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {prog.tagline[lang]}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white">
                    {prog.title[lang]}
                  </h4>

                  <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                    {prog.description[lang]}
                  </p>
                </div>

                <ul className="mt-5 pt-4 border-t border-white/[0.07] space-y-2">
                  {prog.highlights.map((hl) => (
                    <li
                      key={hl.en}
                      className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4FF01] shrink-0" />
                      <span>{hl[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
