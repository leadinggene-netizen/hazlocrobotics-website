import { forwardRef } from 'react';
import { Link as RouterLink, type LinkProps } from 'react-router-dom';
import { useLocale, localizePath } from './useLocale';

/**
 * Drop-in replacement for react-router-dom's Link that automatically
 * prefixes internal paths with /fr when the current page is French.
 * External links, anchors (#...), and mailto:/tel: links pass through unchanged.
 */
const LocaleLink = forwardRef<HTMLAnchorElement, LinkProps>(function LocaleLink(
  { to, ...props },
  ref
) {
  const locale = useLocale();

  let resolvedTo = to;
  if (typeof to === 'string') {
    const isExternalOrSpecial =
      /^([a-z]+:|#)/i.test(to) || to.startsWith('http');
    resolvedTo = isExternalOrSpecial ? to : localizePath(to, locale);
  }

  return <RouterLink ref={ref} to={resolvedTo} {...props} />;
});

export default LocaleLink;
