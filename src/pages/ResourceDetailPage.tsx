import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getResource, resources } from '@/data/resources';
import { getProduct } from '@/data/products';

export default function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const resource = getResource(slug || '');

  if (!resource) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-900">Article not found</h1>
        <Link to="/resources" className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold">
          <ArrowLeft size={16} /> Back to Resources
        </Link>
      </div>
    );
  }

  const relatedProduct = resource.relatedProduct ? getProduct(resource.relatedProduct) : undefined;
  const moreResources = resources.filter((r) => r.slug !== resource.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={resource.category} title={resource.title} image="https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg?auto=compress&cs=tinysrgb&w=1920">
        <div className="flex items-center gap-6 text-sm text-ink-300">
          <span className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="flex items-center gap-1.5"><Clock size={16} /> {resource.readTime} read</span>
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
                  <ArrowLeft size={16} /> Back to Resources
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {relatedProduct && (
                <Reveal delay={200}>
                  <Link to={`/products/${relatedProduct.slug}`} className="card group block p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">Related Product</p>
                    <h3 className="mt-2 font-display text-base font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">{relatedProduct.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )}

              {resource.relatedCertification && (
                <Reveal delay={300}>
                  <Link to="/certification" className="card group block p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">Certification</p>
                    <h3 className="mt-2 font-display text-base font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                      Certification & Compliance
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">Full certification status, ratings explained, and verification guidance.</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      View <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )}

              <Reveal delay={400}>
                <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-6">
                  <h3 className="font-display text-lg font-bold text-white">Questions about deployment?</h3>
                  <p className="mt-2 text-sm text-teal-50">Our team helps you evaluate the right robot for your site.</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-all">
                    Contact Us <ArrowRight size={14} />
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
          <h2 className="font-display text-xl font-bold text-ink-900 mb-6">More Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {moreResources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link to={`/resources/${r.slug}`} className="card group block p-6">
                  <span className="tag-software">{r.category}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{r.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
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
