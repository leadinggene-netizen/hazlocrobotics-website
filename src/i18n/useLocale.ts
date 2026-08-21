import { useLocation } from 'react-router-dom';

export type Locale = 'en' | 'fr' | 'es' | 'pt';

const LOCALE_PREFIXES: Exclude<Locale, 'en'>[] = ['fr', 'es', 'pt'];

export function useLocale(): Locale {
  const { pathname } = useLocation();
  for (const prefix of LOCALE_PREFIXES) {
    if (pathname === `/${prefix}` || pathname.startsWith(`/${prefix}/`)) {
      return prefix;
    }
  }
  return 'en';
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Strips any locale prefix from a pathname, returning the plain English-style path. */
export function stripLocalePrefix(pathname: string): string {
  for (const prefix of LOCALE_PREFIXES) {
    if (pathname === `/${prefix}`) return '/';
    if (pathname.startsWith(`/${prefix}/`)) return pathname.slice(prefix.length + 1);
  }
  return pathname;
}
