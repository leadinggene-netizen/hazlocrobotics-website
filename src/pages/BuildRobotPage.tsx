import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { products, getProduct, type Product } from '@/data/products';
import { industries } from '@/data/industries';
import { supabase } from '@/lib/supabase';

const industryOptions = [
  ...industries.map((i) => ({ value: i.slug, label: i.name })),
  { value: 'other', label: 'Other / Not sure yet' },
];

const hazardOptions = [
  { value: 'zone1', label: 'Zone 1 / Class I Div 1', desc: 'Explosive gas or dust present continuously or frequently' },
  { value: 'zone2', label: 'Zone 2 / Class I Div 2', desc: 'Explosive atmosphere possible but not normally present' },
  { value: 'non-hazardous', label: 'Non-hazardous / general industrial', desc: 'No explosive atmosphere classification required' },
  { value: 'not-sure', label: 'Not sure yet', desc: 'A specialist can help determine your area classification' },
];

const terrainOptions = [
  { value: 'stairs', label: 'Stairs, mezzanines, multi-level access', matchSlug: 'quadruped' },
  { value: 'narrow', label: 'Narrow corridors, equipment gaps, tight clearances', matchSlug: 'l4s' },
  { value: 'fixed-path', label: 'Long fixed paths — pipe racks, conveyors, tunnels', matchSlug: 'rail' },
  { value: 'outdoor', label: 'Rough outdoor terrain — mud, gravel, debris', matchSlug: 'tracked' },
  { value: 'fire', label: 'Active fire or hazmat scene response', matchSlug: 'firefighting' },
  { value: 'flat', label: 'General flat facility floor', matchSlug: 'electric' },
  { value: 'software-only', label: 'I already have robots — just need fleet software', matchSlug: 'asset-tracking-center-software' },
];

const functionOptions = [
  { value: 'thermal', label: 'Thermal imaging' },
  { value: 'gas', label: 'Gas detection' },
  { value: 'visual', label: 'HD visual / video inspection' },
  { value: 'acoustic', label: 'Acoustic monitoring' },
  { value: 'software', label: 'Fleet management software & dashboards' },
];

function getRecommendations(industrySlug: string, hazard: string, terrain: string, fns: string[]) {
  const industry = industries.find((i) => i.slug === industrySlug);
  const terrainOpt = terrainOptions.find((t) => t.value === terrain);

  const scored = products.map((p) => {
    let score = 0;
    if (industry?.bestProducts.includes(p.slug)) score += 2;
    if (hazard === 'zone1' && p.category === 'explosion-proof') score += 2;
    if (hazard === 'zone2' && p.category === 'explosion-proof') score += 1;
    if (hazard === 'non-hazardous' && p.category === 'electric') score += 2;
    if (terrainOpt && p.slug.includes(terrainOpt.matchSlug)) score += 3;
    if (fns.includes('software') && p.category === 'software') score += 2;
    return { product: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const ranked = scored.filter((s) => s.score > 0).map((s) => s.product);
  const primary: Product[] = ranked.slice(0, 2);
  if (primary.length === 0) primary.push(products[0]);

  const addSoftware =
    terrain !== 'software-only' &&
    !primary.some((p) => p.category === 'software') &&
    (fns.includes('software') || primary.length < 2);
  const recommended = addSoftware
    ? [...primary, getProduct('asset-tracking-center-software')!].filter(
        (p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i
      )
    : primary;

  return recommended.slice(0, 3);
}

const TOTAL_STEPS = 5;

export default function BuildRobotPage() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [hazard, setHazard] = useState('');
  const [terrain, setTerrain] = useState('');
  const [fns, setFns] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const recommendations = useMemo(
    () => getRecommendations(industry, hazard, terrain, fns),
    [industry, hazard, terrain, fns]
  );

  function toggleFn(value: string) {
    setFns((prev) => (prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const company = (formData.get('company') as string)?.trim() || null;

    if (!name || !email) {
      setStatus('error');
      setErrorMsg('Please fill in your name and email.');
      return;
    }

    const { error } = await supabase.from('configurator_submissions').insert({
      name,
      email,
      company,
      industry: industryOptions.find((i) => i.value === industry)?.label ?? null,
      hazard_classification: hazardOptions.find((h) => h.value === hazard)?.label ?? null,
      terrain: terrainOptions.find((t) => t.value === terrain)?.label ?? null,
      functions_needed: fns.map((f) => functionOptions.find((o) => o.value === f)?.label).join(', ') || null,
      recommended_products: recommendations.map((p) => p.name).join(', '),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting this. Please try again or email us directly.');
      return;
    }

    setStatus('success');
  }

  const canAdvance =
    (step === 0 && industry !== '') ||
    (step === 1 && hazard !== '') ||
    (step === 2 && terrain !== '') ||
    step === 3;

  return (
    <>
      <PageHero
        eyebrow="Robot Configurator"
        title="Build Your Robot"
        subtitle="Answer a few questions about your site and we'll point you to the robot models most likely to fit — a starting point for a specialist to help scope your deployment, not a finished order."
        image="https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {step < 4 && (
              <>
                {/* Progress */}
                <div className="mb-10 flex items-center gap-2">
                  {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i <= step ? 'bg-teal-600' : 'bg-ink-100'
                      }`}
                    />
                  ))}
                </div>

                <Reveal key={step}>
                  {step === 0 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink-900">What industry are you in?</h2>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {industryOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setIndustry(opt.value)}
                            className={`rounded-xl border p-4 text-left text-sm font-semibold transition-all ${
                              industry === opt.value
                                ? 'border-teal-600 bg-teal-50 text-teal-800'
                                : 'border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink-900">
                        What's the area classification?
                      </h2>
                      <div className="mt-6 grid gap-3">
                        {hazardOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setHazard(opt.value)}
                            className={`rounded-xl border p-4 text-left transition-all ${
                              hazard === opt.value
                                ? 'border-teal-600 bg-teal-50'
                                : 'border-ink-200 hover:border-ink-300 hover:bg-ink-50'
                            }`}
                          >
                            <div className={`text-sm font-semibold ${hazard === opt.value ? 'text-teal-800' : 'text-ink-700'}`}>
                              {opt.label}
                            </div>
                            <div className="mt-1 text-xs text-ink-500">{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink-900">
                        What does the site look like?
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">Pick the closest match — this drives mobility type.</p>
                      <div className="mt-6 grid gap-3">
                        {terrainOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setTerrain(opt.value)}
                            className={`rounded-xl border p-4 text-left text-sm font-semibold transition-all ${
                              terrain === opt.value
                                ? 'border-teal-600 bg-teal-50 text-teal-800'
                                : 'border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink-900">
                        What functions matter most?
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">Select as many as apply.</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {functionOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleFn(opt.value)}
                            className={`flex items-center gap-3 rounded-xl border p-4 text-left text-sm font-semibold transition-all ${
                              fns.includes(opt.value)
                                ? 'border-teal-600 bg-teal-50 text-teal-800'
                                : 'border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50'
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 ${
                                fns.includes(opt.value) ? 'border-teal-600 bg-teal-600' : 'border-ink-300'
                              }`}
                            >
                              {fns.includes(opt.value) && <CheckCircle2 size={14} className="text-white" />}
                            </span>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </Reveal>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="btn-ghost disabled:opacity-0"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(4, s + 1))}
                    disabled={!canAdvance}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    {step === 3 ? 'See recommendation' : 'Next'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {step === 4 && (
              <Reveal>
                <div className="flex items-center gap-2 text-teal-600">
                  <Sparkles size={20} />
                  <p className="text-sm font-semibold uppercase tracking-widest">Suggested starting point</p>
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  Based on your answers, here's where we'd start
                </h2>
                <p className="mt-3 text-ink-500">
                  This is a starting point, not a finished spec — a specialist will confirm the right fit and
                  discuss custom configuration once we hear from you below.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendations.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>

                <div className="mt-12 rounded-2xl border border-ink-100 bg-white p-8 shadow-sm">
                  {status === 'success' ? (
                    <div className="text-center">
                      <CheckCircle2 size={48} className="mx-auto text-teal-600" />
                      <h3 className="mt-4 font-display text-xl font-bold text-ink-900">Thanks — we've got it</h3>
                      <p className="mt-2 text-ink-600">
                        A specialist will review your answers and reach out within one business day to talk
                        through fit, customization, and next steps.
                      </p>
                      <Link to="/" className="mt-6 btn-secondary inline-flex">
                        Back to Home
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        Send this to a specialist
                      </h3>
                      <p className="mt-1 text-sm text-ink-500">
                        We'll follow up to confirm fit and talk through what a custom deployment would involve.
                      </p>

                      {status === 'error' && (
                        <div className="mt-5 flex items-start gap-3 rounded-lg bg-danger-50 border border-danger-500/20 p-4 text-sm text-danger-700">
                          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cfg-name" className="block text-sm font-semibold text-ink-700">Full Name *</label>
                          <input
                            id="cfg-name"
                            name="name"
                            type="text"
                            required
                            disabled={status === 'submitting'}
                            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                            placeholder="Jane Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="cfg-email" className="block text-sm font-semibold text-ink-700">Email *</label>
                          <input
                            id="cfg-email"
                            name="email"
                            type="email"
                            required
                            disabled={status === 'submitting'}
                            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                            placeholder="jane@company.com"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="cfg-company" className="block text-sm font-semibold text-ink-700">Company</label>
                          <input
                            id="cfg-company"
                            name="company"
                            type="text"
                            disabled={status === 'submitting'}
                            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                            placeholder="Operator, EPC or distributor"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="mt-6 btn-primary w-full disabled:opacity-60"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send to a Specialist
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {status !== 'success' && (
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="mt-6 btn-ghost"
                  >
                    <ArrowLeft size={16} />
                    Back to questions
                  </button>
                )}
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
