import { ArrowRight, MapPin, Globe } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getLocalizedCaseStudies } from '@/data/caseStudies';

const copy = {
  en: {
    eyebrow: 'Case Studies',
    title: 'Real Deployments, Measurable Results',
    subtitle: 'See how hazardous-location inspection robots are deployed at oil and gas operations worldwide — the challenges they address, the solutions deployed, and the results achieved.',
    readFull: 'Read the full case study',
    ctaTitle: 'Want to see results at your site?',
    ctaBody: 'Schedule a site assessment and we will build a deployment plan with quantified expected outcomes for your facility.',
    ctaButton: 'Request a Site Assessment',
  },
  fr: {
    eyebrow: 'Études de cas',
    title: 'Déploiements réels, résultats mesurables',
    subtitle: 'Découvrez comment les robots d\'inspection en emplacement dangereux sont déployés dans les opérations pétrolières et gazières à travers le monde — les défis qu\'ils résolvent, les solutions déployées et les résultats obtenus.',
    readFull: 'Lire l\'étude de cas complète',
    ctaTitle: 'Vous voulez voir des résultats sur votre site?',
    ctaBody: 'Planifiez une évaluation de site et nous bâtirons un plan de déploiement avec des résultats attendus quantifiés pour votre installation.',
    ctaButton: 'Demander une évaluation de site',
  },
};

export default function CaseStudiesHubPage() {
  const locale = useLocale();
  const t = copy[locale];
  const caseStudies = getLocalizedCaseStudies(locale);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/6767963/pexels-photo-6767963.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <div className="grid gap-0 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg bg-white">
                  <div className="relative aspect-[16/10] lg:aspect-auto min-h-[300px] order-1 lg:order-1">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="tag bg-white/90 text-ink-700">{cs.phase}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center order-2">
                    <div className="flex items-center gap-4 text-sm text-ink-400">
                      <span className="flex items-center gap-1.5"><MapPin size={15} /> {cs.location}</span>
                      <span className="flex items-center gap-1.5"><Globe size={15} /> {cs.region}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold text-ink-900 lg:text-2xl">{cs.title}</h2>
                    <p className="mt-3 text-ink-500 leading-relaxed">{cs.description}</p>

                    {cs.results && cs.results.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {cs.results.slice(0, 4).map((r, j) => (
                          <div key={j} className="rounded-xl bg-ink-50 p-3">
                            <div className="font-display text-lg font-bold text-teal-600">{r.value}</div>
                            <div className="text-xs text-ink-400 mt-0.5">{r.metric}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      {t.readFull}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              {t.ctaBody}
            </p>
            <Link to="/contact" className="mt-6 btn-primary">
              {t.ctaButton}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
