import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { products, type ProductCategory } from '@/data/products';

type Filter = 'all' | ProductCategory;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Products' },
  { key: 'explosion-proof', label: 'Explosion-Proof' },
  { key: 'electric', label: 'Electric' },
  { key: 'software', label: 'Software' },
];

export default function ProductsHubPage() {
  const [active, setActive] = useState<Filter>('all');

  const filtered =
    active === 'all'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Product Line"
        title="Inspection Robots & Fleet Software"
        subtitle="Eight robots engineered for hazardous-location inspection — from explosion-proof quadrupeds and wheeled robots to rail-mounted systems and the software that unifies your fleet."
        image="https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
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
              Not sure which robot fits your site?
            </h2>
            <p className="mt-3 text-lg text-ink-500">
              Answer a few questions about your industry, hazard classification, and terrain, and we'll point you to the robots most likely to fit — a starting point for a specialist to help scope your deployment.
            </p>
            <Link to="/build" className="mt-6 btn-primary">
              Build Your Robot
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
