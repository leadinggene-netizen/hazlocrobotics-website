import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { resources } from '@/data/resources';

const categoryColors: Record<string, string> = {
  'Explainer': 'tag-electric',
  'Guide': 'tag-software',
  'Buyer Education': 'tag-explosion',
  'Gated': 'tag bg-gold-100 text-gold-700',
};

export default function ResourcesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides, Explainers & Buyer Education"
        subtitle="Practical information for HSE, operations, and procurement teams evaluating hazardous-location inspection robots — from certification guides to ROI frameworks."
        image="https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 100}>
                <Link to={`/resources/${r.slug}`} className="card group block h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className={categoryColors[r.category] || 'tag-software'}>{r.category}</span>
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
                      Read <ArrowRight size={14} />
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
              Stay informed on hazardous-location robotics
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Get notified when we publish new guides, certification updates, and industry insights.
            </p>
            <Link to="/contact" className="mt-6 btn-primary">
              Subscribe to Updates
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
