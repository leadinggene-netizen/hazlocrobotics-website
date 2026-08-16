import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Bot,
  Cpu,
  Gauge,
  Zap,
  Flame,
  Factory,
  Train,
  Radar,
  TrendingDown,
  Eye,
  Clock,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { industries } from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';
import { resources } from '@/data/resources';
import heroBanner from '@/assets/banner.jpg';

export default function HomePage() {
  const featuredProducts = [
    products.find((p) => p.slug === 'explosion-proof-wheeled-robot-l4s')!,
    products.find((p) => p.slug === 'explosion-proof-quadruped-robot')!,
    products.find((p) => p.slug === 'firefighting-reconnaissance-robot')!,
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="The Hazloc Robotics fleet deployed across a petrochemical facility"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />
        </div>

        <div className="container-x relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-400 animate-fade-down">
              <ShieldCheck size={16} />
              IECEx & ATEX Certified · UL 6260 Roadmap
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
              Explosion-Proof Inspection Robots for the World's Most Hazardous Environments
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed animate-fade-up">
              Autonomous robots that patrol oil refineries, gas plants, power stations, and offshore platforms — detecting leaks, thermal anomalies, and structural issues before they become incidents. Deployed in 40+ countries.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up">
              <Link to="/contact" className="btn-primary text-base">
                Request Online Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink-950/60 backdrop-blur-md">
          <div className="container-x py-6">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { icon: Globe, value: '40+', label: 'Countries Deployed' },
                { icon: ShieldCheck, value: 'IIC T6', label: 'Highest Ex Rating' },
                { icon: Clock, value: '24/7', label: 'Autonomous Patrol' },
                { icon: Cpu, value: '14+', label: 'Robot Models' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon size={28} className="text-gold-400 flex-shrink-0" />
                  <div>
                    <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-ink-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-ink-100 bg-ink-50 py-6 overflow-hidden">
        <div className="container-x">
          <div className="flex items-center gap-8 text-sm font-medium text-ink-400">
            <span className="flex-shrink-0 uppercase tracking-widest text-xs">Trusted by leading operators in</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-600">
              <span>Oil & Gas</span><span>·</span>
              <span>Petrochemical</span><span>·</span>
              <span>Power Generation</span><span>·</span>
              <span>Offshore</span><span>·</span>
              <span>Mining</span><span>·</span>
              <span>Emergency Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Product Line</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  The Robot Fleet
                </h2>
                <p className="mt-3 text-lg text-ink-500 max-w-xl">
                  Fourteen robots — from explosion-proof quadrupeds to fleet management software — built for hazardous-location inspection.
                </p>
              </div>
              <Link to="/products" className="btn-secondary flex-shrink-0">
                View All Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-ink-950 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">The Problem</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Manual inspection is dangerous, infrequent, and expensive
            </h2>
            <p className="mt-4 text-lg text-ink-300 leading-relaxed">
              In hazardous locations, every human inspection carries risk. Shifts limit frequency. Human error limits consistency. And between inspections, leaks and thermal anomalies go undetected — sometimes until it is too late.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Flame,
                title: 'Explosion risk',
                desc: 'Every human entry into a Zone 1 area is a risk event. Robots reduce personnel exposure by up to 70%.',
              },
              {
                icon: Clock,
                title: 'Inspection gaps',
                desc: 'Manual patrol is limited by shifts. Robots provide 24/7 continuous coverage with no gaps.',
              },
              {
                icon: Eye,
                title: 'Undetected anomalies',
                desc: 'Between inspections, thermal and gas anomalies escalate. Robots detect them in real time.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-ink-300 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">The Hazloc Solution</h3>
                  <p className="mt-2 text-teal-50 max-w-2xl">
                    Certified explosion-proof robots with autonomous navigation, multi-sensor payloads, and AI-powered anomaly detection — unified by a single software platform.
                  </p>
                </div>
                <Link to="/certification" className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-all hover:bg-teal-50">
                  Explore the Technology
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certification highlight */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Certification & Compliance</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                Built to the highest hazardous-location standards
              </h2>
              <p className="mt-4 text-lg text-ink-500 leading-relaxed">
                Every explosion-proof robot is IECEx and ATEX certified, with a transparent roadmap to UL 6260 and CSA. We publish our full certification status — not just marketing badges.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { label: 'IECEx', desc: 'Global IEC conformity assessment for explosive atmospheres' },
                  { label: 'ATEX', desc: 'European directive certification for Zone 1 deployment' },
                  { label: 'UL 6260', desc: 'North American hazardous-location robot standard — on the roadmap' },
                  { label: 'CSA', desc: 'Canadian Standards Association certification — in progress' },
                ].map((cert) => (
                  <div key={cert.label} className="flex items-start gap-4">
                    <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5 text-teal-600" />
                    <div>
                      <span className="font-semibold text-ink-900">{cert.label}</span>
                      <span className="text-ink-500"> — {cert.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/certification" className="mt-8 btn-secondary">
                View Certification Details
                <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/10386893/pexels-photo-10386893.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Oil refinery at night"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="tag-explosion">Ex IIC T6 Gb</span>
                    <span className="tag-electric">IECEx</span>
                    <span className="tag-electric">ATEX</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Industries We Serve</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              Deployed across the most demanding industrial environments
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 80}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <h3 className="font-display text-base font-bold text-white">{ind.shortName}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-0 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative min-h-[300px] lg:min-h-[500px]">
                <img
                  src={caseStudies[0].image}
                  alt={caseStudies[0].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <div className="bg-ink-900 p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Case Study</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-white lg:text-3xl">
                  {caseStudies[0].title}
                </h2>
                <p className="mt-4 text-ink-300 leading-relaxed">
                  {caseStudies[0].description}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {(caseStudies[0].results ?? []).slice(0, 4).map((r, i) => (
                    <div key={i} className="rounded-xl bg-white/5 p-4">
                      <div className="font-display text-xl font-bold text-gold-400">{r.value}</div>
                      <div className="mt-1 text-xs text-ink-400">{r.metric}</div>
                    </div>
                  ))}
                </div>
                <Link to={`/case-studies/${caseStudies[0].slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                  Read the full case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured resources */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Resources</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  Guides & Insights
                </h2>
              </div>
              <Link to="/resources" className="btn-secondary flex-shrink-0">
                View All Resources
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link to={`/resources/${r.slug}`} className="card group block p-6 h-full">
                  <span className="tag-software">{r.category}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-teal-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{r.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                    <span>{r.readTime} read</span>
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

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/15970032/pexels-photo-15970032.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
        <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              See a robot inspect your facility
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              Schedule a live demonstration or a site assessment. Our team will help you identify the right platform and deployment plan for your hazardous-area inspection needs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Link to="/contact" className="btn-primary text-base">
                Request Online Demo
                <ArrowRight size={18} />
              </Link>
              <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                See Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Globe({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
