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

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsHubPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/build" element={<BuildRobotPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/industries" element={<IndustriesHubPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/resources" element={<ResourcesHubPage />} />
          <Route path="/resources/:slug" element={<ResourceDetailPage />} />
          <Route path="/case-studies" element={<CaseStudiesHubPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
