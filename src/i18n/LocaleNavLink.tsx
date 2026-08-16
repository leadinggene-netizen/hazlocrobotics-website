import { forwardRef } from 'react';
import { NavLink as RouterNavLink, type NavLinkProps } from 'react-router-dom';
import { useLocale, localizePath } from './useLocale';

/** Drop-in replacement for react-router-dom's NavLink, locale-aware like LocaleLink. */
const LocaleNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function LocaleNavLink(
  { to, ...props },
  ref
) {
  const locale = useLocale();

  let resolvedTo = to;
  if (typeof to === 'string') {
    const isExternalOrSpecial = /^([a-z]+:|#)/i.test(to) || to.startsWith('http');
    resolvedTo = isExternalOrSpecial ? to : localizePath(to, locale);
  }

  return <RouterNavLink ref={ref} to={resolvedTo} {...props} />;
});

export default LocaleNavLink;
