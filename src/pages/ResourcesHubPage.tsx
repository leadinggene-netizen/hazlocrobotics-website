import { ArrowRight, Clock, FileText } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getLocalizedResources } from '@/data/resources';

const categoryColors: Record<string, string> = {
  'Explainer': 'tag-electric',
  'Guide': 'tag-software',
  'Buyer Education': 'tag-explosion',
  'Gated': 'tag bg-gold-100 text-gold-700',
};

const categoryLabel: Record<'en' | 'fr', Record<string, string>> = {
  en: {
    'Explainer': 'Explainer',
    'Guide': 'Guide',
    'Buyer Education': 'Buyer Education',
    'Gated': 'Gated',
  },
  fr: {
    'Explainer': 'Explication',
    'Guide': 'Guide',
    'Buyer Education': 'Éducation acheteur',
    'Gated': 'Contenu protégé',
  },
};

const copy = {
  en: {
    eyebrow: 'Resources',
    title: 'Guides, Explainers & Buyer Education',
    subtitle: 'Practical information for HSE, operations, and procurement teams evaluating hazardous-location inspection robots — from certification guides to ROI frameworks.',
    read: 'Read',
    newsletterTitle: 'Stay informed on hazardous-location robotics',
    newsletterBody: 'Get notified when we publish new guides, certification updates, and industry insights.',
    subscribe: 'Subscribe to Updates',
  },
  fr: {
    eyebrow: 'Ressources',
    title: 'Guides, explications et éducation acheteur',
    subtitle: 'Information pratique pour les équipes HSE, opérations et approvisionnement évaluant des robots d\'inspection en emplacement dangereux — des guides de certification aux cadres de RCI.',
    read: 'Lire',
    newsletterTitle: 'Restez informé sur la robotique en emplacement dangereux',
    newsletterBody: 'Soyez avisé lorsque nous publions de nouveaux guides, mises à jour de certification et perspectives sectorielles.',
    subscribe: 'S\'abonner aux mises à jour',
  },
};

export default function ResourcesHubPage() {
  const locale = useLocale();
  const t = copy[locale];
  const resources = getLocalizedResources(locale);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 100}>
                <Link to={`/resources/${r.slug}`} className="card group block h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className={categoryColors[r.category] || 'tag-software'}>{categoryLabel[locale][r.category] || r.category}</span>
                    <FileText size={18} className="text-ink-300" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-teal-700 transition-colors flex-1">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">{r.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {r.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      {t.read} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.newsletterTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              {t.newsletterBody}
            </p>
            <Link to="/contact" className="mt-6 btn-primary">
              {t.subscribe}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
