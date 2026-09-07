import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from '@/i18n/LocaleLink';

export interface PromoSlide {
  id: string;
  badge: string;
  headline: string;
  subtext: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  finePrint?: string;
}

interface PromoCarouselProps {
  slides: PromoSlide[];
  /** sessionStorage key used to remember dismissal for this browser session. */
  storageKey?: string;
  /** Auto-rotate interval in ms when there are 2+ slides. */
  rotateMs?: number;
}

const CSS_VAR = '--promo-bar-height';

export default function PromoCarousel({
  slides,
  storageKey = 'hazloc-promo-dismissed',
  rotateMs = 7000,
}: PromoCarouselProps) {
  const [dismissed, setDismissed] = useState(true);
  const [index, setIndex] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let wasDismissed = false;
    try {
      wasDismissed = sessionStorage.getItem(storageKey) === 'true';
    } catch {
      wasDismissed = false;
    }
    setDismissed(wasDismissed);
  }, [storageKey]);

  const visible = !dismissed && slides.length > 0;

  // Push any fixed header down by this bar's rendered height, and reset to 0
  // when hidden/unmounted, so consuming pages just read the CSS variable.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty(CSS_VAR, '0px');
      return;
    }
    const el = barRef.current;
    if (!el) return;
    const update = () => root.style.setProperty(CSS_VAR, `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty(CSS_VAR, '0px');
    };
  }, [visible]);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), rotateMs);
    return () => clearInterval(id);
  }, [slides.length, rotateMs]);

  if (!visible) return null;

  const slide = slides[index % slides.length];

  function handleDismiss() {
    try {
      sessionStorage.setItem(storageKey, 'true');
    } catch {
      // storage unavailable (private browsing, etc.) — just hide for this render
    }
    setDismissed(true);
  }

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Promotional announcement"
      className="fixed inset-x-0 top-0 z-[60] bg-teal-600 text-ink-900"
    >
      <div className="container-x relative py-3 pr-9 sm:pr-10">
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-3 text-ink-900/60 transition-colors hover:text-ink-900 sm:right-5"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex flex-shrink-0 items-center rounded-full bg-ink-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {slide.badge}
              </span>
              <p className="font-display text-sm font-bold sm:text-base">{slide.headline}</p>
            </div>
            <p className="mt-1 text-xs leading-snug text-ink-900/80 sm:text-sm">{slide.subtext}</p>
            {slide.finePrint && (
              <p className="mt-1 text-[11px] text-ink-900/65">{slide.finePrint}</p>
            )}
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
            <Link
              to={slide.primaryCta.to}
              className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-ink-800 sm:text-sm"
            >
              {slide.primaryCta.label}
            </Link>
            {slide.secondaryCta && (
              <Link
                to={slide.secondaryCta.to}
                className="inline-flex items-center justify-center rounded-lg border border-ink-900/30 px-4 py-2 text-xs font-semibold text-ink-900 transition-colors hover:bg-ink-900/10 sm:text-sm"
              >
                {slide.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
              aria-label="Previous announcement"
              className="text-ink-900/60 hover:text-ink-900"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to announcement ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? 'bg-ink-900' : 'bg-ink-900/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              aria-label="Next announcement"
              className="text-ink-900/60 hover:text-ink-900"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
