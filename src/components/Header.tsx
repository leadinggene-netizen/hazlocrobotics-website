import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown, Bot } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products', hasMega: true },
  { label: 'Build', to: '/build' },
  { label: 'Certification', to: '/certification' },
  { label: 'Industries', to: '/industries', hasMega: true },
  { label: 'Resources', to: '/resources' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <Link to="/contact" className="btn-primary text-xs">
              Request Online Demo
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
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2">
              Request Online Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
