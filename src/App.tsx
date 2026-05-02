import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CompressionPage from './pages/CompressionPage';
import ExtensionPage from './pages/ExtensionPage';
import TorsionPage from './pages/TorsionPage';
import BarrelPage from './pages/BarrelPage';
import WireFormsPage from './pages/WireFormsPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './components/insights/InsightsPage';
import QuotePage from './pages/QuotePage';

function AppShell() {
  const navigate = useNavigate();

  const goQuote = () => navigate('/quote');

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/compression-springs" element={<CompressionPage />} />
        <Route path="/extension-springs" element={<ExtensionPage />} />
        <Route path="/torsion-springs" element={<TorsionPage />} />
        <Route path="/barrel-springs" element={<BarrelPage />} />
        <Route path="/wire-forms" element={<WireFormsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage onQuoteClick={goQuote} />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
