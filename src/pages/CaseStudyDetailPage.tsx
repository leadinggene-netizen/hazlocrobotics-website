import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Globe, Quote, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getCaseStudy, caseStudies } from '@/data/caseStudies';
import { getProduct } from '@/data/products';

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudy(slug || '');

  if (!cs) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">Case study not found</h1>
        <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>
      </div>
    );
  }

  const productsUsed = cs.productsUsed.map(getProduct).filter(Boolean);
  const moreCaseStudies = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 1);

  return (
    <>
      <PageHero
        eyebrow={`Case Study · ${cs.phase}`}
        title={cs.title}
        image={cs.image}
      >
        <div className="flex items-center gap-6 text-sm text-ink-300">
          <span className="flex items-center gap-1.5"><MapPin size={16} /> {cs.location}</span>
          <span className="flex items-center gap-1.5"><Globe size={16} /> {cs.region}</span>
        </div>
      </PageHero>

      {/* Results highlights */}
      {cs.results && cs.results.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-x">
            <Reveal>
              <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
                {cs.results.map((r, i) => (
                  <div key={i} className="rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-6 text-center">
                    <div className="font-display text-2xl font-bold text-teal-700 lg:text-3xl">{r.value}</div>
                    <div className="mt-2 text-sm text-ink-500">{r.metric}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="pb-16 lg:pb-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink-900">The Challenge</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">{cs.challenge}</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-2xl font-bold text-ink-900">The Solution</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">{cs.solution}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      {cs.quote && (
        <section className="bg-ink-950 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={cs.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="container-x relative z-10 max-w-3xl">
            <Reveal>
              <Quote size={40} className="text-gold-400" />
              <blockquote className="mt-6 font-display text-xl font-medium text-white leading-relaxed lg:text-2xl">
                "{cs.quote.text}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-gold-400">{cs.quote.author}</p>
                <p className="text-sm text-ink-400">{cs.quote.role}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Products used */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Products Deployed</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productsUsed.map((p, i) => (
              <Reveal key={p!.slug} delay={i * 100}>
                <Link to={`/products/${p!.slug}`} className="card group block p-6">
                  <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                    {p!.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{p!.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* More case studies */}
      {moreCaseStudies.length > 0 && (
        <section className="bg-ink-50 py-16">
          <div className="container-x">
            <h2 className="font-display text-xl font-bold text-ink-900 mb-6">More Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {moreCaseStudies.map((c, i) => (
                <Reveal key={c.slug} delay={i * 100}>
                  <Link to={`/case-studies/${c.slug}`} className="card group block overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-5">
                        <h3 className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">{c.title}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
