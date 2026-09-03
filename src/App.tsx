import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ProductsHubPage from '@/pages/ProductsHubPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import BuildRobotPage from '@/pages/BuildRobotPage';
import CertificationPage from '@/pages/CertificationPage';
import IndustriesHubPage from '@/pages/IndustriesHubPage';
import IndustryDetailPage from '@/pages/IndustryDetailPage';
import ResourcesHubPage from '@/pages/ResourcesHubPage';
import ResourceDetailPage from '@/pages/ResourceDetailPage';
import CaseStudiesHubPage from '@/pages/CaseStudiesHubPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';

// Every route is declared once per locale: plain English path, plus /fr/*,
// /es/*, /pt/*. Page components detect which locale they're rendering via
// useLocale() (based on the path prefix) and render their own localized
// content accordingly — see src/i18n/useLocale.ts.
const LOCALE_PREFIXES = ['fr', 'es', 'pt'];

const routeDefs: { path: string; element: JSX.Element }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsHubPage /> },
  { path: '/products/:slug', element: <ProductDetailPage /> },
  { path: '/build', element: <BuildRobotPage /> },
  { path: '/certification', element: <CertificationPage /> },
  { path: '/industries', element: <IndustriesHubPage /> },
  { path: '/industries/:slug', element: <IndustryDetailPage /> },
  { path: '/resources', element: <ResourcesHubPage /> },
  { path: '/resources/:slug', element: <ResourceDetailPage /> },
  { path: '/case-studies', element: <CaseStudiesHubPage /> },
  { path: '/case-studies/:slug', element: <CaseStudyDetailPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/privacy', element: <PrivacyPolicyPage /> },
  { path: '/terms', element: <TermsPage /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routeDefs.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {LOCALE_PREFIXES.flatMap((prefix) =>
            routeDefs.map((r) => (
              <Route
                key={`${prefix}-${r.path}`}
                path={r.path === '/' ? `/${prefix}` : `/${prefix}${r.path}`}
                element={r.element}
              />
            ))
          )}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
