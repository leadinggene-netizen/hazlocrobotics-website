import { useNavigate, useLocation } from 'react-router-dom';
import { useLocale, stripLocalePrefix, localizePath, type Locale } from './useLocale';

interface LanguageToggleProps {
  className?: string;
}

const LANGS: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
];

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const locale = useLocale();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value as Locale;
    const plainPath = stripLocalePrefix(pathname);
    navigate(localizePath(plainPath, nextLocale));
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label="Select language"
      className={`rounded-lg border bg-transparent px-2 py-1 text-xs font-bold tracking-wide cursor-pointer outline-none ${className}`}
    >
      {LANGS.map((l) => (
        <option key={l.code} value={l.code} className="text-ink-900">
          {l.label}
        </option>
      ))}
    </select>
  );
}
