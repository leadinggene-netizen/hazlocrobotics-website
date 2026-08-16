import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { getLocalizedProducts, type ProductCategory } from '@/data/products';

type Filter = 'all' | ProductCategory;

const copy = {
  en: {
    eyebrow: 'Product Line',
    title: 'Inspection Robots & Fleet Software',
    subtitle: 'Fourteen robots engineered for hazardous-location inspection — from explosion-proof quadrupeds and wheeled robots to rail-mounted systems and the software that unifies your fleet.',
    filters: [
      { key: 'all' as Filter, label: 'All Products' },
      { key: 'explosion-proof' as Filter, label: 'Explosion-Proof' },
      { key: 'electric' as Filter, label: 'Electric' },
      { key: 'software' as Filter, label: 'Software' },
      { key: 'peripheral' as Filter, label: 'Peripherals' },
    ],
    ctaTitle: 'Not sure which robot fits your site?',
    ctaBody: 'Answer a few questions about your industry, hazard classification, and terrain, and we\'ll point you to the robots most likely to fit — a starting point for a specialist to help scope your deployment.',
    ctaButton: 'Build Your Robot',
  },
  fr: {
    eyebrow: 'Gamme de produits',
    title: 'Robots d\'inspection et logiciel de flotte',
    subtitle: 'Quatorze robots conçus pour l\'inspection en emplacement dangereux — des quadrupèdes et robots à roues antidéflagrants aux systèmes sur rail et au logiciel qui unifie votre flotte.',
    filters: [
      { key: 'all' as Filter, label: 'Tous les produits' },
      { key: 'explosion-proof' as Filter, label: 'Antidéflagrant' },
      { key: 'electric' as Filter, label: 'Électrique' },
      { key: 'software' as Filter, label: 'Logiciel' },
      { key: 'peripheral' as Filter, label: 'Périphériques' },
    ],
    ctaTitle: 'Vous ne savez pas quel robot convient à votre site?',
    ctaBody: 'Répondez à quelques questions sur votre secteur, votre classification de danger et votre terrain, et nous vous orienterons vers les robots les plus susceptibles de convenir — un point de départ pour qu\'un spécialiste vous aide à définir votre déploiement.',
    ctaButton: 'Configurer votre robot',
  },
};

export default function ProductsHubPage() {
  const locale = useLocale();
  const t = copy[locale];
  const products = getLocalizedProducts(locale);
  const [active, setActive] = useState<Filter>('all');

  const filtered =
    active === 'all'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {t.filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === f.key
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator CTA */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-3 text-lg text-ink-500">
              {t.ctaBody}
            </p>
            <Link to="/build" className="mt-6 btn-primary">
              {t.ctaButton}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
