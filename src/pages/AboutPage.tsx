import { ArrowRight, Target, Eye, Users, Globe, Award, TrendingUp } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const copy = {
  en: {
    eyebrow: 'About Hazloc Robotics',
    title: 'Making Hazardous-Area Inspection Safer and More Effective',
    subtitle: 'We build explosion-proof inspection robots for the world\'s most demanding industrial environments — because the people who inspect those environments deserve to go home safely.',
    missionLabel: 'Our Mission',
    missionTitle: 'Replace risky human inspection with certified robotic patrol',
    missionBody1: 'Every year, industrial personnel are injured or killed inspecting hazardous areas that could have been monitored by robots. We exist to change that — by building robots that are certified for the environments where the risk is highest, and making them accessible to operators worldwide.',
    missionBody2: 'Hazlocrobotics LLC is the North & Latin America commercial partner for Qiteng Robotics\' explosion-proof inspection robot line, combining regional sales, compliance, and site-support expertise with Qiteng\'s robotics engineering and manufacturing capability. Our robots are deployed in 40+ countries across oil & gas, power generation, marine, mining, and emergency response.',
    stats: [
      { value: '40+', label: 'Countries Deployed' },
      { value: '14+', label: 'Robot Models' },
      { value: 'IIC T6', label: 'Highest Ex Rating' },
      { value: '24/7', label: 'Autonomous Patrol' },
    ],
    standForLabel: 'What We Stand For',
    valuesTitle: 'Our Values',
    values: [
      { icon: Award, title: 'Safety is non-negotiable', desc: 'Every product decision starts with safety. If a design cannot be certified for the environment it will operate in, it does not ship.' },
      { icon: TrendingUp, title: 'Transparency over marketing', desc: 'We publish our full certification status — including what is in progress, not just what is complete. No marketing badges without documentation.' },
      { icon: Users, title: 'Built with operators', desc: 'Our robots are designed alongside the HSE directors, plant managers, and inspection teams who use them. Operational relevance is the benchmark.' },
      { icon: Globe, title: 'Global deployment, local support', desc: 'Deployed in 40+ countries with on-the-ground support teams in the Middle East, Southeast Asia, and North America.' },
    ],
    presenceTitle: 'Global Presence',
    presenceBody: 'Hazlocrobotics LLC handles sales, compliance, and support for North and Latin America from Dover, Delaware, while Qiteng Robotics — our manufacturing partner — engineers and builds the robot line in Chongqing, China. Our on-the-ground support teams serve operators across the Middle East, Southeast Asia, and North America.',
    offices: [
      { city: 'Dover, Delaware', role: 'North & Latin America Office', desc: 'Business operations, sales, and compliance for North and Latin American markets.' },
      { city: 'Chongqing, China', role: 'Manufacturing Partner — Qiteng Robotics', desc: 'Robotics engineering, product development, and manufacturing quality control.' },
      { city: 'Basra, Iraq', role: 'Middle East Operations', desc: 'On-site deployment and support for oil & gas operators in the region.' },
    ],
    ctaTitle: 'Let\'s make your hazardous-area inspection safer',
    ctaBody: 'Schedule a demo or site assessment. Our team will help you identify the right robot and deployment plan.',
    ctaButton: 'Get in Touch',
  },
  fr: {
    eyebrow: 'À propos de Hazloc Robotics',
    title: 'Rendre l\'inspection en zone dangereuse plus sûre et plus efficace',
    subtitle: 'Nous concevons des robots d\'inspection antidéflagrants pour les environnements industriels les plus exigeants au monde — parce que les personnes qui inspectent ces environnements méritent de rentrer chez elles en sécurité.',
    missionLabel: 'Notre mission',
    missionTitle: 'Remplacer l\'inspection humaine risquée par une patrouille robotisée certifiée',
    missionBody1: 'Chaque année, du personnel industriel est blessé ou tué en inspectant des zones dangereuses qui auraient pu être surveillées par des robots. Nous existons pour changer cela — en concevant des robots certifiés pour les environnements où le risque est le plus élevé, et en les rendant accessibles aux opérateurs du monde entier.',
    missionBody2: 'Hazlocrobotics LLC est le partenaire commercial pour l\'Amérique du Nord et l\'Amérique latine de la gamme de robots d\'inspection antidéflagrants de Qiteng Robotics, combinant expertise régionale en vente, conformité et soutien de site avec l\'ingénierie robotique et la capacité de fabrication de Qiteng. Nos robots sont déployés dans plus de 40 pays dans les secteurs pétrolier et gazier, de la production d\'électricité, maritime, minier et de l\'intervention d\'urgence.',
    stats: [
      { value: '40+', label: 'Pays déployés' },
      { value: '14+', label: 'Modèles de robots' },
      { value: 'IIC T6', label: 'Certification Ex la plus élevée' },
      { value: '24/7', label: 'Patrouille autonome' },
    ],
    standForLabel: 'Ce que nous défendons',
    valuesTitle: 'Nos valeurs',
    values: [
      { icon: Award, title: 'La sécurité n\'est pas négociable', desc: 'Chaque décision de produit commence par la sécurité. Si une conception ne peut être certifiée pour l\'environnement dans lequel elle fonctionnera, elle n\'est pas commercialisée.' },
      { icon: TrendingUp, title: 'La transparence avant le marketing', desc: 'Nous publions notre statut de certification complet — y compris ce qui est en cours, pas seulement ce qui est terminé. Aucun badge marketing sans documentation.' },
      { icon: Users, title: 'Conçu avec les opérateurs', desc: 'Nos robots sont conçus aux côtés des directeurs HSE, gestionnaires d\'usine et équipes d\'inspection qui les utilisent. La pertinence opérationnelle est la référence.' },
      { icon: Globe, title: 'Déploiement mondial, soutien local', desc: 'Déployés dans plus de 40 pays avec des équipes de soutien sur le terrain au Moyen-Orient, en Asie du Sud-Est et en Amérique du Nord.' },
    ],
    presenceTitle: 'Présence mondiale',
    presenceBody: 'Hazlocrobotics LLC gère les ventes, la conformité et le soutien pour l\'Amérique du Nord et l\'Amérique latine depuis Dover, au Delaware, tandis que Qiteng Robotics — notre partenaire de fabrication — conçoit et construit la gamme de robots à Chongqing, en Chine. Nos équipes de soutien sur le terrain servent les opérateurs au Moyen-Orient, en Asie du Sud-Est et en Amérique du Nord.',
    offices: [
      { city: 'Dover, Delaware', role: 'Bureau Amérique du Nord et Amérique latine', desc: 'Opérations commerciales, ventes et conformité pour les marchés d\'Amérique du Nord et d\'Amérique latine.' },
      { city: 'Chongqing, Chine', role: 'Partenaire de fabrication — Qiteng Robotics', desc: 'Ingénierie robotique, développement de produits et contrôle de la qualité de fabrication.' },
      { city: 'Basra, Irak', role: 'Opérations Moyen-Orient', desc: 'Déploiement et soutien sur site pour les opérateurs pétroliers et gaziers de la région.' },
    ],
    ctaTitle: 'Rendons votre inspection en zone dangereuse plus sûre',
    ctaBody: 'Planifiez une démo ou une évaluation de site. Notre équipe vous aidera à identifier le bon robot et le plan de déploiement.',
    ctaButton: 'Nous joindre',
  },
};

export default function AboutPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/35082106/pexels-photo-35082106.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <Target size={24} className="text-teal-600" />
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.missionLabel}</p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                {t.missionTitle}
              </h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                {t.missionBody1}
              </p>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                {t.missionBody2}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {t.stats.map((s, i) => (
                  <div key={i} className="rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-6 text-center">
                    <div className="font-display text-3xl font-bold text-gold-400">{s.value}</div>
                    <div className="mt-1 text-sm text-ink-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3">
              <Eye size={24} className="text-teal-600" />
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.standForLabel}</p>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t.valuesTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.values.map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="card h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <v.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-ink-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t.presenceTitle}</h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              {t.presenceBody}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.offices.map((office, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-2 text-teal-600">
                    <Globe size={18} />
                    <span className="text-sm font-semibold">{office.role}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{office.city}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{office.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-16 lg:py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-300">
              {t.ctaBody}
            </p>
            <Link to="/contact" className="mt-8 btn-primary text-base">
              {t.ctaButton}
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
