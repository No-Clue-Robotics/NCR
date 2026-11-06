import React from 'react';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      <div
        className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        <span className="font-mono text-xs font-semibold tracking-wider text-[#C4FF01]">
          {index}
        </span>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
