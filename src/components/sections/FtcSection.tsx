import React, { useState } from 'react';
import {
  ENGINEERING_SUBSYSTEMS,
  Language,
  ROBOT_VIEWS,
} from '@/data/ncrData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, Cpu, Layers, Terminal, Wrench } from 'lucide-react';

interface FtcSectionProps {
  lang: Language;
}

export const FtcSection: React.FC<FtcSectionProps> = ({ lang }) => {
  const [selectedViewId, setSelectedViewId] = useState<string>(ROBOT_VIEWS[0].id);
  const activeView =
    ROBOT_VIEWS.find((v) => v.id === selectedViewId) || ROBOT_VIEWS[0];

  return (
    <section
      id="ftc"
      className="py-20 lg:py-28 bg-[#090A0B] bg-engineering-grid border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header + Official FTC DECODE Mark */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeader
            index="02 // FOKUS UTAMA: FTC #30647"
            eyebrow="FIRST® Tech Challenge — Musim DECODE™ 2025–2026"
            title={
              lang === 'id'
                ? 'Rekayasa Robot #30647 untuk Kompetisi FIRST Tech Challenge.'
                : 'Engineering Robot #30647 for FIRST Tech Challenge Competition.'
            }
            description={
              lang === 'id'
                ? 'FIRST Tech Challenge (FTC) adalah kompetisi robotika internasional tingkat SMP–SMA (kelas 7–12) di mana tim pelajar merancang, memfabrikasi, dan memprogram robot berukuran menengah untuk menyelesaikan tantangan dalam format aliansi.'
                : 'FIRST Tech Challenge (FTC) is an international robotics competition for grades 7–12 in which student teams design, build, and program medium-sized robots to complete game challenges in a competitive alliance format.'
            }
          />

          <div className="shrink-0 p-4 rounded-xl glass-panel flex items-center gap-4 self-start lg:self-end">
            <img
              src="/assets/logos/ftc-decode-white.png"
              alt="FIRST Tech Challenge DECODE Presented by RTX"
              className="h-12 sm:h-14 w-auto"
              loading="lazy"
            />
            <div className="pl-4 border-l border-white/10">
              <div className="font-mono text-[11px] text-[#C4FF01] font-semibold">
                TEAM #30647
              </div>
              <div className="font-display text-xs text-zinc-300">
                DECODE™ 2025–2026
              </div>
              <div className="font-mono text-[10px] text-zinc-500">
                Depok, Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Robot #30647 CAD & Hardware Inspector */}
        <div className="mt-14 rounded-2xl glass-panel overflow-hidden">
          {/* Inspector Top Bar */}
          <div className="px-5 py-4 border-b border-white/[0.08] bg-black/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#C4FF01]/15 border border-[#C4FF01]/30 font-mono text-xs font-bold text-[#C4FF01]">
                ROBOT // #30647
              </span>
              <span className="font-display font-semibold text-sm sm:text-base text-white">
                {lang === 'id'
                  ? 'Inspektor 3D CAD & Perangkat Keras Aktual'
                  : '3D CAD & Actual Hardware Inspector'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {ROBOT_VIEWS.map((view) => {
                const isSelected = view.id === activeView.id;
                return (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setSelectedViewId(view.id)}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                        : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.07]'
                    }`}
                  >
                    {view.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inspector Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Viewport Canvas */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-[#0B0D10] bg-engineering-dots flex items-center justify-center p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/75 border border-white/10 font-mono text-[11px] text-[#C4FF01]">
                {activeView.tag}
              </div>

              <img
                src={activeView.src}
                alt={activeView.label[lang]}
                className={`max-h-[380px] w-full rounded-lg transition-all duration-300 ${
                  activeView.type === 'cad'
                    ? 'object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]'
                    : 'object-cover h-full'
                }`}
              />
            </div>

            {/* Technical Breakdown Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#101318]">
              <div className="space-y-4">
                <div className="font-mono text-xs text-[#C4FF01] uppercase tracking-wider">
                  {lang === 'id'
                    ? 'Spesifikasi Arsitektur Robot #30647'
                    : 'Robot #30647 Architecture Specs'}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {activeView.label[lang]}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeView.caption[lang]}
                </p>

                {/* Technical Specs Table */}
                <div className="pt-2 space-y-2.5">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-400">
                      {lang === 'id' ? 'Sistem Kendali Utama' : 'Control System'}
                    </span>
                    <span className="font-mono font-semibold text-white">
                      REV Robotics Control Hub
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-400">
                      {lang === 'id' ? 'Akuisisi Game Element' : 'Element Acquisition'}
                    </span>
                    <span className="font-mono font-semibold text-white">
                      Front Omni-Wheel &amp; Roller Intake
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-400">
                      {lang === 'id' ? 'Mekanisme Pelontar' : 'Scoring Launcher'}
                    </span>
                    <span className="font-mono font-semibold text-white">
                      Dual-Chain Turret &amp; Flywheel
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-400">
                      {lang === 'id' ? 'Sensor Navigasi Otonom' : 'Autonomous Sensor'}
                    </span>
                    <span className="font-mono font-semibold text-[#C4FF01]">
                      Turret-Mounted Vision Camera
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#C4FF01] shrink-0" />
                <span>
                  {lang === 'id'
                    ? 'Teruji secara kompetitif di FTC Nusantara Championship 2025–2026.'
                    : 'Competitively proven at the 2025–2026 FTC Nusantara Championship.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Subsystems */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C4FF01]">
                {lang === 'id'
                  ? 'Disiplin Rekayasa Tim'
                  : 'Team Engineering Disciplines'}
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'id'
                  ? 'Tiga Pilar Pengembangan Robot #30647'
                  : 'Three Core Pillars of Robot #30647 Development'}
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-400">
              MECH / CAD • ELECTRICAL • AUTONOMOUS SOFTWARE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ENGINEERING_SUBSYSTEMS.map((sub, idx) => {
              const Icon = idx === 0 ? Layers : idx === 1 ? Cpu : Terminal;
              return (
                <div
                  key={sub.id}
                  className="rounded-2xl glass-panel overflow-hidden flex flex-col justify-between group hover:border-[#C4FF01]/35 transition-colors"
                >
                  <div>
                    {/* Subsystem Photo */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={sub.image}
                        alt={sub.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14171C] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[11px] text-[#C4FF01] flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{sub.code}</span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 space-y-3">
                      <div className="font-mono text-xs text-[#C4FF01]">
                        {sub.subtitle[lang]}
                      </div>
                      <h4 className="font-display text-xl font-bold text-white">
                        {sub.title[lang]}
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {sub.description[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Specs Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] space-y-2">
                    {sub.specs.map((spec) => (
                      <div
                        key={spec.value}
                        className="flex items-center justify-between text-xs font-mono"
                      >
                        <span className="text-zinc-500">{spec.label[lang]}</span>
                        <span className="text-zinc-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competition Preparation & Inspection Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
              <Wrench className="w-4 h-4" />
              <span>
                {lang === 'id'
                  ? 'Kesiapan Kompetisi & Kolaborasi Tim'
                  : 'Competition Readiness & Team Collaboration'}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              {lang === 'id'
                ? 'Dari Meja Inspeksi Teknis Hingga Strategi Aliansi di Lapangan'
                : 'From Technical Inspection to Field Alliance Strategy'}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {lang === 'id'
                ? 'Setiap pertandingan FTC menuntut sinergi antara kualitas perangkat keras, keandalan kode otonom, dan ketenangan komunikasi di lapangan. Sebelum bertanding, Robot #30647 melewati seluruh parameter pemeriksaan dimensi, mekanik, dan kelistrikan resmi FIRST Tech Challenge DECODE™, dilanjutkan dengan evaluasi strategi rutin antar-pertandingan oleh seluruh kru pit dan Drive Team.'
                : 'Every FTC match demands tight synergy between hardware durability, autonomous code reliability, and calm communication on the field. Prior to competing, Robot #30647 passed all official FIRST Tech Challenge DECODE™ dimensional, mechanical, and electrical inspection parameters, backed by continuous pre-match strategy huddles between the pit crew and Drive Team.'}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-black/50 border border-white/[0.08] p-2">
              <img
                src="/assets/photos/inspection-checklist.jpg"
                alt="FTC DECODE Inspection Checklist Team 30647"
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
              <p className="mt-2 px-1 font-mono text-[11px] text-zinc-300">
                {lang === 'id'
                  ? 'Checklist Inspeksi Resmi #30647'
                  : 'Official #30647 Inspection Sheet'}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-black/50 border border-white/[0.08] p-2">
              <img
                src="/assets/photos/team-strategy-huddle.jpg"
                alt="Briefing Strategi Tim NCR 30647"
                className="w-full aspect-[4/3] object-cover rounded-lg"
                loading="lazy"
              />
              <p className="mt-2 px-1 font-mono text-[11px] text-zinc-300">
                {lang === 'id'
                  ? 'Briefing Strategi Pertandingan'
                  : 'Pre-Match Strategy Briefing'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
