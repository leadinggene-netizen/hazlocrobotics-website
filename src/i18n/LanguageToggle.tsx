import { Link, useLocation } from 'react-router-dom';
import { useLocale } from './useLocale';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const locale = useLocale();
  const { pathname } = useLocation();

  const englishPath = locale === 'fr' ? pathname.replace(/^\/fr(\/|$)/, '/') : pathname;
  const frenchPath = locale === 'en' ? (pathname === '/' ? '/fr' : `/fr${pathname}`) : pathname;

  return (
    <div className={`inline-flex overflow-hidden rounded-lg border ${className}`}>
      <Link
        to={englishPath || '/'}
        aria-current={locale === 'en' ? 'page' : undefined}
        className={`px-2.5 py-1 text-xs font-bold tracking-wide transition-colors ${
          locale === 'en' ? 'bg-teal-600 text-white' : 'text-inherit hover:bg-black/5'
        }`}
      >
        EN
      </Link>
      <Link
        to={frenchPath}
        aria-current={locale === 'fr' ? 'page' : undefined}
        className={`px-2.5 py-1 text-xs font-bold tracking-wide transition-colors border-l ${
          locale === 'fr' ? 'bg-teal-600 text-white' : 'text-inherit hover:bg-black/5'
        }`}
      >
        FR
      </Link>
    </div>
  );
}
