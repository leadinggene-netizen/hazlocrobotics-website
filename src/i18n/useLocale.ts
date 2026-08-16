import { useLocation } from 'react-router-dom';

export type Locale = 'en' | 'fr';

export function useLocale(): Locale {
  const { pathname } = useLocation();
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return path === '/' ? '/fr' : `/fr${path}`;
}
