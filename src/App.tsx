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

// Every route is declared twice: once at its plain English path, and once
// under /fr/* for the French version. Page components detect which locale
// they're rendering via useLocale() (based on the /fr prefix) and render
// their own bilingual content accordingly — see src/i18n/useLocale.ts.
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
];

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routeDefs.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {routeDefs.map((r) => (
            <Route
              key={`fr-${r.path}`}
              path={r.path === '/' ? '/fr' : `/fr${r.path}`}
              element={r.element}
            />
          ))}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
