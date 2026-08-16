import { useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Users, AlertCircle } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { getLocalizedIndustry } from '@/data/industries';
import { getLocalizedProduct } from '@/data/products';

const copy = {
  en: {
    notFound: 'Industry not found',
    backToIndustries: 'Back to Industries',
    challenge: 'The Challenge',
    solution: 'The Solution',
    keyBenefits: 'Key Benefits',
    recommendedFor: 'Recommended for',
    recommendedBody: (name: string) => `The robots best suited for ${name.toLowerCase()} environments, based on terrain, hazard classification, and inspection requirements.`,
    whoEvaluates: 'Who Typically Evaluates This',
    whoEvaluatesBody: 'Robot inspection deployments involve multiple stakeholders. If you are in one of these roles, we can tailor the evaluation to your priorities.',
    ctaTitle: (name: string) => `See how robots fit your ${name} site`,
    ctaBody: 'Schedule a site assessment. We will evaluate your facility and recommend a deployment plan tailored to your hazard classification and inspection requirements.',
    ctaButton: 'Request a Site Assessment',
    seeCaseStudies: 'See Case Studies',
  },
  fr: {
    notFound: 'Secteur introuvable',
    backToIndustries: 'Retour aux secteurs',
    challenge: 'Le défi',
    solution: 'La solution',
    keyBenefits: 'Avantages clés',
    recommendedFor: 'Recommandé pour',
    recommendedBody: (name: string) => `Les robots les mieux adaptés aux environnements ${name.toLowerCase()}, selon le terrain, la classification de danger et les exigences d'inspection.`,
    whoEvaluates: 'Qui évalue habituellement cela',
    whoEvaluatesBody: 'Les déploiements de robots d\'inspection impliquent plusieurs parties prenantes. Si vous occupez l\'un de ces rôles, nous pouvons adapter l\'évaluation à vos priorités.',
    ctaTitle: (name: string) => `Voyez comment les robots conviennent à votre site ${name}`,
    ctaBody: 'Planifiez une évaluation de site. Nous évaluerons votre installation et recommanderons un plan de déploiement adapté à votre classification de danger et vos exigences d\'inspection.',
    ctaButton: 'Demander une évaluation de site',
    seeCaseStudies: 'Voir les études de cas',
  },
};

export default function IndustryDetailPage() {
  const locale = useLocale();
  const t = copy[locale];
  const { slug } = useParams<{ slug: string }>();
  const industry = getLocalizedIndustry(slug || '', locale);

  if (!industry) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">{t.notFound}</h1>
        <Link to="/industries" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> {t.backToIndustries}
        </Link>
      </div>
    );
  }

  const bestProducts = industry.bestProducts
    .map((s) => getLocalizedProduct(s, locale))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={industry.tagline}
        image={industry.image}
      />

      {/* Challenge */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-3">
                <AlertCircle size={24} className="text-gold-500" />
                <h2 className="font-display text-2xl font-bold text-ink-900">{t.challenge}</h2>
              </div>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">{industry.challenge}</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} className="text-teal-600" />
                <h2 className="font-display text-2xl font-bold text-ink-900">{t.solution}</h2>
              </div>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">{industry.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t.keyBenefits}</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {industry.keyBenefits.map((b, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-ink-100">
                  <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5 text-teal-600" />
                  <p className="text-ink-600">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.recommendedFor} {industry.shortName}
            </h2>
            <p className="mt-3 text-lg text-ink-500">
              {t.recommendedBody(industry.name)}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bestProducts.map((p, i) => (
              <Reveal key={p!.slug} delay={(i % 3) * 100}>
                <ProductCard product={p!} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buying committee */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3">
              <Users size={24} className="text-teal-600" />
              <h2 className="font-display text-2xl font-bold text-ink-900">{t.whoEvaluates}</h2>
            </div>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              {t.whoEvaluatesBody}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industry.buyingCommittee.map((role, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 text-center border border-ink-100">
                  <p className="font-display font-semibold text-ink-900">{role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.ctaTitle(industry.shortName)}
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              {t.ctaBody}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                {t.ctaButton}
                <ArrowRight size={16} />
              </Link>
              <Link to="/case-studies" className="btn-secondary">
                {t.seeCaseStudies}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
