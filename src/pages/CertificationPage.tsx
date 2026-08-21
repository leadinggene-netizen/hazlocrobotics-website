import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import { useLocale } from '@/i18n/useLocale';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const copy = {
  en: {
    eyebrow: 'Certification & Compliance',
    title: 'Built to the Highest Hazardous-Location Standards',
    subtitle: 'Every explosion-proof robot is IECEx and ATEX certified, with a transparent roadmap to UL 6260 and CSA. We publish our full certification status — not just marketing badges.',
    certs: [
      { name: 'IECEx', status: 'Certified', desc: 'The IEC System for Certification to Standards Relating to Equipment for Use in Explosive Atmospheres. Globally recognized conformity assessment system covering design, manufacturing, and personnel competence.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'ATEX', status: 'Certified', desc: 'European Union directive for equipment intended for use in potentially explosive atmospheres. Required for deployment in EU hazardous locations and widely accepted internationally.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'UL 6260', status: 'On Roadmap', desc: 'The first UL standard purpose-built for robots in hazardous locations. Currently under development — Hazloc Robotics is on the roadmap to achieve certification as the standard matures.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
      { name: 'CSA', status: 'In Progress', desc: 'Canadian Standards Association certification for hazardous-location equipment. Required for deployment in Canadian classified locations. Certification in active progress.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
    ],
    ratingsTitle: 'Understanding Explosion Protection Ratings',
    ratingsSubtitle: 'Every certification includes a gas group and temperature class. Here is what they mean.',
    gasGroupsTitle: 'Gas Groups',
    gasGroupsSubtitle: 'Classifies the types of explosive atmospheres the equipment is safe for.',
    gasGroups: [
      { group: 'IIC', desc: 'Highest group — includes hydrogen and acetylene', products: 'L4-S Wheeled Robot' },
      { group: 'IIB', desc: 'Includes ethylene, propane — covers most petrochemical gases', products: 'Quadruped, Rail, Tracked, Firefighting' },
      { group: 'IIA', desc: 'Includes propane, butane — standard industrial gases', products: 'All Ex-certified products' },
    ],
    tempClassTitle: 'Temperature Class',
    tempClassSubtitle: 'Maximum surface temperature the equipment can reach — must be below the auto-ignition temperature of the gas present.',
    tempClasses: [
      { cls: 'T6', temp: '85°C', desc: 'Lowest surface temp — suitable for all gas groups' },
      { cls: 'T4', temp: '135°C', desc: 'Suitable for most common industrial gases' },
      { cls: 'T3', temp: '200°C', desc: 'Standard for many petrochemical environments' },
    ],
    availableIn: 'Available in',
    processTitle: 'How a Robot Gets Certified',
    processSubtitle: 'Certification is not a one-time test. It is a multi-stage process that covers design, testing, manufacturing quality, and ongoing surveillance.',
    stages: [
      { stage: 'Stage 1', title: 'Explosion Protection Design', desc: 'Robot chassis, electrical systems, and sensor enclosures designed to IECEx/ATEX explosion protection principles — flameproof enclosures, intrinsic safety, and pressurization as appropriate.' },
      { stage: 'Stage 2', title: 'Type Testing & Assessment', desc: 'Full type testing at accredited laboratories: flameproof enclosure tests, temperature classification, impact resistance, and ingress protection. Every design variant is individually tested.' },
      { stage: 'Stage 3', title: 'Quality System Audit', desc: 'Manufacturing quality system audited and certified to ensure every unit produced meets the certified design. Includes traceability, component control, and production testing requirements.' },
      { stage: 'Stage 4', title: 'Ongoing Surveillance', desc: 'Annual surveillance audits maintain certification validity. Any design changes are re-assessed before production, ensuring certification stays current with the deployed product.' },
    ],
    buyerLabel: 'Important for Buyers',
    buyerTitle: 'How to verify a supplier\'s certification claims',
    buyerSubtitle: 'Any supplier can put a certification badge on a website. Here is how to verify the claims are real.',
    buyerItems: [
      { title: 'Ask for the certificate', desc: 'A real IECEx or ATEX certificate has a certificate number, issuing body, and is verifiable on the issuing body\'s website. Ask for the document, not just the badge.' },
      { title: 'Check the gas group and temperature class', desc: 'Make sure the certification covers the gas group and temperature class for your site\'s hazard classification. A generic "ATEX certified" claim is not enough.' },
      { title: 'Verify the manufacturing quality system', desc: 'Certification includes a quality system audit. Ask for the quality assessment certificate and the surveillance audit schedule.' },
      { title: 'Check for ongoing validity', desc: 'Certification requires annual surveillance. Ask when the last surveillance audit was completed and when the next is scheduled.' },
    ],
    ctaTitle: 'Questions about certification for your site?',
    ctaBody: 'Our compliance team works with your engineering and HSE teams to support site-specific certification mapping.',
    ctaButton: 'Contact Our Compliance Team',
  },
  fr: {
    eyebrow: 'Certification et conformité',
    title: 'Conçu selon les normes les plus élevées pour emplacements dangereux',
    subtitle: 'Chaque robot antidéflagrant est certifié IECEx et ATEX, avec une feuille de route transparente vers UL 6260 et CSA. Nous publions notre statut de certification complet — pas seulement des badges marketing.',
    certs: [
      { name: 'IECEx', status: 'Certifié', desc: 'Le système de la CEI pour la certification selon les normes relatives aux équipements destinés aux atmosphères explosives. Système d\'évaluation de conformité reconnu mondialement couvrant la conception, la fabrication et la compétence du personnel.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'ATEX', status: 'Certifié', desc: 'Directive de l\'Union européenne pour les équipements destinés à être utilisés en atmosphères potentiellement explosives. Requise pour le déploiement dans les emplacements dangereux de l\'UE et largement acceptée à l\'international.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'UL 6260', status: 'Sur la feuille de route', desc: 'La première norme UL conçue spécifiquement pour les robots en emplacement dangereux. Actuellement en développement — Hazloc Robotics est sur la feuille de route pour obtenir la certification à mesure que la norme mûrit.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
      { name: 'CSA', status: 'En cours', desc: 'Certification de l\'Association canadienne de normalisation pour équipements en emplacement dangereux. Requise pour le déploiement dans les emplacements classés canadiens. Certification activement en cours.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
    ],
    ratingsTitle: 'Comprendre les classifications de protection contre les explosions',
    ratingsSubtitle: 'Chaque certification comprend un groupe de gaz et une classe de température. Voici ce qu\'ils signifient.',
    gasGroupsTitle: 'Groupes de gaz',
    gasGroupsSubtitle: 'Classifie les types d\'atmosphères explosives pour lesquelles l\'équipement est sécuritaire.',
    gasGroups: [
      { group: 'IIC', desc: 'Groupe le plus élevé — inclut l\'hydrogène et l\'acétylène', products: 'Robot à roues L4-S' },
      { group: 'IIB', desc: 'Inclut l\'éthylène, le propane — couvre la plupart des gaz pétrochimiques', products: 'Quadrupède, sur rail, chenillé, incendie' },
      { group: 'IIA', desc: 'Inclut le propane, le butane — gaz industriels standards', products: 'Tous les produits certifiés Ex' },
    ],
    tempClassTitle: 'Classe de température',
    tempClassSubtitle: 'Température de surface maximale que l\'équipement peut atteindre — doit être inférieure à la température d\'auto-inflammation du gaz présent.',
    tempClasses: [
      { cls: 'T6', temp: '85°C', desc: 'Température de surface la plus basse — convient à tous les groupes de gaz' },
      { cls: 'T4', temp: '135°C', desc: 'Convient à la plupart des gaz industriels courants' },
      { cls: 'T3', temp: '200°C', desc: 'Standard pour de nombreux environnements pétrochimiques' },
    ],
    availableIn: 'Disponible sur',
    processTitle: 'Comment un robot est certifié',
    processSubtitle: 'La certification n\'est pas un test unique. C\'est un processus à plusieurs étapes couvrant la conception, les essais, la qualité de fabrication et la surveillance continue.',
    stages: [
      { stage: 'Étape 1', title: 'Conception de protection contre les explosions', desc: 'Le châssis du robot, les systèmes électriques et les enceintes de capteurs sont conçus selon les principes de protection contre les explosions IECEx/ATEX — enceintes antidéflagrantes, sécurité intrinsèque et pressurisation selon le cas.' },
      { stage: 'Étape 2', title: 'Essais de type et évaluation', desc: 'Essais de type complets dans des laboratoires accrédités : essais d\'enceinte antidéflagrante, classification de température, résistance aux chocs et protection contre les intrusions. Chaque variante de conception est testée individuellement.' },
      { stage: 'Étape 3', title: 'Audit du système qualité', desc: 'Le système de qualité de fabrication est audité et certifié pour assurer que chaque unité produite respecte la conception certifiée. Comprend la traçabilité, le contrôle des composants et les exigences d\'essais de production.' },
      { stage: 'Étape 4', title: 'Surveillance continue', desc: 'Des audits de surveillance annuels maintiennent la validité de la certification. Tout changement de conception est réévalué avant production, assurant que la certification demeure à jour avec le produit déployé.' },
    ],
    buyerLabel: 'Important pour les acheteurs',
    buyerTitle: 'Comment vérifier les allégations de certification d\'un fournisseur',
    buyerSubtitle: 'N\'importe quel fournisseur peut afficher un badge de certification sur un site web. Voici comment vérifier que les allégations sont réelles.',
    buyerItems: [
      { title: 'Demandez le certificat', desc: 'Un véritable certificat IECEx ou ATEX comporte un numéro de certificat, un organisme émetteur, et est vérifiable sur le site web de cet organisme. Demandez le document, pas seulement le badge.' },
      { title: 'Vérifiez le groupe de gaz et la classe de température', desc: 'Assurez-vous que la certification couvre le groupe de gaz et la classe de température de la classification de danger de votre site. Une allégation générique « certifié ATEX » n\'est pas suffisante.' },
      { title: 'Vérifiez le système de qualité de fabrication', desc: 'La certification comprend un audit du système de qualité. Demandez le certificat d\'évaluation de la qualité et le calendrier des audits de surveillance.' },
      { title: 'Vérifiez la validité continue', desc: 'La certification nécessite une surveillance annuelle. Demandez quand le dernier audit de surveillance a été effectué et quand le prochain est prévu.' },
    ],
    ctaTitle: 'Des questions sur la certification pour votre site?',
    ctaBody: 'Notre équipe de conformité travaille avec vos équipes d\'ingénierie et HSE pour soutenir la correspondance de certification propre à votre site.',
    ctaButton: 'Contacter notre équipe de conformité',
  },
  es: {
    eyebrow: 'Certificación y cumplimiento',
    title: 'Construido según los más altos estándares para ubicaciones peligrosas',
    subtitle: 'Cada robot antiexplosión está certificado con IECEx y ATEX, con una hoja de ruta transparente hacia UL 6260 y CSA. Publicamos nuestro estado de certificación completo — no solo insignias de marketing.',
    certs: [
      { name: 'IECEx', status: 'Certificado', desc: 'El Sistema de la IEC para la Certificación de Normas Relacionadas con Equipos para su Uso en Atmósferas Explosivas. Sistema de evaluación de conformidad reconocido a nivel mundial que cubre diseño, fabricación y competencia del personal.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'ATEX', status: 'Certificado', desc: 'Directiva de la Unión Europea para equipos destinados a su uso en atmósferas potencialmente explosivas. Requerida para el despliegue en ubicaciones peligrosas de la UE y ampliamente aceptada internacionalmente.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'UL 6260', status: 'En hoja de ruta', desc: 'El primer estándar de UL diseñado específicamente para robots en ubicaciones peligrosas. Actualmente en desarrollo — Hazloc Robotics está en la hoja de ruta para obtener la certificación a medida que el estándar madura.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
      { name: 'CSA', status: 'En progreso', desc: 'Certificación de la Asociación Canadiense de Normas para equipos en ubicaciones peligrosas. Requerida para el despliegue en ubicaciones clasificadas canadienses. Certificación en progreso activo.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
    ],
    ratingsTitle: 'Entendiendo las clasificaciones de protección contra explosiones',
    ratingsSubtitle: 'Cada certificación incluye un grupo de gas y una clase de temperatura. Esto es lo que significan.',
    gasGroupsTitle: 'Grupos de gas',
    gasGroupsSubtitle: 'Clasifica los tipos de atmósferas explosivas para las que el equipo es seguro.',
    gasGroups: [
      { group: 'IIC', desc: 'Grupo más alto — incluye hidrógeno y acetileno', products: 'Robot con ruedas L4-S' },
      { group: 'IIB', desc: 'Incluye etileno, propano — cubre la mayoría de los gases petroquímicos', products: 'Cuadrúpedo, riel, oruga, contra incendios' },
      { group: 'IIA', desc: 'Incluye propano, butano — gases industriales estándar', products: 'Todos los productos certificados Ex' },
    ],
    tempClassTitle: 'Clase de temperatura',
    tempClassSubtitle: 'Temperatura máxima de superficie que el equipo puede alcanzar — debe estar por debajo de la temperatura de autoignición del gas presente.',
    tempClasses: [
      { cls: 'T6', temp: '85°C', desc: 'Temperatura de superficie más baja — adecuada para todos los grupos de gas' },
      { cls: 'T4', temp: '135°C', desc: 'Adecuada para la mayoría de los gases industriales comunes' },
      { cls: 'T3', temp: '200°C', desc: 'Estándar para muchos entornos petroquímicos' },
    ],
    availableIn: 'Disponible en',
    processTitle: 'Cómo se certifica un robot',
    processSubtitle: 'La certificación no es una prueba única. Es un proceso de múltiples etapas que cubre diseño, pruebas, calidad de fabricación y vigilancia continua.',
    stages: [
      { stage: 'Etapa 1', title: 'Diseño de protección contra explosiones', desc: 'El chasis del robot, los sistemas eléctricos y los recintos de sensores se diseñan según los principios de protección contra explosiones de IECEx/ATEX — recintos antideflagrantes, seguridad intrínseca y presurización según corresponda.' },
      { stage: 'Etapa 2', title: 'Pruebas de tipo y evaluación', desc: 'Pruebas de tipo completas en laboratorios acreditados: pruebas de recinto antideflagrante, clasificación de temperatura, resistencia a impactos y protección contra ingreso. Cada variante de diseño se prueba individualmente.' },
      { stage: 'Etapa 3', title: 'Auditoría del sistema de calidad', desc: 'El sistema de calidad de fabricación se audita y certifica para garantizar que cada unidad producida cumpla con el diseño certificado. Incluye trazabilidad, control de componentes y requisitos de pruebas de producción.' },
      { stage: 'Etapa 4', title: 'Vigilancia continua', desc: 'Las auditorías de vigilancia anuales mantienen la validez de la certificación. Cualquier cambio de diseño se reevalúa antes de la producción, asegurando que la certificación se mantenga actualizada con el producto desplegado.' },
    ],
    buyerLabel: 'Importante para compradores',
    buyerTitle: 'Cómo verificar las afirmaciones de certificación de un proveedor',
    buyerSubtitle: 'Cualquier proveedor puede poner una insignia de certificación en un sitio web. Así es como se verifica que las afirmaciones sean reales.',
    buyerItems: [
      { title: 'Solicite el certificado', desc: 'Un certificado real de IECEx o ATEX tiene un número de certificado, un organismo emisor, y es verificable en el sitio web del organismo emisor. Solicite el documento, no solo la insignia.' },
      { title: 'Verifique el grupo de gas y la clase de temperatura', desc: 'Asegúrese de que la certificación cubra el grupo de gas y la clase de temperatura de la clasificación de peligro de su sitio. Una afirmación genérica de "certificado ATEX" no es suficiente.' },
      { title: 'Verifique el sistema de calidad de fabricación', desc: 'La certificación incluye una auditoría del sistema de calidad. Solicite el certificado de evaluación de calidad y el calendario de auditorías de vigilancia.' },
      { title: 'Verifique la validez continua', desc: 'La certificación requiere vigilancia anual. Pregunte cuándo se completó la última auditoría de vigilancia y cuándo está programada la próxima.' },
    ],
    ctaTitle: '¿Preguntas sobre certificación para su sitio?',
    ctaBody: 'Nuestro equipo de cumplimiento trabaja con sus equipos de ingeniería y HSE para apoyar la correspondencia de certificación específica del sitio.',
    ctaButton: 'Contacte a nuestro equipo de cumplimiento',
  },
  pt: {
    eyebrow: 'Certificação e conformidade',
    title: 'Construído de acordo com os mais altos padrões para locais perigosos',
    subtitle: 'Cada robô à prova de explosão é certificado pela IECEx e ATEX, com um roteiro transparente para UL 6260 e CSA. Publicamos nosso status de certificação completo — não apenas selos de marketing.',
    certs: [
      { name: 'IECEx', status: 'Certificado', desc: 'O Sistema da IEC para Certificação de Normas Relacionadas a Equipamentos para Uso em Atmosferas Explosivas. Sistema de avaliação de conformidade reconhecido globalmente que abrange design, fabricação e competência do pessoal.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'ATEX', status: 'Certificado', desc: 'Diretiva da União Europeia para equipamentos destinados ao uso em atmosferas potencialmente explosivas. Necessária para implantação em locais perigosos da UE e amplamente aceita internacionalmente.', color: 'bg-teal-50 text-teal-700', iconColor: 'text-teal-600' },
      { name: 'UL 6260', status: 'No roteiro', desc: 'O primeiro padrão da UL desenvolvido especificamente para robôs em locais perigosos. Atualmente em desenvolvimento — a Hazloc Robotics está no roteiro para obter a certificação à medida que o padrão amadurece.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
      { name: 'CSA', status: 'Em andamento', desc: 'Certificação da Associação Canadense de Normas para equipamentos em locais perigosos. Necessária para implantação em locais classificados canadenses. Certificação em andamento ativo.', color: 'bg-gold-50 text-gold-700', iconColor: 'text-gold-500' },
    ],
    ratingsTitle: 'Entendendo as classificações de proteção contra explosão',
    ratingsSubtitle: 'Cada certificação inclui um grupo de gás e uma classe de temperatura. Aqui está o que eles significam.',
    gasGroupsTitle: 'Grupos de gás',
    gasGroupsSubtitle: 'Classifica os tipos de atmosferas explosivas para as quais o equipamento é seguro.',
    gasGroups: [
      { group: 'IIC', desc: 'Grupo mais alto — inclui hidrogênio e acetileno', products: 'Robô com rodas L4-S' },
      { group: 'IIB', desc: 'Inclui etileno, propano — cobre a maioria dos gases petroquímicos', products: 'Quadrúpede, trilho, esteira, combate a incêndio' },
      { group: 'IIA', desc: 'Inclui propano, butano — gases industriais padrão', products: 'Todos os produtos certificados Ex' },
    ],
    tempClassTitle: 'Classe de temperatura',
    tempClassSubtitle: 'Temperatura máxima de superfície que o equipamento pode atingir — deve estar abaixo da temperatura de autoignição do gás presente.',
    tempClasses: [
      { cls: 'T6', temp: '85°C', desc: 'Menor temperatura de superfície — adequada para todos os grupos de gás' },
      { cls: 'T4', temp: '135°C', desc: 'Adequada para a maioria dos gases industriais comuns' },
      { cls: 'T3', temp: '200°C', desc: 'Padrão para muitos ambientes petroquímicos' },
    ],
    availableIn: 'Disponível em',
    processTitle: 'Como um robô é certificado',
    processSubtitle: 'A certificação não é um teste único. É um processo de múltiplas etapas que abrange design, testes, qualidade de fabricação e vigilância contínua.',
    stages: [
      { stage: 'Etapa 1', title: 'Design de proteção contra explosão', desc: 'O chassi do robô, sistemas elétricos e invólucros de sensores são projetados de acordo com os princípios de proteção contra explosão da IECEx/ATEX — invólucros à prova de chamas, segurança intrínseca e pressurização conforme apropriado.' },
      { stage: 'Etapa 2', title: 'Testes de tipo e avaliação', desc: 'Testes de tipo completos em laboratórios credenciados: testes de invólucro à prova de chamas, classificação de temperatura, resistência a impactos e proteção contra ingresso. Cada variante de design é testada individualmente.' },
      { stage: 'Etapa 3', title: 'Auditoria do sistema de qualidade', desc: 'O sistema de qualidade de fabricação é auditado e certificado para garantir que cada unidade produzida atenda ao design certificado. Inclui rastreabilidade, controle de componentes e requisitos de testes de produção.' },
      { stage: 'Etapa 4', title: 'Vigilância contínua', desc: 'Auditorias de vigilância anuais mantêm a validade da certificação. Quaisquer alterações de design são reavaliadas antes da produção, garantindo que a certificação permaneça atualizada com o produto implantado.' },
    ],
    buyerLabel: 'Importante para compradores',
    buyerTitle: 'Como verificar as alegações de certificação de um fornecedor',
    buyerSubtitle: 'Qualquer fornecedor pode colocar um selo de certificação em um site. Veja como verificar se as alegações são reais.',
    buyerItems: [
      { title: 'Peça o certificado', desc: 'Um certificado real de IECEx ou ATEX tem um número de certificado, um órgão emissor, e é verificável no site do órgão emissor. Peça o documento, não apenas o selo.' },
      { title: 'Verifique o grupo de gás e a classe de temperatura', desc: 'Certifique-se de que a certificação cubra o grupo de gás e a classe de temperatura da classificação de risco do seu local. Uma alegação genérica de "certificado ATEX" não é suficiente.' },
      { title: 'Verifique o sistema de qualidade de fabricação', desc: 'A certificação inclui uma auditoria do sistema de qualidade. Peça o certificado de avaliação de qualidade e o cronograma de auditorias de vigilância.' },
      { title: 'Verifique a validade contínua', desc: 'A certificação requer vigilância anual. Pergunte quando a última auditoria de vigilância foi concluída e quando a próxima está agendada.' },
    ],
    ctaTitle: 'Dúvidas sobre certificação para o seu local?',
    ctaBody: 'Nossa equipe de conformidade trabalha com suas equipes de engenharia e HSE para apoiar o mapeamento de certificação específico do local.',
    ctaButton: 'Entre em contato com nossa equipe de conformidade',
  },
};

export default function CertificationPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        image="https://images.pexels.com/photos/9889066/pexels-photo-9889066.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Cert badges */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2">
            {t.certs.map((c, i) => (
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
              {t.ratingsTitle}
            </h2>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              {t.ratingsSubtitle}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="bg-white rounded-2xl border border-ink-100 p-8">
                <h3 className="font-display text-lg font-bold text-ink-900">{t.gasGroupsTitle}</h3>
                <p className="mt-2 text-sm text-ink-500">
                  {t.gasGroupsSubtitle}
                </p>
                <div className="mt-6 space-y-4">
                  {t.gasGroups.map((g) => (
                    <div key={g.group} className="flex items-start gap-4">
                      <span className="tag-explosion flex-shrink-0 mt-0.5">{g.group}</span>
                      <div>
                        <p className="text-sm text-ink-700">{g.desc}</p>
                        <p className="text-xs text-ink-400 mt-1">{t.availableIn}: {g.products}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white rounded-2xl border border-ink-100 p-8">
                <h3 className="font-display text-lg font-bold text-ink-900">{t.tempClassTitle}</h3>
                <p className="mt-2 text-sm text-ink-500">
                  {t.tempClassSubtitle}
                </p>
                <div className="mt-6 space-y-3">
                  {t.tempClasses.map((tc) => (
                    <div key={tc.cls} className="flex items-center justify-between rounded-lg bg-ink-50 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="tag-electric">{tc.cls}</span>
                        <span className="text-sm text-ink-600">{tc.desc}</span>
                      </div>
                      <span className="text-sm font-mono text-ink-400">{tc.temp}</span>
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
              {t.processTitle}
            </h2>
            <p className="mt-3 text-lg text-ink-500 max-w-2xl">
              {t.processSubtitle}
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {t.stages.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-ink-900 font-display font-bold text-sm">
                      {i + 1}
                    </div>
                    {i < t.stages.length - 1 && <div className="w-px h-16 bg-ink-200 mt-2" />}
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
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">{t.buyerLabel}</p>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              {t.buyerTitle}
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed">
              {t.buyerSubtitle}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.buyerItems.map((item, i) => (
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
                <h3 className="font-display text-xl font-bold text-ink-900">{t.ctaTitle}</h3>
                <p className="mt-2 text-ink-800">{t.ctaBody}</p>
              </div>
              <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 transition-all">
                {t.ctaButton}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
