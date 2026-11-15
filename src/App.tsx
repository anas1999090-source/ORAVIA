import { BenefitsSection } from './components/BenefitsSection';
import { CollectionSection } from './components/CollectionSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToUseSection } from './components/HowToUseSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OrderSection } from './components/OrderSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ReviewsSection } from './components/ReviewsSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#16261D]">
      <Header />
      <main className="flex-1">
        <Hero />
        <CollectionSection />
        <BenefitsSection />
        <HowToUseSection />
        <PhilosophySection />
        <ReviewsSection />
        <OrderSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
