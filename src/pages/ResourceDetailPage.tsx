import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getLocalizedResource, getLocalizedResources } from '@/data/resources';
import { getLocalizedProduct } from '@/data/products';

const categoryLabel: Record<'en' | 'fr', Record<string, string>> = {
  en: { 'Explainer': 'Explainer', 'Guide': 'Guide', 'Buyer Education': 'Buyer Education', 'Gated': 'Gated' },
  fr: { 'Explainer': 'Explication', 'Guide': 'Guide', 'Buyer Education': 'Éducation acheteur', 'Gated': 'Contenu protégé' },
};

const copy = {
  en: {
    notFound: 'Article not found',
    backToResources: 'Back to Resources',
    readSuffix: 'read',
    relatedProduct: 'Related Product',
    learnMore: 'Learn more',
    certification: 'Certification',
    certTitle: 'Certification & Compliance',
    certDesc: 'Full certification status, ratings explained, and verification guidance.',
    view: 'View',
    questionsTitle: 'Questions about deployment?',
    questionsBody: 'Our team helps you evaluate the right robot for your site.',
    contactUs: 'Contact Us',
    moreResources: 'More Resources',
    read: 'Read',
    dateLocale: 'en-US',
  },
  fr: {
    notFound: 'Article introuvable',
    backToResources: 'Retour aux ressources',
    readSuffix: 'de lecture',
    relatedProduct: 'Produit associé',
    learnMore: 'En savoir plus',
    certification: 'Certification',
    certTitle: 'Certification et conformité',
    certDesc: 'Statut de certification complet, classifications expliquées et conseils de vérification.',
    view: 'Voir',
    questionsTitle: 'Des questions sur le déploiement?',
    questionsBody: 'Notre équipe vous aide à évaluer le bon robot pour votre site.',
    contactUs: 'Nous contacter',
    moreResources: 'Plus de ressources',
    read: 'Lire',
    dateLocale: 'fr-CA',
  },
};

export default function ResourceDetailPage() {
  const locale = useLocale();
  const t = copy[locale];
  const { slug } = useParams<{ slug: string }>();
  const resource = getLocalizedResource(slug || '', locale);
  const resources = getLocalizedResources(locale);

  if (!resource) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">{t.notFound}</h1>
        <Link to="/resources" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> {t.backToResources}
        </Link>
      </div>
    );
  }

  const relatedProduct = resource.relatedProduct ? getLocalizedProduct(resource.relatedProduct, locale) : undefined;
  const moreResources = resources.filter((r) => r.slug !== resource.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={categoryLabel[locale][resource.category] || resource.category} title={resource.title} image="https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&w=1920">
        <div className="flex items-center gap-6 text-sm text-ink-300">
          <span className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(resource.date).toLocaleDateString(t.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="flex items-center gap-1.5"><Clock size={16} /> {resource.readTime} {t.readSuffix}</span>
        </div>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
            {/* Article body */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-xl text-ink-600 leading-relaxed font-medium border-l-4 border-gold-500 pl-6">
                  {resource.excerpt}
                </p>
              </Reveal>

              <div className="mt-10 space-y-10">
                {resource.body.map((section, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <div>
                      <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{section.heading}</h2>
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((p, j) => (
                          <p key={j} className="text-ink-600 leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-ink-100">
                <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                  <ArrowLeft size={16} /> {t.backToResources}
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {relatedProduct && (
                <Reveal delay={200}>
                  <Link to={`/products/${relatedProduct.slug}`} className="card group block p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">{t.relatedProduct}</p>
                    <h3 className="mt-2 font-display text-base font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">{relatedProduct.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      {t.learnMore} <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )}

              {resource.relatedCertification && (
                <Reveal delay={300}>
                  <Link to="/certification" className="card group block p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">{t.certification}</p>
                    <h3 className="mt-2 font-display text-base font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                      {t.certTitle}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">{t.certDesc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      {t.view} <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )}

              <Reveal delay={400}>
                <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-6">
                  <h3 className="font-display text-lg font-bold text-white">{t.questionsTitle}</h3>
                  <p className="mt-2 text-sm text-teal-50">{t.questionsBody}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-all">
                    {t.contactUs} <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* More resources */}
      <section className="bg-ink-50 py-16">
        <div className="container-x">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-6">{t.moreResources}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {moreResources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link to={`/resources/${r.slug}`} className="card group block p-6">
                  <span className="tag-software">{categoryLabel[locale][r.category] || r.category}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{r.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                    {t.read} <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
