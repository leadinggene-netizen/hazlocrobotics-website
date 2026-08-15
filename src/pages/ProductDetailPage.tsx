import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Activity } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { getProduct, products } from '@/data/products';
import { caseStudies } from '@/data/caseStudies';
import { resources } from '@/data/resources';

const categoryLabel = {
  'explosion-proof': 'Explosion-Proof Robot',
  electric: 'Electric Robot',
  software: 'Software Platform',
};

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug || '');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">Product not found</h1>
        <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);
  const caseStudy = product.relatedCaseStudy
    ? caseStudies.find((c) => c.slug === product.relatedCaseStudy)
    : undefined;
  const resource = product.relatedResource
    ? resources.find((r) => r.slug === product.relatedResource)
    : undefined;

  return (
    <>
      <PageHero
        eyebrow={categoryLabel[product.category]}
        title={product.name}
        subtitle={product.tagline}
        image={product.heroImage}
      >
        <div className="flex flex-wrap gap-2">
          {product.certifications.map((c) => (
            <span key={c} className="tag-explosion">{c}</span>
          ))}
        </div>
      </PageHero>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Overview</h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">{product.description}</p>

              <h3 className="mt-8 font-display text-lg font-bold text-ink-900">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5 text-teal-600" />
                    <span className="text-ink-600">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Request Online Demo
                  <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="btn-secondary">
                  <ArrowLeft size={16} />
                  All Products
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Technical Specifications</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <dl className="divide-y divide-ink-100">
                {product.specs.map((spec, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-1 px-6 py-4">
                    <dt className="text-sm font-semibold text-ink-900">{spec.label}</dt>
                    <dd className="sm:col-span-2 text-sm text-ink-600">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Typical Use Cases</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {product.useCases.map((uc, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Activity size={20} />
                  </div>
                  <p className="mt-4 text-ink-600 leading-relaxed">{uc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related case study */}
      {caseStudy && (
        <section className="bg-ink-50 py-16 lg:py-24">
          <div className="container-x">
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-2">
                <div className="relative min-h-[250px]">
                  <img src={caseStudy.image} alt={caseStudy.title} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">Related Case Study</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink-900">{caseStudy.title}</h3>
                  <p className="mt-3 text-ink-500">{caseStudy.description}</p>
                  <Link to={`/case-studies/${caseStudy.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                    Read Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related resources */}
      {resource && (
        <section className="py-16 lg:py-24">
          <div className="container-x">
            <Reveal>
              <Link to={`/resources/${resource.slug}`} className="card group block p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Related Resource</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-ink-500">{resource.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
                  Read Article <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-ink-50 py-16 lg:py-24">
          <div className="container-x">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-8">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
