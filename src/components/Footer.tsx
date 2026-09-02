import { Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
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
    getInTouch: 'Get in Touch',
    partner: 'North & Latin America commercial partner',
    partnerLine2: 'for Sevnce Robotics',
    demoCta: 'Request Online Demo',
    tollFree: 'Toll-Free',
    legalName: 'Hazloc Robotics Inc',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
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
    getInTouch: 'Nous joindre',
    partner: 'Partenaire commercial pour l\'Amérique du Nord et l\'Amérique latine',
    partnerLine2: 'de Sevnce Robotics',
    demoCta: 'Demande de démo en ligne',
    tollFree: 'Sans frais',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    cookies: 'Politique de témoins',
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
    getInTouch: 'Contáctenos',
    partner: 'Socio comercial para Norteamérica y América Latina',
    partnerLine2: 'de Sevnce Robotics',
    demoCta: 'Solicitar una demo en línea',
    tollFree: 'Línea gratuita',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Términos de servicio',
    cookies: 'Política de cookies',
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
    getInTouch: 'Fale conosco',
    partner: 'Parceiro comercial para América do Norte e América Latina',
    partnerLine2: 'da Sevnce Robotics',
    demoCta: 'Solicitar uma demonstração online',
    tollFree: 'Linha gratuita',
    legalName: 'Hazloc Robotics Inc',
    rights: 'Todos os direitos reservados.',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Serviço',
    cookies: 'Política de Cookies',
  },
};

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
            <a href="#" className="hover:text-ink-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-ink-300 transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-ink-300 transition-colors">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
