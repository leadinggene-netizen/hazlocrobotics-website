import { useMemo, useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { getLocalizedProducts, type Product } from '@/data/products';
import { getLocalizedIndustries } from '@/data/industries';
import { supabase } from '@/lib/supabase';

const terrainMatchSlugs: Record<string, string> = {
  stairs: 'quadruped',
  narrow: 'l4s',
  'fixed-path': 'rail',
  outdoor: 'tracked',
  fire: 'firefighting',
  flat: 'electric',
  'software-only': 'asset-tracking-center-software',
};

const optionsByLocale = {
  en: {
    otherIndustry: 'Other / Not sure yet',
    hazardOptions: [
      { value: 'zone1', label: 'Zone 1 / Class I Div 1', desc: 'Explosive gas or dust present continuously or frequently' },
      { value: 'zone2', label: 'Zone 2 / Class I Div 2', desc: 'Explosive atmosphere possible but not normally present' },
      { value: 'non-hazardous', label: 'Non-hazardous / general industrial', desc: 'No explosive atmosphere classification required' },
      { value: 'not-sure', label: 'Not sure yet', desc: 'A specialist can help determine your area classification' },
    ],
    terrainOptions: [
      { value: 'stairs', label: 'Stairs, mezzanines, multi-level access' },
      { value: 'narrow', label: 'Narrow corridors, equipment gaps, tight clearances' },
      { value: 'fixed-path', label: 'Long fixed paths — pipe racks, conveyors, tunnels' },
      { value: 'outdoor', label: 'Rough outdoor terrain — mud, gravel, debris' },
      { value: 'fire', label: 'Active fire or hazmat scene response' },
      { value: 'flat', label: 'General flat facility floor' },
      { value: 'software-only', label: 'I already have robots — just need fleet software' },
    ],
    functionOptions: [
      { value: 'thermal', label: 'Thermal imaging' },
      { value: 'gas', label: 'Gas detection' },
      { value: 'visual', label: 'HD visual / video inspection' },
      { value: 'acoustic', label: 'Acoustic monitoring' },
      { value: 'software', label: 'Fleet management software & dashboards' },
    ],
  },
  fr: {
    otherIndustry: 'Autre / Pas encore certain',
    hazardOptions: [
      { value: 'zone1', label: 'Zone 1 / Classe I Div 1', desc: 'Gaz ou poussière explosif présent en continu ou fréquemment' },
      { value: 'zone2', label: 'Zone 2 / Classe I Div 2', desc: 'Atmosphère explosive possible mais normalement absente' },
      { value: 'non-hazardous', label: 'Non dangereux / industriel général', desc: 'Aucune classification d\'atmosphère explosive requise' },
      { value: 'not-sure', label: 'Pas encore certain', desc: 'Un spécialiste peut vous aider à déterminer la classification de votre zone' },
    ],
    terrainOptions: [
      { value: 'stairs', label: 'Escaliers, mezzanines, accès à plusieurs niveaux' },
      { value: 'narrow', label: 'Corridors étroits, interstices d\'équipement, dégagements serrés' },
      { value: 'fixed-path', label: 'Longs trajets fixes — racks de tuyauterie, convoyeurs, tunnels' },
      { value: 'outdoor', label: 'Terrain extérieur accidenté — boue, gravier, débris' },
      { value: 'fire', label: 'Intervention active sur scène d\'incendie ou de matières dangereuses' },
      { value: 'flat', label: 'Plancher d\'installation général et plat' },
      { value: 'software-only', label: 'J\'ai déjà des robots — j\'ai seulement besoin du logiciel de flotte' },
    ],
    functionOptions: [
      { value: 'thermal', label: 'Imagerie thermique' },
      { value: 'gas', label: 'Détection de gaz' },
      { value: 'visual', label: 'Inspection visuelle / vidéo HD' },
      { value: 'acoustic', label: 'Surveillance acoustique' },
      { value: 'software', label: 'Logiciel et tableaux de bord de gestion de flotte' },
    ],
  },
  es: {
    otherIndustry: 'Otro / Aún no estoy seguro',
    hazardOptions: [
      { value: 'zone1', label: 'Zona 1 / Clase I Div 1', desc: 'Gas o polvo explosivo presente de forma continua o frecuente' },
      { value: 'zone2', label: 'Zona 2 / Clase I Div 2', desc: 'Atmósfera explosiva posible pero normalmente ausente' },
      { value: 'non-hazardous', label: 'No peligroso / industrial general', desc: 'No se requiere clasificación de atmósfera explosiva' },
      { value: 'not-sure', label: 'Aún no estoy seguro', desc: 'Un especialista puede ayudarle a determinar la clasificación de su área' },
    ],
    terrainOptions: [
      { value: 'stairs', label: 'Escaleras, entrepisos, acceso multinivel' },
      { value: 'narrow', label: 'Pasillos estrechos, huecos de equipos, espacios reducidos' },
      { value: 'fixed-path', label: 'Rutas fijas largas — bastidores de tuberías, transportadores, túneles' },
      { value: 'outdoor', label: 'Terreno exterior irregular — barro, grava, escombros' },
      { value: 'fire', label: 'Respuesta activa a incendio o escena de materiales peligrosos' },
      { value: 'flat', label: 'Piso general plano de instalación' },
      { value: 'software-only', label: 'Ya tengo robots — solo necesito software de flota' },
    ],
    functionOptions: [
      { value: 'thermal', label: 'Imagen térmica' },
      { value: 'gas', label: 'Detección de gas' },
      { value: 'visual', label: 'Inspección visual / video HD' },
      { value: 'acoustic', label: 'Monitoreo acústico' },
      { value: 'software', label: 'Software y paneles de gestión de flota' },
    ],
  },
  pt: {
    otherIndustry: 'Outro / Ainda não sei',
    hazardOptions: [
      { value: 'zone1', label: 'Zona 1 / Classe I Div 1', desc: 'Gás ou poeira explosiva presente contínua ou frequentemente' },
      { value: 'zone2', label: 'Zona 2 / Classe I Div 2', desc: 'Atmosfera explosiva possível, mas normalmente ausente' },
      { value: 'non-hazardous', label: 'Não perigoso / industrial geral', desc: 'Nenhuma classificação de atmosfera explosiva necessária' },
      { value: 'not-sure', label: 'Ainda não sei', desc: 'Um especialista pode ajudar a determinar a classificação da sua área' },
    ],
    terrainOptions: [
      { value: 'stairs', label: 'Escadas, mezaninos, acesso multinível' },
      { value: 'narrow', label: 'Corredores estreitos, vãos de equipamentos, espaços apertados' },
      { value: 'fixed-path', label: 'Longos trajetos fixos — racks de tubulação, transportadores, túneis' },
      { value: 'outdoor', label: 'Terreno externo irregular — lama, cascalho, detritos' },
      { value: 'fire', label: 'Resposta ativa a incêndio ou cena de materiais perigosos' },
      { value: 'flat', label: 'Piso geral plano da instalação' },
      { value: 'software-only', label: 'Já tenho robôs — só preciso do software de frota' },
    ],
    functionOptions: [
      { value: 'thermal', label: 'Imagem térmica' },
      { value: 'gas', label: 'Detecção de gás' },
      { value: 'visual', label: 'Inspeção visual / vídeo HD' },
      { value: 'acoustic', label: 'Monitoramento acústico' },
      { value: 'software', label: 'Software e painéis de gestão de frota' },
    ],
  },
};

const copy = {
  en: {
    eyebrow: 'Robot Configurator',
    title: 'Build Your Robot',
    subtitle: 'Answer a few questions about your site and we\'ll point you to the robot models most likely to fit — a starting point for a specialist to help scope your deployment, not a finished order.',
    q1: 'What industry are you in?',
    q2: 'What\'s the area classification?',
    q3: 'What does the site look like?',
    q3sub: 'Pick the closest match — this drives mobility type.',
    q4: 'What functions matter most?',
    q4sub: 'Select as many as apply.',
    back: 'Back',
    next: 'Next',
    seeRecommendation: 'See recommendation',
    startingPoint: 'Suggested starting point',
    resultTitle: 'Based on your answers, here\'s where we\'d start',
    resultBody: 'This is a starting point, not a finished spec — a specialist will confirm the right fit and discuss custom configuration once we hear from you below.',
    thanksTitle: 'Thanks — we\'ve got it',
    thanksBody: 'A specialist will review your answers and reach out within one business day to talk through fit, customization, and next steps.',
    backToHome: 'Back to Home',
    sendToSpecialist: 'Send this to a specialist',
    sendToSpecialistSub: 'We\'ll follow up to confirm fit and talk through what a custom deployment would involve.',
    fullName: 'Full Name *',
    email: 'Email *',
    company: 'Company',
    companyPlaceholder: 'Operator, EPC or distributor',
    sending: 'Sending...',
    sendButton: 'Send to a Specialist',
    backToQuestions: 'Back to questions',
    errorRequired: 'Please fill in your name and email.',
    errorSubmit: 'Something went wrong submitting this. Please try again or email us directly.',
  },
  fr: {
    eyebrow: 'Configurateur de robot',
    title: 'Configurez votre robot',
    subtitle: 'Répondez à quelques questions sur votre site et nous vous orienterons vers les modèles de robots les plus susceptibles de convenir — un point de départ pour qu\'un spécialiste vous aide à définir votre déploiement, pas une commande finale.',
    q1: 'Dans quel secteur êtes-vous?',
    q2: 'Quelle est la classification de la zone?',
    q3: 'À quoi ressemble le site?',
    q3sub: 'Choisissez la correspondance la plus proche — cela détermine le type de mobilité.',
    q4: 'Quelles fonctions comptent le plus?',
    q4sub: 'Sélectionnez toutes celles qui s\'appliquent.',
    back: 'Retour',
    next: 'Suivant',
    seeRecommendation: 'Voir la recommandation',
    startingPoint: 'Point de départ suggéré',
    resultTitle: 'D\'après vos réponses, voici par où commencer',
    resultBody: 'Ceci est un point de départ, pas une spécification finale — un spécialiste confirmera le bon choix et discutera de la configuration personnalisée une fois que nous aurons reçu vos coordonnées ci-dessous.',
    thanksTitle: 'Merci — c\'est noté',
    thanksBody: 'Un spécialiste examinera vos réponses et vous contactera dans un jour ouvrable pour discuter de la pertinence, de la personnalisation et des prochaines étapes.',
    backToHome: 'Retour à l\'accueil',
    sendToSpecialist: 'Envoyer ceci à un spécialiste',
    sendToSpecialistSub: 'Nous vous recontacterons pour confirmer la pertinence et discuter de ce qu\'impliquerait un déploiement personnalisé.',
    fullName: 'Nom complet *',
    email: 'Courriel *',
    company: 'Entreprise',
    companyPlaceholder: 'Opérateur, EPC ou distributeur',
    sending: 'Envoi en cours...',
    sendButton: 'Envoyer à un spécialiste',
    backToQuestions: 'Retour aux questions',
    errorRequired: 'Veuillez remplir votre nom et courriel.',
    errorSubmit: 'Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer ou nous écrire directement.',
  },
  es: {
    eyebrow: 'Configurador de robot',
    title: 'Configure su robot',
    subtitle: 'Responda algunas preguntas sobre su sitio y le indicaremos los modelos de robots con más probabilidades de ajustarse — un punto de partida para que un especialista le ayude a definir su implementación, no un pedido final.',
    q1: '¿En qué industria se encuentra?',
    q2: '¿Cuál es la clasificación del área?',
    q3: '¿Cómo es el sitio?',
    q3sub: 'Elija la opción más parecida — esto determina el tipo de movilidad.',
    q4: '¿Qué funciones son más importantes?',
    q4sub: 'Seleccione todas las que apliquen.',
    back: 'Atrás',
    next: 'Siguiente',
    seeRecommendation: 'Ver recomendación',
    startingPoint: 'Punto de partida sugerido',
    resultTitle: 'Según sus respuestas, aquí es por donde empezaríamos',
    resultBody: 'Este es un punto de partida, no una especificación final — un especialista confirmará el ajuste correcto y hablará sobre la configuración personalizada una vez que recibamos sus datos a continuación.',
    thanksTitle: 'Gracias — lo tenemos',
    thanksBody: 'Un especialista revisará sus respuestas y se pondrá en contacto dentro de un día hábil para hablar sobre el ajuste, la personalización y los próximos pasos.',
    backToHome: 'Volver al inicio',
    sendToSpecialist: 'Enviar esto a un especialista',
    sendToSpecialistSub: 'Le contactaremos para confirmar el ajuste y hablar sobre lo que implicaría una implementación personalizada.',
    fullName: 'Nombre completo *',
    email: 'Correo electrónico *',
    company: 'Empresa',
    companyPlaceholder: 'Operador, EPC o distribuidor',
    sending: 'Enviando...',
    sendButton: 'Enviar a un especialista',
    backToQuestions: 'Volver a las preguntas',
    errorRequired: 'Por favor complete su nombre y correo electrónico.',
    errorSubmit: 'Algo salió mal al enviar esto. Por favor intente de nuevo o escríbanos directamente.',
  },
  pt: {
    eyebrow: 'Configurador de robô',
    title: 'Configure seu robô',
    subtitle: 'Responda a algumas perguntas sobre seu local e indicaremos os modelos de robôs com maior probabilidade de atender — um ponto de partida para que um especialista ajude a definir sua implantação, não um pedido finalizado.',
    q1: 'Em qual setor você atua?',
    q2: 'Qual é a classificação da área?',
    q3: 'Como é o local?',
    q3sub: 'Escolha a opção mais parecida — isso define o tipo de mobilidade.',
    q4: 'Quais funções são mais importantes?',
    q4sub: 'Selecione todas as que se aplicam.',
    back: 'Voltar',
    next: 'Próximo',
    seeRecommendation: 'Ver recomendação',
    startingPoint: 'Ponto de partida sugerido',
    resultTitle: 'Com base em suas respostas, aqui está por onde começaríamos',
    resultBody: 'Este é um ponto de partida, não uma especificação final — um especialista confirmará o ajuste certo e discutirá a configuração personalizada assim que recebermos seus dados abaixo.',
    thanksTitle: 'Obrigado — recebemos',
    thanksBody: 'Um especialista analisará suas respostas e entrará em contato dentro de um dia útil para discutir adequação, personalização e próximos passos.',
    backToHome: 'Voltar ao início',
    sendToSpecialist: 'Enviar isso a um especialista',
    sendToSpecialistSub: 'Entraremos em contato para confirmar a adequação e discutir o que envolveria uma implantação personalizada.',
    fullName: 'Nome completo *',
    email: 'E-mail *',
    company: 'Empresa',
    companyPlaceholder: 'Operador, EPC ou distribuidor',
    sending: 'Enviando...',
    sendButton: 'Enviar a um especialista',
    backToQuestions: 'Voltar às perguntas',
    errorRequired: 'Por favor, preencha seu nome e e-mail.',
    errorSubmit: 'Algo deu errado ao enviar isso. Tente novamente ou envie um e-mail diretamente.',
  },
};

function getRecommendations(
  products: Product[],
  industries: ReturnType<typeof getLocalizedIndustries>,
  industrySlug: string,
  hazard: string,
  terrain: string,
  fns: string[]
) {
  const industry = industries.find((i) => i.slug === industrySlug);
  const matchSlug = terrainMatchSlugs[terrain];

  const scored = products.map((p) => {
    let score = 0;
    if (industry?.bestProducts.includes(p.slug)) score += 2;
    if (hazard === 'zone1' && p.category === 'explosion-proof') score += 2;
    if (hazard === 'zone2' && p.category === 'explosion-proof') score += 1;
    if (hazard === 'non-hazardous' && p.category === 'electric') score += 2;
    if (matchSlug && p.slug.includes(matchSlug)) score += 3;
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
  const softwareProduct = products.find((p) => p.slug === 'asset-tracking-center-software');
  const recommended = addSoftware && softwareProduct
    ? [...primary, softwareProduct].filter(
        (p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i
      )
    : primary;

  return recommended.slice(0, 3);
}

const TOTAL_STEPS = 5;

export default function BuildRobotPage() {
  const locale = useLocale();
  const t = copy[locale];
  const opts = optionsByLocale[locale];
  const products = getLocalizedProducts(locale);
  const industries = getLocalizedIndustries(locale);

  const industryOptions = [
    ...industries.map((i) => ({ value: i.slug, label: i.name })),
    { value: 'other', label: opts.otherIndustry },
  ];

  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [hazard, setHazard] = useState('');
  const [terrain, setTerrain] = useState('');
  const [fns, setFns] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const recommendations = useMemo(
    () => getRecommendations(products, industries, industry, hazard, terrain, fns),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [industry, hazard, terrain, fns, locale]
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
      setErrorMsg(t.errorRequired);
      return;
    }

    const { error } = await supabase.from('configurator_submissions').insert({
      name,
      email,
      company,
      industry: industryOptions.find((i) => i.value === industry)?.label ?? null,
      hazard_classification: opts.hazardOptions.find((h) => h.value === hazard)?.label ?? null,
      terrain: opts.terrainOptions.find((tOpt) => tOpt.value === terrain)?.label ?? null,
      functions_needed: fns.map((f) => opts.functionOptions.find((o) => o.value === f)?.label).join(', ') || null,
      recommended_products: recommendations.map((p) => p.name).join(', '),
    });

    if (error) {
      setStatus('error');
      setErrorMsg(t.errorSubmit);
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
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
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
                      <h2 className="font-display text-2xl font-bold text-ink-900">{t.q1}</h2>
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
                        {t.q2}
                      </h2>
                      <div className="mt-6 grid gap-3">
                        {opts.hazardOptions.map((opt) => (
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
                        {t.q3}
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">{t.q3sub}</p>
                      <div className="mt-6 grid gap-3">
                        {opts.terrainOptions.map((opt) => (
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
                        {t.q4}
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">{t.q4sub}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {opts.functionOptions.map((opt) => (
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
                    {t.back}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(4, s + 1))}
                    disabled={!canAdvance}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    {step === 3 ? t.seeRecommendation : t.next}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {step === 4 && (
              <Reveal>
                <div className="flex items-center gap-2 text-teal-600">
                  <Sparkles size={20} />
                  <p className="text-sm font-semibold uppercase tracking-widest">{t.startingPoint}</p>
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  {t.resultTitle}
                </h2>
                <p className="mt-3 text-ink-500">
                  {t.resultBody}
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
                      <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{t.thanksTitle}</h3>
                      <p className="mt-2 text-ink-600">
                        {t.thanksBody}
                      </p>
                      <Link to="/" className="mt-6 btn-secondary inline-flex">
                        {t.backToHome}
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        {t.sendToSpecialist}
                      </h3>
                      <p className="mt-1 text-sm text-ink-500">
                        {t.sendToSpecialistSub}
                      </p>

                      {status === 'error' && (
                        <div className="mt-5 flex items-start gap-3 rounded-lg bg-danger-50 border border-danger-500/20 p-4 text-sm text-danger-700">
                          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cfg-name" className="block text-sm font-semibold text-ink-700">{t.fullName}</label>
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
                          <label htmlFor="cfg-email" className="block text-sm font-semibold text-ink-700">{t.email}</label>
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
                          <label htmlFor="cfg-company" className="block text-sm font-semibold text-ink-700">{t.company}</label>
                          <input
                            id="cfg-company"
                            name="company"
                            type="text"
                            disabled={status === 'submitting'}
                            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50"
                            placeholder={t.companyPlaceholder}
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
                            {t.sending}
                          </>
                        ) : (
                          <>
                            {t.sendButton}
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
                    {t.backToQuestions}
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
