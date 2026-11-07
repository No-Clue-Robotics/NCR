import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem, Language } from '@/data/ncrData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

type CategoryFilter = 'all' | 'robot' | 'competition' | 'awards' | 'community';

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const categories: {
    id: CategoryFilter;
    label: { id: string; en: string };
  }[] = [
    { id: 'all', label: { id: 'Semua Dokumentasi', en: 'All Photos' } },
    {
      id: 'robot',
      label: { id: 'Robot & Rekayasa', en: 'Robot & Engineering' },
    },
    { id: 'competition', label: { id: 'Arena FTC', en: 'FTC Arena' } },
    {
      id: 'awards',
      label: { id: 'Penghargaan & Skuad', en: 'Awards & Squad' },
    },
    { id: 'community', label: { id: 'Pit & Workshop', en: 'Pit & Workshop' } },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, filteredItems.length]);

  const activePhoto =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#090A0B] bg-engineering-grid border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeader
            index="04 // DOKUMENTASI VISUAL"
            eyebrow={
              lang === 'id'
                ? 'Arsip Fotografi Asli Tim #30647'
                : 'Authentic Team #30647 Photography Archive'
            }
            title={
              lang === 'id'
                ? 'Di Balik Layar Rekayasa & Arena Kompetisi.'
                : 'Inside the Engineering Pit & Competition Arena.'
            }
            description={
              lang === 'id'
                ? 'Dokumentasi visual asli dari aktivitas perakitan robot di Depok, proses inspeksi teknis, pertandingan kualifikasi & playoff, hingga penganugerahan penghargaan di FTC Nusantara Championship.'
                : 'Original visual documentation from hardware assembly in Depok, technical inspection, qualification & playoff matches, and award ceremonies at the FTC Nusantara Championship.'
            }
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start lg:self-end">
            {categories.map((cat) => {
              const isSelected = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setFilter(cat.id);
                    setActivePhotoIndex(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#C4FF01] text-[#090A0B] font-bold'
                      : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Photography Grid — Fixed row heights on md/lg + absolute inset-0 image fill */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[280px] lg:auto-rows-[310px] gap-5">
          {filteredItems.map((item, idx) => {
            const isWide = item.aspect === 'wide' && filter === 'all';
            const isLgWideExtra = item.id === 'gal-8' && filter === 'all';
            const spanClass = isWide
              ? 'md:col-span-2'
              : isLgWideExtra
                ? 'lg:col-span-2'
                : '';

            return (
              <div
                key={item.id}
                onClick={() => setActivePhotoIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePhotoIndex(idx);
                  }
                }}
                className={`group relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden bg-[#111419] border border-white/[0.08] hover:border-[#C4FF01]/45 transition-all cursor-pointer ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.title[lang]}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />

                {/* Top Tag & Expand Icon */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 font-mono text-[10px] tracking-wider text-[#C4FF01]">
                    {item.tag}
                  </span>
                  <span className="w-7 h-7 rounded-md bg-black/70 border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-[#C4FF01] group-hover:border-[#C4FF01]/40 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-300 line-clamp-2">
                    {item.caption[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl glass-panel overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between bg-[#0B0D10]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#C4FF01] font-semibold">
                  {activePhoto.tag}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  ({activePhotoIndex + 1} / {filteredItems.length})
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-black flex items-center justify-center max-h-[72vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title[lang]}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex(
                    (activePhotoIndex - 1 + filteredItems.length) %
                      filteredItems.length
                  )
                }
                className="absolute left-3 p-2.5 rounded-full bg-black/75 hover:bg-[#C4FF01] text-white hover:text-[#090A0B] border border-white/15 transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex(
                    (activePhotoIndex + 1) % filteredItems.length
                  )
                }
                className="absolute right-3 p-2.5 rounded-full bg-black/75 hover:bg-[#C4FF01] text-white hover:text-[#090A0B] border border-white/15 transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-5 bg-[#0F1216] border-t border-white/[0.08]">
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                {activePhoto.title[lang]}
              </h4>
              <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
                {activePhoto.caption[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
