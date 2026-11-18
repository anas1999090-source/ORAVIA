import { useEffect, useState } from 'react';
import { STORE_CONFIG } from '../config/store';

export function MobileStickyBar() {
  const [hideBar, setHideBar] = useState(false);

  useEffect(() => {
    const orderEl = document.getElementById('order');
    if (!orderEl || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBar(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(orderEl);
    return () => observer.disconnect();
  }, []);

  if (hideBar) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#1B3B2B]/15 px-4 py-2.5 shadow-[0_-8px_24px_-12px_rgba(15,34,24,0.2)]">
      <div className="flex items-center justify-between gap-4">
        <div className="leading-tight">
          <span className="block text-[11px] text-[#7A6234] font-medium">
            توصيل مجاني بالمغرب
          </span>
          <span className="font-editorial text-lg font-bold text-[#16261D] tabular-nums-ar">
            {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
          </span>
        </div>

        <a
          href="#order"
          className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
        >
          اطلب الآن
        </a>
      </div>
    </div>
  );
}
