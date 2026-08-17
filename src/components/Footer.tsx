import { Bot, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
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
    partnerLine2: 'for Qiteng Robotics',
    demoCta: 'Request Online Demo',
    legalName: 'Hazlocrobotics LLC, a Delaware Company',
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
    partnerLine2: 'de Qiteng Robotics',
    demoCta: 'Demande de démo en ligne',
    legalName: 'Hazlocrobotics LLC, une société du Delaware',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    cookies: 'Politique de témoins',
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
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
                <Bot size={20} />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Hazloc<span className="text-gold-500">Robotics</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">{t.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:info@hazlocrobotics.com" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 transition-colors hover:bg-teal-600 hover:text-white" aria-label="Email">
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
