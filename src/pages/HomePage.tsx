import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Flame,
  Eye,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { getLocalizedProducts } from '@/data/products';
import { getLocalizedIndustries } from '@/data/industries';
import { getLocalizedCaseStudies } from '@/data/caseStudies';
import { getLocalizedResources } from '@/data/resources';
import heroBanner from '@/assets/banner.jpg';

const copy = {
  en: {
    certBadge: 'IECEx & ATEX Certified · UL 6260 Roadmap',
    heroTitle: 'Explosion-Proof Inspection Robots for the World\'s Most Hazardous Environments',
    heroSubtitle:
      'Autonomous robots that patrol oil refineries, gas plants, power stations, and offshore platforms — detecting leaks, thermal anomalies, and structural issues before they become incidents. Deployed in 40+ countries.',
    demoCta: 'Request Online Demo',
    exploreProducts: 'Explore Products',
    statCountries: 'Countries Deployed',
    statRating: 'Highest Ex Rating',
    statPatrol: 'Autonomous Patrol',
    statModels: 'Robot Models',
    trustedBy: 'Trusted by leading operators in',
    sectors: ['Oil & Gas', 'Petrochemical', 'Power Generation', 'Offshore', 'Mining', 'Emergency Response'],
    productLine: 'Product Line',
    fleetTitle: 'The Robot Fleet',
    fleetSubtitle: 'Fifteen robots — from explosion-proof quadrupeds to fleet management software — built for hazardous-location inspection.',
    viewAllProducts: 'View All Products',
    problemLabel: 'The Problem',
    problemTitle: 'Manual inspection is dangerous, infrequent, and expensive',
    problemBody:
      'In hazardous locations, every human inspection carries risk. Shifts limit frequency. Human error limits consistency. And between inspections, leaks and thermal anomalies go undetected — sometimes until it is too late.',
    problems: [
      { title: 'Explosion risk', desc: 'Every human entry into a Zone 1 area is a risk event. Robots reduce personnel exposure by up to 70%.' },
      { title: 'Inspection gaps', desc: 'Manual patrol is limited by shifts. Robots provide 24/7 continuous coverage with no gaps.' },
      { title: 'Undetected anomalies', desc: 'Between inspections, thermal and gas anomalies escalate. Robots detect them in real time.' },
    ],
    solutionTitle: 'The Hazloc Solution',
    solutionBody:
      'Certified explosion-proof robots with autonomous navigation, multi-sensor payloads, and AI-powered anomaly detection — unified by a single software platform.',
    exploreTech: 'Explore the Technology',
    certLabel: 'Certification & Compliance',
    certTitle: 'Built to the highest hazardous-location standards',
    certBody:
      'Every explosion-proof robot is IECEx and ATEX certified, with a transparent roadmap to UL 6260 and CSA. We publish our full certification status — not just marketing badges.',
    certs: [
      { label: 'IECEx', desc: 'Global IEC conformity assessment for explosive atmospheres' },
      { label: 'ATEX', desc: 'European directive certification for Zone 1 deployment' },
      { label: 'UL 6260', desc: 'North American hazardous-location robot standard — on the roadmap' },
      { label: 'CSA', desc: 'Canadian Standards Association certification — in progress' },
    ],
    viewCertDetails: 'View Certification Details',
    industriesLabel: 'Industries We Serve',
    industriesTitle: 'Deployed across the most demanding industrial environments',
    caseStudyLabel: 'Case Study',
    readFullCase: 'Read the full case study',
    resourcesLabel: 'Resources',
    resourcesTitle: 'Guides & Insights',
    viewAllResources: 'View All Resources',
    readSuffix: 'read',
    readCta: 'Read',
    ctaTitle: 'See a robot inspect your facility',
    ctaBody:
      'Schedule a live demonstration or a site assessment. Our team will help you identify the right robot and deployment plan for your hazardous-area inspection needs.',
    seeCaseStudies: 'See Case Studies',
  },
  fr: {
    certBadge: 'Certifié IECEx et ATEX · Feuille de route UL 6260',
    heroTitle: 'Robots d\'inspection antidéflagrants pour les environnements les plus dangereux au monde',
    heroSubtitle:
      'Des robots autonomes qui patrouillent les raffineries de pétrole, usines de gaz, centrales électriques et plateformes offshore — détectant fuites, anomalies thermiques et problèmes structurels avant qu\'ils ne deviennent des incidents. Déployés dans plus de 40 pays.',
    demoCta: 'Demande de démo en ligne',
    exploreProducts: 'Explorer les produits',
    statCountries: 'Pays déployés',
    statRating: 'Certification Ex la plus élevée',
    statPatrol: 'Patrouille autonome',
    statModels: 'Modèles de robots',
    trustedBy: 'Approuvé par les principaux opérateurs en',
    sectors: ['Pétrole et gaz', 'Pétrochimie', 'Production d\'électricité', 'Extracôtier', 'Exploitation minière', 'Intervention d\'urgence'],
    productLine: 'Gamme de produits',
    fleetTitle: 'La flotte de robots',
    fleetSubtitle: 'Quinze robots — des quadrupèdes antidéflagrants au logiciel de gestion de flotte — conçus pour l\'inspection en emplacement dangereux.',
    viewAllProducts: 'Voir tous les produits',
    problemLabel: 'Le problème',
    problemTitle: 'L\'inspection manuelle est dangereuse, peu fréquente et coûteuse',
    problemBody:
      'En emplacement dangereux, chaque inspection humaine comporte un risque. Les quarts limitent la fréquence. L\'erreur humaine limite la constance. Et entre les inspections, fuites et anomalies thermiques passent inaperçues — parfois jusqu\'à ce qu\'il soit trop tard.',
    problems: [
      { title: 'Risque d\'explosion', desc: 'Chaque entrée humaine en zone 1 est un événement à risque. Les robots réduisent l\'exposition du personnel jusqu\'à 70%.' },
      { title: 'Écarts d\'inspection', desc: 'La patrouille manuelle est limitée par les quarts. Les robots offrent une couverture continue 24/7 sans interruption.' },
      { title: 'Anomalies non détectées', desc: 'Entre les inspections, les anomalies thermiques et de gaz s\'aggravent. Les robots les détectent en temps réel.' },
    ],
    solutionTitle: 'La solution Hazloc',
    solutionBody:
      'Des robots antidéflagrants certifiés avec navigation autonome, charges utiles multi-capteurs et détection d\'anomalies par IA — unifiés par une seule plateforme logicielle.',
    exploreTech: 'Explorer la technologie',
    certLabel: 'Certification et conformité',
    certTitle: 'Conçu selon les normes les plus élevées pour emplacements dangereux',
    certBody:
      'Chaque robot antidéflagrant est certifié IECEx et ATEX, avec une feuille de route transparente vers UL 6260 et CSA. Nous publions notre statut de certification complet — pas seulement des badges marketing.',
    certs: [
      { label: 'IECEx', desc: 'Évaluation mondiale de conformité de la CEI pour atmosphères explosives' },
      { label: 'ATEX', desc: 'Certification selon la directive européenne pour déploiement en Zone 1' },
      { label: 'UL 6260', desc: 'Norme nord-américaine pour robots en emplacement dangereux — sur la feuille de route' },
      { label: 'CSA', desc: 'Certification de l\'Association canadienne de normalisation — en cours' },
    ],
    viewCertDetails: 'Voir les détails de certification',
    industriesLabel: 'Secteurs que nous servons',
    industriesTitle: 'Déployés dans les environnements industriels les plus exigeants',
    caseStudyLabel: 'Étude de cas',
    readFullCase: 'Lire l\'étude de cas complète',
    resourcesLabel: 'Ressources',
    resourcesTitle: 'Guides et perspectives',
    viewAllResources: 'Voir toutes les ressources',
    readSuffix: 'de lecture',
    readCta: 'Lire',
    ctaTitle: 'Voyez un robot inspecter votre installation',
    ctaBody:
      'Planifiez une démonstration en direct ou une évaluation de site. Notre équipe vous aidera à identifier le bon robot et le plan de déploiement pour vos besoins d\'inspection en zone dangereuse.',
    seeCaseStudies: 'Voir les études de cas',
  },
  es: {
    certBadge: 'Certificado IECEx y ATEX · Hoja de ruta UL 6260',
    heroTitle: 'Robots de inspección antiexplosión para los entornos más peligrosos del mundo',
    heroSubtitle:
      'Robots autónomos que patrullan refinerías de petróleo, plantas de gas, centrales eléctricas y plataformas costa afuera — detectando fugas, anomalías térmicas y problemas estructurales antes de que se conviertan en incidentes. Desplegados en más de 40 países.',
    demoCta: 'Solicitar una demo en línea',
    exploreProducts: 'Explorar productos',
    statCountries: 'Países desplegados',
    statRating: 'Certificación Ex más alta',
    statPatrol: 'Patrullaje autónomo',
    statModels: 'Modelos de robots',
    trustedBy: 'Con la confianza de los principales operadores en',
    sectors: ['Petróleo y gas', 'Petroquímica', 'Generación de energía', 'Costa afuera', 'Minería', 'Respuesta a emergencias'],
    productLine: 'Línea de productos',
    fleetTitle: 'La flota de robots',
    fleetSubtitle: 'Quince robots — desde cuadrúpedos antiexplosión hasta software de gestión de flota — construidos para la inspección en áreas peligrosas.',
    viewAllProducts: 'Ver todos los productos',
    problemLabel: 'El problema',
    problemTitle: 'La inspección manual es peligrosa, poco frecuente y costosa',
    problemBody:
      'En áreas peligrosas, cada inspección humana conlleva un riesgo. Los turnos limitan la frecuencia. El error humano limita la consistencia. Y entre inspecciones, las fugas y anomalías térmicas pasan sin detectarse — a veces hasta que es demasiado tarde.',
    problems: [
      { title: 'Riesgo de explosión', desc: 'Cada entrada humana a un área de Zona 1 es un evento de riesgo. Los robots reducen la exposición del personal hasta en un 70%.' },
      { title: 'Brechas de inspección', desc: 'La patrulla manual está limitada por los turnos. Los robots brindan cobertura continua 24/7 sin brechas.' },
      { title: 'Anomalías no detectadas', desc: 'Entre inspecciones, las anomalías térmicas y de gas escalan. Los robots las detectan en tiempo real.' },
    ],
    solutionTitle: 'La solución Hazloc',
    solutionBody:
      'Robots antiexplosión certificados con navegación autónoma, cargas útiles multisensor y detección de anomalías con IA — unificados en una sola plataforma de software.',
    exploreTech: 'Explorar la tecnología',
    certLabel: 'Certificación y cumplimiento',
    certTitle: 'Construidos según las normas más exigentes para áreas peligrosas',
    certBody:
      'Cada robot antiexplosión está certificado IECEx y ATEX, con una hoja de ruta transparente hacia UL 6260 y CSA. Publicamos nuestro estado de certificación completo — no solo insignias de marketing.',
    certs: [
      { label: 'IECEx', desc: 'Evaluación global de conformidad de la IEC para atmósferas explosivas' },
      { label: 'ATEX', desc: 'Certificación según la directiva europea para el despliegue en Zona 1' },
      { label: 'UL 6260', desc: 'Norma norteamericana para robots en áreas peligrosas — en la hoja de ruta' },
      { label: 'CSA', desc: 'Certificación de la Asociación Canadiense de Normalización — en curso' },
    ],
    viewCertDetails: 'Ver detalles de certificación',
    industriesLabel: 'Industrias a las que servimos',
    industriesTitle: 'Desplegados en los entornos industriales más exigentes',
    caseStudyLabel: 'Caso de éxito',
    readFullCase: 'Leer el caso de éxito completo',
    resourcesLabel: 'Recursos',
    resourcesTitle: 'Guías y perspectivas',
    viewAllResources: 'Ver todos los recursos',
    readSuffix: 'de lectura',
    readCta: 'Leer',
    ctaTitle: 'Vea a un robot inspeccionar su instalación',
    ctaBody:
      'Programe una demostración en vivo o una evaluación de sitio. Nuestro equipo le ayudará a identificar el robot y el plan de despliegue adecuados para sus necesidades de inspección en áreas peligrosas.',
    seeCaseStudies: 'Ver casos de éxito',
  },
  pt: {
    certBadge: 'Certificado IECEx e ATEX · Roteiro UL 6260',
    heroTitle: 'Robôs de inspeção à prova de explosão para os ambientes mais perigosos do mundo',
    heroSubtitle:
      'Robôs autônomos que patrulham refinarias de petróleo, plantas de gás, usinas de energia e plataformas offshore — detectando vazamentos, anomalias térmicas e problemas estruturais antes que se tornem incidentes. Implantados em mais de 40 países.',
    demoCta: 'Solicitar uma demonstração online',
    exploreProducts: 'Explorar produtos',
    statCountries: 'Países implantados',
    statRating: 'Classificação Ex mais alta',
    statPatrol: 'Patrulha autônoma',
    statModels: 'Modelos de robôs',
    trustedBy: 'Com a confiança dos principais operadores em',
    sectors: ['Óleo e gás', 'Petroquímica', 'Geração de energia', 'Offshore', 'Mineração', 'Resposta a emergências'],
    productLine: 'Linha de produtos',
    fleetTitle: 'A frota de robôs',
    fleetSubtitle: 'Quinze robôs — de quadrúpedes à prova de explosão a software de gestão de frota — construídos para inspeção em áreas classificadas.',
    viewAllProducts: 'Ver todos os produtos',
    problemLabel: 'O problema',
    problemTitle: 'A inspeção manual é perigosa, pouco frequente e cara',
    problemBody:
      'Em áreas classificadas, toda inspeção humana traz risco. Os turnos limitam a frequência. O erro humano limita a consistência. E entre as inspeções, vazamentos e anomalias térmicas passam despercebidos — às vezes até que seja tarde demais.',
    problems: [
      { title: 'Risco de explosão', desc: 'Toda entrada humana em uma área de Zona 1 é um evento de risco. Os robôs reduzem a exposição do pessoal em até 70%.' },
      { title: 'Lacunas de inspeção', desc: 'A patrulha manual é limitada pelos turnos. Os robôs oferecem cobertura contínua 24/7 sem lacunas.' },
      { title: 'Anomalias não detectadas', desc: 'Entre as inspeções, anomalias térmicas e de gás se agravam. Os robôs as detectam em tempo real.' },
    ],
    solutionTitle: 'A solução Hazloc',
    solutionBody:
      'Robôs à prova de explosão certificados com navegação autônoma, cargas úteis multissensor e detecção de anomalias com IA — unificados por uma única plataforma de software.',
    exploreTech: 'Explorar a tecnologia',
    certLabel: 'Certificação e conformidade',
    certTitle: 'Construídos segundo os padrões mais elevados para áreas classificadas',
    certBody:
      'Cada robô à prova de explosão é certificado IECEx e ATEX, com um roteiro transparente para UL 6260 e CSA. Publicamos nosso status de certificação completo — não apenas selos de marketing.',
    certs: [
      { label: 'IECEx', desc: 'Avaliação global de conformidade da IEC para atmosferas explosivas' },
      { label: 'ATEX', desc: 'Certificação segundo a diretiva europeia para implantação em Zona 1' },
      { label: 'UL 6260', desc: 'Norma norte-americana para robôs em áreas classificadas — no roteiro' },
      { label: 'CSA', desc: 'Certificação da Associação Canadense de Normalização — em andamento' },
    ],
    viewCertDetails: 'Ver detalhes da certificação',
    industriesLabel: 'Setores que atendemos',
    industriesTitle: 'Implantados nos ambientes industriais mais exigentes',
    caseStudyLabel: 'Caso de sucesso',
    readFullCase: 'Ler o caso de sucesso completo',
    resourcesLabel: 'Recursos',
    resourcesTitle: 'Guias e insights',
    viewAllResources: 'Ver todos os recursos',
    readSuffix: 'de leitura',
    readCta: 'Ler',
    ctaTitle: 'Veja um robô inspecionar sua instalação',
    ctaBody:
      'Agende uma demonstração ao vivo ou uma avaliação de local. Nossa equipe ajudará você a identificar o robô e o plano de implantação certos para suas necessidades de inspeção em área classificada.',
    seeCaseStudies: 'Ver casos de sucesso',
  },
};

function Globe({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function HomePage() {
  const locale = useLocale();
  const t = copy[locale];
  const products = getLocalizedProducts(locale);
  const industries = getLocalizedIndustries(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const resources = getLocalizedResources(locale);

  const featuredProducts = [
    products.find((p) => p.slug === 'explosion-proof-wheeled-robot-l4s')!,
    products.find((p) => p.slug === 'explosion-proof-quadruped-robot')!,
    products.find((p) => p.slug === 'firefighting-reconnaissance-robot')!,
  ];

  const stats = [
    { icon: Globe, value: '40+', label: t.statCountries },
    { icon: ShieldCheck, value: 'IIC T6', label: t.statRating },
    { icon: Clock, value: '24/7', label: t.statPatrol },
    { icon: Cpu, value: '15+', label: t.statModels },
  ];

  const problems = [
    { icon: Flame, ...t.problems[0] },
    { icon: Clock, ...t.problems[1] },
    { icon: Eye, ...t.problems[2] },
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
              {t.certBadge}
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed animate-fade-up">
              {t.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up">
              <Link to="/contact" className="btn-primary text-base">
                {t.demoCta}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                {t.exploreProducts}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink-950/60 backdrop-blur-md">
          <div className="container-x py-6">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, i) => (
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
            <span className="flex-shrink-0 uppercase tracking-widest text-xs">{t.trustedBy}</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-600">
              {t.sectors.map((s, i) => (
                <span key={s}>{s}{i < t.sectors.length - 1 ? ' ·' : ''}</span>
              ))}
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
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.productLine}</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  {t.fleetTitle}
                </h2>
                <p className="mt-3 text-lg text-ink-500 max-w-xl">
                  {t.fleetSubtitle}
                </p>
              </div>
              <Link to="/products" className="btn-secondary flex-shrink-0">
                {t.viewAllProducts}
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">{t.problemLabel}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              {t.problemTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-300 leading-relaxed">
              {t.problemBody}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {problems.map((item, i) => (
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
                  <h3 className="font-display text-2xl font-bold text-ink-900">{t.solutionTitle}</h3>
                  <p className="mt-2 text-ink-800 max-w-2xl">
                    {t.solutionBody}
                  </p>
                </div>
                <Link to="/certification" className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ink-800">
                  {t.exploreTech}
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
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.certLabel}</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                {t.certTitle}
              </h2>
              <p className="mt-4 text-lg text-ink-500 leading-relaxed">
                {t.certBody}
              </p>
              <div className="mt-8 space-y-4">
                {t.certs.map((cert) => (
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
                {t.viewCertDetails}
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
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.industriesLabel}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {t.industriesTitle}
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
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">{t.caseStudyLabel}</p>
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
                  {t.readFullCase}
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
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{t.resourcesLabel}</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  {t.resourcesTitle}
                </h2>
              </div>
              <Link to="/resources" className="btn-secondary flex-shrink-0">
                {t.viewAllResources}
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
                    <span>{r.readTime} {t.readSuffix}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-teal-600 group-hover:gap-2 transition-all">
                      {t.readCta} <ArrowRight size={14} />
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
              {t.ctaTitle}
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              {t.ctaBody}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Link to="/contact" className="btn-primary text-base">
                {t.demoCta}
                <ArrowRight size={18} />
              </Link>
              <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                {t.seeCaseStudies}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
