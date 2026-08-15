import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Users, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { getIndustry } from '@/data/industries';
import { getProduct } from '@/data/products';

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustry(slug || '');

  if (!industry) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">Industry not found</h1>
        <Link to="/industries" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> Back to Industries
        </Link>
      </div>
    );
  }

  const bestProducts = industry.bestProducts.map(getProduct).filter(Boolean);

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
                <h2 className="font-display text-2xl font-bold text-ink-900">The Challenge</h2>
              </div>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">{industry.challenge}</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} className="text-teal-600" />
                <h2 className="font-display text-2xl font-bold text-ink-900">The Solution</h2>
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
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Key Benefits</h2>
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
              Recommended for {industry.shortName}
            </h2>
            <p className="mt-3 text-lg text-ink-500">
              The robots best suited for {industry.name.toLowerCase()} environments, based on terrain, hazard classification, and inspection requirements.
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
              <h2 className="font-display text-2xl font-bold text-ink-900">Who Typically Evaluates This</h2>
            </div>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              Robot inspection deployments involve multiple stakeholders. If you are in one of these roles, we can tailor the evaluation to your priorities.
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
              See how robots fit your {industry.shortName} site
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Schedule a site assessment. We will evaluate your facility and recommend a deployment plan tailored to your hazard classification and inspection requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Site Assessment
                <ArrowRight size={16} />
              </Link>
              <Link to="/case-studies" className="btn-secondary">
                See Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
