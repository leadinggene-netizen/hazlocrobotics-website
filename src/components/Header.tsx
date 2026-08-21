import { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import Link from '@/i18n/LocaleLink';
import NavLink from '@/i18n/LocaleNavLink';
import LanguageToggle from '@/i18n/LanguageToggle';
import { useLocale } from '@/i18n/useLocale';

const navItemsByLocale = {
  en: [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Build', to: '/build' },
    { label: 'Certification', to: '/certification' },
    { label: 'Industries', to: '/industries' },
    { label: 'Resources', to: '/resources' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'About', to: '/about' },
  ],
  fr: [
    { label: 'Accueil', to: '/' },
    { label: 'Produits', to: '/products' },
    { label: 'Configurateur', to: '/build' },
    { label: 'Certification', to: '/certification' },
    { label: 'Secteurs', to: '/industries' },
    { label: 'Ressources', to: '/resources' },
    { label: 'Études de cas', to: '/case-studies' },
    { label: 'À propos', to: '/about' },
  ],
  es: [
    { label: 'Inicio', to: '/' },
    { label: 'Productos', to: '/products' },
    { label: 'Configurador', to: '/build' },
    { label: 'Certificación', to: '/certification' },
    { label: 'Industrias', to: '/industries' },
    { label: 'Recursos', to: '/resources' },
    { label: 'Casos de éxito', to: '/case-studies' },
    { label: 'Nosotros', to: '/about' },
  ],
  pt: [
    { label: 'Início', to: '/' },
    { label: 'Produtos', to: '/products' },
    { label: 'Configurador', to: '/build' },
    { label: 'Certificação', to: '/certification' },
    { label: 'Setores', to: '/industries' },
    { label: 'Recursos', to: '/resources' },
    { label: 'Casos de sucesso', to: '/case-studies' },
    { label: 'Sobre', to: '/about' },
  ],
};

const demoCta = {
  en: 'Request Online Demo',
  fr: 'Demande de démo en ligne',
  es: 'Solicitar una demo en línea',
  pt: 'Solicitar uma demonstração online',
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const navItems = navItemsByLocale[locale];

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 20), { once: true });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white transition-transform group-hover:scale-105">
              <Bot size={20} />
            </div>
            <span className={`font-display text-lg font-bold tracking-tight ${scrolled ? 'text-ink-900' : 'text-white'}`}>
              Hazloc<span className="text-gold-500">Robotics</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? scrolled ? 'text-gold-600' : 'text-gold-300'
                      : scrolled
                        ? 'text-ink-600 hover:text-ink-900'
                        : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle
              className={scrolled ? 'border-ink-200 text-ink-600' : 'border-white/30 text-white'}
            />
            <Link to="/contact" className="btn-primary text-xs">
              {demoCta[locale]}
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className={scrolled ? 'text-ink-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-ink-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100 shadow-lg">
          <nav className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? 'bg-teal-50 text-teal-700' : 'text-ink-600 hover:bg-ink-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-4 pt-2">
              <LanguageToggle className="border-ink-200 text-ink-600" />
            </div>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2">
              {demoCta[locale]}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
