import { Linkedin, Mail, MapPin, Phone, ArrowRight, Youtube } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import HazlocMark from '@/components/HazlocMark';
import { useLocale } from '@/i18n/useLocale';

const copy = {
  en: {
    tagline:
      'Explosion-proof inspection robots for hazardous locations. Deployed in 40+ countries across oil & gas, power, marine, mining, and emergency response.',
    products: 'Products',
    l4s: 'L4-S Wheeled Robot',
    quadruped: 'Quadruped Robot',
    tracked: 'Tracked Robot',
    firefighting: 'Firefighting Robot',
    tracking: 'Tracking Center Software',
    viewAll: 'View all',
    company: 'Company',
    aboutUs: 'About Us',
    certification: 'Certification & Compliance',
    caseStudies: 'Case Studies',
    resources: 'Resources',
    contact: 'Contact',
    faq: 'FAQ',
    getInTouch: 'Get in Touch',
    partner: 'North & Latin America commercial partner',
    partnerLine2: 'for Sevnce Robotics',
    demoCta: 'Request Online Demo',
    tollFree: 'Toll-Free',
    legalName: 'Hazloc Robotics Inc',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
  fr: {
    tagline:
      'Robots d\'inspection antidéflagrants pour sites à risque. Déployés dans plus de 40 pays dans les secteurs pétrolier et gazier, énergétique, maritime, minier et de l\'intervention d\'urgence.',
    products: 'Produits',
    l4s: 'Robot à roues L4-S',
    quadruped: 'Robot quadrupède',
    tracked: 'Robot à chenilles',
    firefighting: 'Robot d\'incendie',
    tracking: 'Logiciel Tracking Center',
    viewAll: 'Voir tout',
    company: 'Entreprise',
    aboutUs: 'À propos',
    certification: 'Certification et conformité',
    caseStudies: 'Études de cas',
    resources: 'Ressources',
    contact: 'Contact',
    faq: 'FAQ',
    getInTouch: 'Nous joindre',
    partner: 'Partenaire commercial pour l\'Amérique du Nord et l\'Amérique latine',
    partnerLine2: 'de Sevnce Robotics',
    demoCta: 'Demande de démo en ligne',
    tollFree: 'Sans frais',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
  },
  es: {
    tagline:
      'Robots de inspección antiexplosión para áreas peligrosas. Desplegados en más de 40 países en los sectores petrolero y gasífero, energético, marítimo, minero y de respuesta a emergencias.',
    products: 'Productos',
    l4s: 'Robot con ruedas L4-S',
    quadruped: 'Robot cuadrúpedo',
    tracked: 'Robot con orugas',
    firefighting: 'Robot contra incendios',
    tracking: 'Software Tracking Center',
    viewAll: 'Ver todo',
    company: 'Empresa',
    aboutUs: 'Nosotros',
    certification: 'Certificación y cumplimiento',
    caseStudies: 'Casos de éxito',
    resources: 'Recursos',
    contact: 'Contacto',
    faq: 'Preguntas frecuentes',
    getInTouch: 'Contáctenos',
    partner: 'Socio comercial para Norteamérica y América Latina',
    partnerLine2: 'de Sevnce Robotics',
    demoCta: 'Solicitar una demo en línea',
    tollFree: 'Línea gratuita',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Términos y Condiciones',
  },
  pt: {
    tagline:
      'Robôs de inspeção à prova de explosão para locais perigosos. Implantados em mais de 40 países nos setores de petróleo e gás, energia, marítimo, mineração e resposta a emergências.',
    products: 'Produtos',
    l4s: 'Robô com rodas L4-S',
    quadruped: 'Robô quadrúpede',
    tracked: 'Robô com esteiras',
    firefighting: 'Robô de combate a incêndio',
    tracking: 'Software Tracking Center',
    viewAll: 'Ver tudo',
    company: 'Empresa',
    aboutUs: 'Sobre nós',
    certification: 'Certificação e conformidade',
    caseStudies: 'Casos de sucesso',
    resources: 'Recursos',
    contact: 'Contato',
    faq: 'Perguntas frequentes',
    getInTouch: 'Fale conosco',
    partner: 'Parceiro comercial para América do Norte e América Latina',
    partnerLine2: 'da Sevnce Robotics',
    demoCta: 'Solicitar uma demonstração online',
    tollFree: 'Linha gratuita',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Todos os direitos reservados.',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
  },
};

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function RedditIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

export default function Footer() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <HazlocMark variant="reversed" className="h-9 w-9" />
              <span className="font-display text-lg font-bold text-white">
                HAZLOC
                <span className="ml-1.5 text-[10px] font-semibold tracking-[0.18em] align-middle text-gold-400">
                  ROBOTICS
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">{t.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-ink-900" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@hazlocrobotics" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-ink-900" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://x.com/hazlocrobotics" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-ink-900" aria-label="X">
                <XIcon size={18} />
              </a>
              <a href="https://www.reddit.com/user/hazloc_robotics/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-ink-900" aria-label="Reddit">
                <RedditIcon size={18} />
              </a>
              <a href="mailto:info@hazlocrobotics.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-ink-900" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.products}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/products/explosion-proof-wheeled-robot-l4s" className="hover:text-gold-400 transition-colors">{t.l4s}</Link></li>
              <li><Link to="/products/explosion-proof-quadruped-robot" className="hover:text-gold-400 transition-colors">{t.quadruped}</Link></li>
              <li><Link to="/products/explosion-proof-tracked-robot" className="hover:text-gold-400 transition-colors">{t.tracked}</Link></li>
              <li><Link to="/products/firefighting-reconnaissance-robot" className="hover:text-gold-400 transition-colors">{t.firefighting}</Link></li>
              <li><Link to="/products/asset-tracking-center-software" className="hover:text-gold-400 transition-colors">{t.tracking}</Link></li>
              <li><Link to="/products" className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1">{t.viewAll} <ArrowRight size={14} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.company}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">{t.aboutUs}</Link></li>
              <li><Link to="/certification" className="hover:text-gold-400 transition-colors">{t.certification}</Link></li>
              <li><Link to="/case-studies" className="hover:text-gold-400 transition-colors">{t.caseStudies}</Link></li>
              <li><Link to="/resources" className="hover:text-gold-400 transition-colors">{t.resources}</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">{t.contact}</Link></li>
              <li><Link to="/faq" className="hover:text-gold-400 transition-colors">{t.faq}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.getInTouch}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span>
                  <a href="tel:+18336575158" className="hover:text-gold-400 transition-colors">1-833-657-5158</a>
                  <span className="text-ink-500"> ({t.tollFree})</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="mailto:info@hazlocrobotics.com" className="hover:text-gold-400 transition-colors">info@hazlocrobotics.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span>{t.partner}<br />{t.partnerLine2}</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary mt-5 text-xs">
              {t.demoCta}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {t.legalName}. {t.rights}
          </p>
          <div className="flex gap-6 text-xs text-ink-500">
            <Link to="/privacy" className="hover:text-ink-300 transition-colors">{t.privacy}</Link>
            <Link to="/terms" className="hover:text-ink-300 transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
