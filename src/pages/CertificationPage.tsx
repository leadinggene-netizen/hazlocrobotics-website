import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight,
  Award,
  AlertTriangle,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const certs = [
  {
    name: 'IECEx',
    status: 'Certified',
    desc: 'The IEC System for Certification to Standards Relating to Equipment for Use in Explosive Atmospheres. Globally recognized conformity assessment system covering design, manufacturing, and personnel competence.',
    color: 'bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
  },
  {
    name: 'ATEX',
    status: 'Certified',
    desc: 'European Union directive for equipment intended for use in potentially explosive atmospheres. Required for deployment in EU hazardous locations and widely accepted internationally.',
    color: 'bg-teal-50 text-teal-700',
    iconColor: 'text-teal-600',
  },
  {
    name: 'UL 6260',
    status: 'On Roadmap',
    desc: 'The first UL standard purpose-built for robots in hazardous locations. Currently under development — Hazloc Robotics is on the roadmap to achieve certification as the standard matures.',
    color: 'bg-gold-50 text-gold-700',
    iconColor: 'text-gold-500',
  },
  {
    name: 'CSA',
    status: 'In Progress',
    desc: 'Canadian Standards Association certification for hazardous-location equipment. Required for deployment in Canadian classified locations. Certification in active progress.',
    color: 'bg-gold-50 text-gold-700',
    iconColor: 'text-gold-500',
  },
];

const stages = [
  {
    stage: 'Stage 1',
    title: 'Explosion Protection Design',
    desc: 'Robot chassis, electrical systems, and sensor enclosures designed to IECEx/ATEX explosion protection principles — flameproof enclosures, intrinsic safety, and pressurization as appropriate.',
  },
  {
    stage: 'Stage 2',
    title: 'Type Testing & Assessment',
    desc: 'Full type testing at accredited laboratories: flameproof enclosure tests, temperature classification, impact resistance, and ingress protection. Every design variant is individually tested.',
  },
  {
    stage: 'Stage 3',
    title: 'Quality System Audit',
    desc: 'Manufacturing quality system audited and certified to ensure every unit produced meets the certified design. Includes traceability, component control, and production testing requirements.',
  },
  {
    stage: 'Stage 4',
    title: 'Ongoing Surveillance',
    desc: 'Annual surveillance audits maintain certification validity. Any design changes are re-assessed before production, ensuring certification stays current with the deployed product.',
  },
];

export default function CertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification & Compliance"
        title="Built to the Highest Hazardous-Location Standards"
        subtitle="Every explosion-proof robot is IECEx and ATEX certified, with a transparent roadmap to UL 6260 and CSA. We publish our full certification status — not just marketing badges."
        image="https://images.pexels.com/photos/9889066/pexels-photo-9889066.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Cert badges */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2">
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 100}>
                <div className="card p-8 h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.color}`}>
                        <ShieldCheck size={24} className={c.iconColor} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{c.name}</h3>
                    </div>
                    <span className={`tag ${c.color}`}>{c.status}</span>
                  </div>
                  <p className="mt-4 text-ink-600 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What the ratings mean */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Understanding Explosion Protection Ratings
            </h2>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              Every certification includes a gas group and temperature class. Here is what they mean.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="bg-white rounded-2xl border border-ink-100 p-8">
                <h3 className="font-display text-lg font-bold text-ink-900">Gas Groups</h3>
                <p className="mt-2 text-sm text-ink-500">
                  Classifies the types of explosive atmospheres the equipment is safe for.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    { group: 'IIC', desc: 'Highest group — includes hydrogen and acetylene', products: 'L4-S Wheeled Robot' },
                    { group: 'IIB', desc: 'Includes ethylene, propane — covers most petrochemical gases', products: 'Quadruped, Rail, Tracked, Firefighting' },
                    { group: 'IIA', desc: 'Includes propane, butane — standard industrial gases', products: 'All Ex-certified products' },
                  ].map((g) => (
                    <div key={g.group} className="flex items-start gap-4">
                      <span className="tag-explosion flex-shrink-0 mt-0.5">{g.group}</span>
                      <div>
                        <p className="text-sm text-ink-700">{g.desc}</p>
                        <p className="text-xs text-ink-400 mt-1">Available in: {g.products}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white rounded-2xl border border-ink-100 p-8">
                <h3 className="font-display text-lg font-bold text-ink-900">Temperature Class</h3>
                <p className="mt-2 text-sm text-ink-500">
                  Maximum surface temperature the equipment can reach — must be below the auto-ignition temperature of the gas present.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { cls: 'T6', temp: '85°C', desc: 'Lowest surface temp — suitable for all gas groups' },
                    { cls: 'T4', temp: '135°C', desc: 'Suitable for most common industrial gases' },
                    { cls: 'T3', temp: '200°C', desc: 'Standard for many petrochemical environments' },
                  ].map((t) => (
                    <div key={t.cls} className="flex items-center justify-between rounded-lg bg-ink-50 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="tag-electric">{t.cls}</span>
                        <span className="text-sm text-ink-600">{t.desc}</span>
                      </div>
                      <span className="text-sm font-mono text-ink-400">{t.temp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certification process */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              How a Robot Gets Certified
            </h2>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              Certification is not a one-time test. It is a multi-stage process that covers design, testing, manufacturing quality, and ongoing surveillance.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {stages.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white font-display font-bold text-sm">
                      {i + 1}
                    </div>
                    {i < stages.length - 1 && <div className="w-px h-16 bg-ink-200 mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">{s.stage}</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-ink-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer guidance */}
      <section className="bg-ink-950 py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-gold-400" />
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Important for Buyers</p>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              How to verify a supplier's certification claims
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed">
              Any supplier can put a certification badge on a website. Here is how to verify the claims are real.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Ask for the certificate', desc: 'A real IECEx or ATEX certificate has a certificate number, issuing body, and is verifiable on the issuing body\'s website. Ask for the document, not just the badge.' },
              { title: 'Check the gas group and temperature class', desc: 'Make sure the certification covers the gas group and temperature class for your site\'s hazard classification. A generic "ATEX certified" claim is not enough.' },
              { title: 'Verify the manufacturing quality system', desc: 'Certification includes a quality system audit. Ask for the quality assessment certificate and the surveillance audit schedule.' },
              { title: 'Check for ongoing validity', desc: 'Certification requires annual surveillance. Ask when the last surveillance audit was completed and when the next is scheduled.' },
            ].map((item, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5 text-teal-400" />
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-ink-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">Questions about certification for your site?</h3>
                <p className="mt-2 text-teal-50">Our compliance team works with your engineering and HSE teams to support site-specific certification mapping.</p>
              </div>
              <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-all">
                Contact Our Compliance Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
