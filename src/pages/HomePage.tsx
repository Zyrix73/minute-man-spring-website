import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import SpringCalculators from '../components/calculators/SpringCalculators';
import Industries from '../components/Industries';
import About from '../components/About';
import FAQ from '../components/FAQ';
import QuoteForm from '../components/QuoteForm';

export default function HomePage() {
  return (
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
  );
}
