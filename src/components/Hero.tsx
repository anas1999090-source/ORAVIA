import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { STORE_CONFIG } from '../config/store';
import { SafeImage } from './SafeImage';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6EE] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Editorial Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] tracking-wide mb-4">
              {STORE_CONFIG.brandName} · {STORE_CONFIG.brandTaglineArabic}
            </p>

            <h1
              style={{ textWrap: 'balance' }}
              className="font-editorial text-[clamp(2.25rem,4.5vw,3.85rem)] font-bold leading-[1.18] text-[#16261D] mb-5"
            >
              ابتسامتك تبدأ من عناية طبيعية
            </h1>

            <p className="text-base sm:text-lg leading-[1.75] text-[#4C5C52] max-w-xl mb-8">
              اكتشف تجربة ORAVIA للعناية اليومية بالفم، بمكونات مستوحاة من الطبيعة وتصميم أنيق يجمع بين المسواك والنعناع والخشب الطبيعي.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-7 py-3.5 text-base font-medium rounded-lg shadow-[0_10px_24px_-10px_rgba(27,59,43,0.45)] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
              >
                <span>اطلب الآن</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#collection"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-5 py-3.5 text-sm sm:text-base font-medium text-[#16261D] hover:text-[#1B3B2B] border border-[#1B3B2B]/20 hover:border-[#1B3B2B]/45 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
              >
                استكشف المجموعة
              </a>
            </div>

            {/* Grounded unboxed trust indicators */}
            <div className="pt-6 border-t border-[#1B3B2B]/12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#4C5C52]">
              <span>الدفع عند الاستلام</span>
              <span aria-hidden="true" className="text-[#B28C4A]">·</span>
              <span>توصيل لجميع مدن المغرب</span>
              <span aria-hidden="true" className="text-[#B28C4A]">·</span>
              <span>مجموعة متكاملة من 3 قطع</span>
              <span aria-hidden="true" className="text-[#B28C4A]">·</span>
              <span className="font-semibold text-[#16261D] tabular-nums-ar">
                {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
              </span>
            </div>
          </motion.div>

          {/* Product Composition Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full rounded-t-[140px] rounded-b-2xl sm:rounded-t-[180px] overflow-hidden bg-[#EFE7D8] border border-[#B28C4A]/30 shadow-[0_24px_60px_-24px_rgba(22,38,29,0.22)]">
              <div className="aspect-[4/4.6] sm:aspect-[4/4.4] lg:h-full lg:min-h-[520px] w-full">
                <SafeImage
                  src={STORE_CONFIG.heroImage}
                  alt={STORE_CONFIG.heroImageAlt}
                  loading="eager"
                  fallbackTitle="ORAVIA Collection"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2218]/90 via-[#0F2218]/50 to-transparent p-5 sm:p-7 flex items-end justify-between gap-4">
                <div className="text-[#FAF6EE]">
                  <p className="text-xs text-[#E6DCC8] mb-0.5">الإصدار الكامل للعناية اليومية</p>
                  <p className="font-editorial text-lg sm:text-xl font-bold">
                    {STORE_CONFIG.kitName}
                  </p>
                </div>
                <div className="text-left shrink-0 text-[#FAF6EE]">
                  <span className="block text-[11px] text-[#E6DCC8]">السعر الكامل</span>
                  <span className="font-editorial text-xl sm:text-2xl font-bold tabular-nums-ar text-[#DFC086]">
                    {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
