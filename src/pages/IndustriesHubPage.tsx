import { ArrowRight } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getLocalizedIndustries } from '@/data/industries';

const copy = {
  en: {
    eyebrow: 'Industries',
    title: 'Deployed Across the Most Demanding Industrial Environments',
    subtitle: 'From oil refineries to offshore platforms, power plants to mines, and fire scenes — our robots inspect the places where human inspection is most dangerous and most needed.',
    explore: 'Explore',
  },
  fr: {
    eyebrow: 'Secteurs',
    title: 'Déployés dans les environnements industriels les plus exigeants',
    subtitle: 'Des raffineries de pétrole aux plateformes offshore, des centrales électriques aux mines et aux lieux d\'incendie — nos robots inspectent les endroits où l\'inspection humaine est la plus dangereuse et la plus nécessaire.',
    explore: 'Explorer',
  },
  es: {
    eyebrow: 'Industrias',
    title: 'Implementados en los entornos industriales más exigentes',
    subtitle: 'Desde refinerías de petróleo hasta plataformas marinas, centrales eléctricas, minas y escenas de incendio — nuestros robots inspeccionan los lugares donde la inspección humana es más peligrosa y más necesaria.',
    explore: 'Explorar',
  },
  pt: {
    eyebrow: 'Setores',
    title: 'Implantados nos ambientes industriais mais exigentes',
    subtitle: 'De refinarias de petróleo a plataformas offshore, usinas de energia a minas e cenas de incêndio — nossos robôs inspecionam os locais onde a inspeção humana é mais perigosa e mais necessária.',
    explore: 'Explorar',
  },
};

export default function IndustriesHubPage() {
  const locale = useLocale();
  const t = copy[locale];
  const industries = getLocalizedIndustries(locale);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 100}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group block rounded-3xl overflow-hidden shadow-lg bg-white transition-all hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-900/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <h2 className="font-display text-xl font-bold text-white lg:text-2xl">{ind.name}</h2>
                      <p className="mt-1 text-sm text-ink-200">{ind.tagline}</p>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <p className="text-sm text-ink-500">{ind.description.slice(0, 120)}...</p>
                    <span className="flex-shrink-0 ml-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all">
                      {t.explore} <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
