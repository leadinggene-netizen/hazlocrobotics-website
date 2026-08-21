import { ArrowRight } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale, type Locale } from '@/i18n/useLocale';
import { products } from '@/data/products';
import type { ProductCategory } from '@/data/products';

const categoryLabel: Record<Locale, Record<ProductCategory, string>> = {
  en: {
    'explosion-proof': 'Explosion-Proof',
    electric: 'Electric',
    software: 'Software',
    peripheral: 'Peripheral',
  },
  fr: {
    'explosion-proof': 'Antidéflagrant',
    electric: 'Électrique',
    software: 'Logiciel',
    peripheral: 'Périphérique',
  },
  es: {
    'explosion-proof': 'Antiexplosión',
    electric: 'Eléctrico',
    software: 'Software',
    peripheral: 'Periférico',
  },
  pt: {
    'explosion-proof': 'À prova de explosão',
    electric: 'Elétrico',
    software: 'Software',
    peripheral: 'Periférico',
  },
};

const categoryClass: Record<ProductCategory, string> = {
  'explosion-proof': 'tag-explosion',
  electric: 'tag-electric',
  software: 'tag-software',
  peripheral: 'tag-peripheral',
};

const learnMore = { en: 'Learn more', fr: 'En savoir plus', es: 'Más información', pt: 'Saiba mais' };

interface ProductCardProps {
  product: (typeof products)[number];
}

export default function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();

  return (
    <Link
      to={`/products/${product.slug}`}
      className="card group overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
        <span className={`absolute top-4 left-4 ${categoryClass[product.category]}`}>
          {categoryLabel[locale][product.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all">
          {learnMore[locale]}
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
