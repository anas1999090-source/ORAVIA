import { MessageCircle } from 'lucide-react';
import { FaqSection } from './components/FaqSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowToUseSection } from './components/HowToUseSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OrderSection } from './components/OrderSection';
import { ReviewsSection } from './components/ReviewsSection';
import { STORE_CONFIG } from './config/store';

export default function App() {
  const whatsappDirectUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber.replace(/\D/g, '')}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#16261D]">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <HowToUseSection />
        <ReviewsSection />
        <FaqSection />
        <OrderSection />
      </main>
      <Footer />
      <MobileStickyBar />

      {/* Floating WhatsApp Direct Chat Button (Desktop) */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 w-13 h-13 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-[0_10px_24px_-6px_rgba(37,211,102,0.55)] transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
}
