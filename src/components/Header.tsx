import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

const NAV_LINKS = [
  { href: '#features', label: 'المميزات' },
  { href: '#how-to-use', label: 'طريقة الاستخدام' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
  { href: '#order', label: 'الطلب' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative md:sticky md:top-0 z-40 bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#1B3B2B]/8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          aria-label="ORAVIA الصفحة الرئيسية"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded-md"
        >
          <BrandMark variant="dark" />
        </a>

        {/* Zone 2: Clean single-line Navigation Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4C5C52]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#16261D] transition-colors duration-150 border-b border-transparent hover:border-[#B28C4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#order"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-6 py-2.5 text-sm font-semibold rounded-xl shadow-[0_6px_16px_-6px_rgba(27,59,43,0.4)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
          >
            اطلب الآن
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#16261D] hover:bg-[#EFE8D8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="قائمة الهاتف"
          className="md:hidden bg-[#F7F3EA] border-t border-[#1B3B2B]/10 px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 text-base font-medium text-[#16261D] hover:bg-[#EFE8D8] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 px-4 bg-[#1B3B2B] text-[#FAF6EE] font-semibold rounded-xl"
            >
              اطلب الآن
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
