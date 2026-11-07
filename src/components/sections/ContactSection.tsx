import React from 'react';
import {
  Language,
  PARTNERSHIP_TIERS,
  SOCIAL_MEDIA_LINKS,
  TEAM_INFO,
} from '@/data/ncrData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SocialPlatformIcon } from '@/components/ui/SocialIcons';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  Handshake,
  Check,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const socialPlatforms = SOCIAL_MEDIA_LINKS.filter(
    (link) => link.id !== 'website'
  );

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0C0E11] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05 // KEMITRAAN & KONTAK"
          eyebrow={
            lang === 'id'
              ? 'Kolaborasi Bersama No Clue Robotics #30647'
              : 'Collaborate With No Clue Robotics #30647'
          }
          title={
            lang === 'id'
              ? 'Mari Bangun Ekosistem Inovasi & Robotika Pemuda Indonesia.'
              : "Let's Build Indonesia's Youth Robotics & Innovation Ecosystem."
          }
          description={
            lang === 'id'
              ? 'Kami mengundang perusahaan teknologi, institusi pendidikan, dan mitra industri untuk berkolaborasi mendukung riset Robot #30647, kompetisi FIRST Tech Challenge, serta program edukasi STEM di sekolah-sekolah.'
              : 'We invite technology companies, educational institutions, and industry partners to collaborate in supporting Robot #30647 R&D, FIRST Tech Challenge competitions, and school STEM outreach programs.'
          }
        />

        {/* Partnership Tiers Overview (From Official Proposal) */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
              <Handshake className="w-4 h-4" />
              <span>
                {lang === 'id'
                  ? 'Skema Paket Kemitraan & Sponsorship (Dapat Disesuaikan)'
                  : 'Partnership & Sponsorship Packages (Negotiable)'}
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              {lang === 'id'
                ? 'Dukungan dapat berupa dana, komponen perangkat keras, maupun layanan teknis'
                : 'Support accepted in cash, hardware components, or technical services'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTNERSHIP_TIERS.map((tier) => {
              const isGold = tier.name.includes('Gold');
              return (
                <div
                  key={tier.name}
                  className={`p-6 sm:p-7 rounded-2xl glass-panel flex flex-col justify-between transition-colors ${
                    isGold
                      ? 'border-[#C4FF01]/45 bg-gradient-to-b from-[#C4FF01]/[0.05] to-transparent'
                      : 'border-white/[0.08]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded border ${tier.accentClass}`}
                      >
                        {tier.tierCode}
                      </span>
                      {isGold && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C4FF01] text-[#090A0B] font-bold">
                          PRIMARY TIER
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <div className="mt-1 font-mono text-sm text-[#C4FF01]">
                      {tier.startingFrom}
                    </div>

                    <ul className="mt-5 pt-5 border-t border-white/[0.08] space-y-3">
                      {tier.benefits.map((b) => (
                        <li
                          key={b.en}
                          className="flex items-start gap-2.5 text-sm text-zinc-300"
                        >
                          <Check className="w-4 h-4 text-[#C4FF01] shrink-0 mt-0.5" />
                          <span>{b[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <a
                      href={`mailto:${TEAM_INFO.contact.email}?subject=Partnership%20Inquiry%20-%20NCR%20%2330647%20(${encodeURIComponent(
                        tier.name
                      )})`}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-display font-semibold text-xs uppercase tracking-wider transition-colors ${
                        isGold
                          ? 'bg-[#C4FF01] hover:bg-[#d2ff38] text-[#090A0B]'
                          : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                      }`}
                    >
                      <span>
                        {lang === 'id'
                          ? `Diskusikan ${tier.name}`
                          : `Inquire ${tier.name}`}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Contact Channels & Workshop Location */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact & Social Media Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
                {lang === 'id'
                  ? 'Saluran Komunikasi & Media Sosial Resmi'
                  : 'Official Contact & Social Media Channels'}
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                {lang === 'id'
                  ? 'Hubungi Tim & Ikuti Perjalanan NCR #30647'
                  : 'Reach Out & Follow NCR #30647 Across Platforms'}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {lang === 'id'
                  ? 'Tertarik untuk mengundang NCR #30647 dalam program kunjungan edukasi sekolah (Outreach), berdiskusi mengenai kemitraan sponsor, atau mengikuti dokumentasi teknis kami? Terhubung langsung melalui kanal resmi berikut:'
                  : 'Interested in inviting NCR #30647 for a school STEM outreach session, discussing sponsorship partnerships, or following our engineering updates? Connect with us through our verified channels below:'}
              </p>

              {/* Direct Contact Grid: E-Mail, WhatsApp/Phone, Website, Location */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <a
                  href={`mailto:${TEAM_INFO.contact.email}`}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C4FF01]/40 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <Mail className="w-5 h-5 text-[#C4FF01]" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C4FF01] transition-colors" />
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase text-zinc-400">
                    {lang === 'id' ? 'E-Mail Resmi' : 'Official E-Mail'}
                  </div>
                  <div className="mt-0.5 font-mono text-sm font-semibold text-white break-all">
                    {TEAM_INFO.contact.email}
                  </div>
                </a>

                {/* WhatsApp / Phone */}
                <a
                  href={TEAM_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C4FF01]/40 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <Phone className="w-5 h-5 text-[#C4FF01]" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C4FF01] transition-colors" />
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase text-zinc-400">
                    Lead Mentor ({TEAM_INFO.contact.leadMentor})
                  </div>
                  <div className="mt-0.5 font-mono text-sm font-semibold text-white">
                    {TEAM_INFO.contact.phone}
                  </div>
                </a>

                {/* Official Website */}
                <a
                  href={TEAM_INFO.contact.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C4FF01]/40 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <Globe className="w-5 h-5 text-[#C4FF01]" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C4FF01] transition-colors" />
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase text-zinc-400">
                    {lang === 'id' ? 'Situs Web Resmi' : 'Official Website'}
                  </div>
                  <div className="mt-0.5 font-mono text-sm font-semibold text-white break-all">
                    {TEAM_INFO.contact.websiteLabel}
                  </div>
                </a>

                {/* Base Location */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <MapPin className="w-5 h-5 text-[#C4FF01]" />
                    <span className="font-mono text-[10px] text-zinc-500">
                      DEPOK, IDN
                    </span>
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase text-zinc-400">
                    {TEAM_INFO.foundation}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-white leading-snug">
                    {TEAM_INFO.location.street}, {TEAM_INFO.location.city}
                  </div>
                </div>
              </div>

              {/* Official Social Media Section */}
              <div className="mt-6 pt-6 border-t border-white/[0.07]">
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C4FF01]">
                    {lang === 'id'
                      ? 'Platform Media Sosial & Repositori Resmi'
                      : 'Official Social Media & Code Repositories'}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    @nocluerobotics
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialPlatforms.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C4FF01]/40 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#C4FF01]/10 border border-[#C4FF01]/25 flex items-center justify-center text-[#C4FF01] shrink-0">
                          <SocialPlatformIcon
                            id={social.id}
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                            {social.platform}
                          </div>
                          <div className="font-mono text-xs sm:text-sm font-semibold text-white truncate">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#C4FF01] transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <span>
                Lead Mentor:{' '}
                <strong className="text-white">
                  {TEAM_INFO.contact.leadMentor}
                </strong>
              </span>
              <span>
                Team Captain:{' '}
                <strong className="text-white">
                  {TEAM_INFO.contact.teamCaptain}
                </strong>
              </span>
              <span>
                Secretary:{' '}
                <strong className="text-white">
                  {TEAM_INFO.contact.secretary}
                </strong>
              </span>
            </div>
          </div>

          {/* Right Visual / CAD Livery Card */}
          <div className="lg:col-span-5 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between bg-[#0B0D10] bg-engineering-dots">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-[#C4FF01]">
                  CAD // SPONSOR LIVERY
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  TEAM #30647
                </span>
              </div>

              <div className="aspect-[16/11] rounded-xl bg-black/50 border border-white/[0.08] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/cad/robot-cad-rear.png"
                  alt="Alokasi Panel Sponsor pada 3D CAD Robot NCR 30647"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <h4 className="mt-5 font-display text-lg font-bold text-white">
                {lang === 'id'
                  ? 'Penempatan Branding Mitra pada Sasis Robot #30647'
                  : 'Partner Branding Placement on Robot #30647 Chassis'}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {lang === 'id'
                  ? 'Panel modular pada Robot #30647, jersey resmi tim, dan banner pit 300×300 cm dirancang khusus untuk memberikan eksposur optimal bagi mitra industri dan pendidikan di setiap kompetisi dan kunjungan sekolah.'
                  : 'Modular panels on Robot #30647, official team jerseys, and our 300×300 cm pit backdrop are engineered to provide high-visibility exposure for industry and education partners at every competition and school outreach visit.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-display font-bold text-sm text-white">
                &ldquo;{TEAM_INFO.motto}&rdquo;
              </span>
              <span className="font-mono text-xs text-[#C4FF01]">
                #30647 • INDONESIA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
