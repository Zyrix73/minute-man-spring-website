import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import SpringCalculators from './components/calculators/SpringCalculators';
import Industries from './components/Industries';
import About from './components/About';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import InsightsPage from './components/insights/InsightsPage';

type Page = 'home' | 'insights';

function App() {
  const [page, setPage] = useState<Page>('home');

  const goHome = () => {
    setPage('home');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const goQuote = () => {
    setPage('home');
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const goInsights = () => {
    setPage('insights');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen">
      <Header onInsightsClick={goInsights} onLogoClick={page !== 'home' ? goHome : undefined} />
      {page === 'insights' ? (
        <InsightsPage onNavigateHome={goHome} onQuoteClick={goQuote} />
      ) : (
        <>
          <Hero />
          <StatsBar />
          <Products />
          <WhyUs />
          <SpringCalculators />
          <Industries />
          <About />
          <FAQ />
          <QuoteForm />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
