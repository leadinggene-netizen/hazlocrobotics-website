import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = 'left',
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {image && (
        <>
          <div className="absolute inset-0">
            <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-900/80 to-ink-900/40" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-teal-900" />
      )}
      <div
        className={`container-x relative z-10 ${
          align === 'center' ? 'text-center mx-auto max-w-3xl' : ''
        }`}
      >
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400 animate-fade-down">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 text-lg text-ink-200 leading-relaxed animate-fade-up ${align === 'center' ? 'mx-auto' : 'max-w-2xl'}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
