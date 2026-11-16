import { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, STORE_CONFIG } from '../config/store';
import { BotanicalBranchBackdrop } from './BotanicalOrnament';
import { SafeImage } from './SafeImage';

const HERO_GALLERY = [
  {
    id: 'kit',
    label: 'المجموعة الكاملة',
    src: STORE_CONFIG.heroImage,
    alt: STORE_CONFIG.heroImageAlt,
  },
  ...PRODUCTS.map((p) => ({
    id: p.id,
    label: p.name,
    src: p.image,
    alt: p.alt,
  })),
];

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentMedia = HERO_GALLERY[activeImageIndex];

  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF6EE] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Warm sunlit ambient glow + delicate botanical line art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 start-1/4 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(200,164,100,0.16)_0%,rgba(250,246,238,0)_70%)]"
        />
        <BotanicalBranchBackdrop className="pointer-events-none hidden lg:block absolute -bottom-10 -start-10 w-64 h-80 opacity-20" />

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Editorial Copy Column */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#B28C4A]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-medium text-[#7A6234] tracking-wide">
                  {STORE_CONFIG.brandName} · {STORE_CONFIG.brandTaglineArabic}
                </p>
              </div>

              <h1
                style={{ textWrap: 'balance' }}
                className="font-editorial text-[clamp(2.35rem,4.6vw,4rem)] font-bold leading-[1.16] text-[#16261D] mb-5"
              >
                ابتسامتك تبدأ من{' '}
                <span className="text-[#1B3B2B] underline decoration-[#C8A464]/70 decoration-2 underline-offset-8">
                  عناية طبيعية
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-[1.8] text-[#4C5C52] max-w-xl mb-8">
                اكتشف تجربة ORAVIA للعناية اليومية بالفم، بمكونات مستوحاة من الطبيعة وتصميم فاخر يجمع بين بودرة المسواك، بخاخ الانتعاش، والفرشاة الخشبية.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#order"
                  className="group inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 bg-gradient-to-l from-[#1B3B2B] to-[#132B1F] text-[#FAF6EE] hover:from-[#132B1F] hover:to-[#0F2218] px-8 py-4 text-base font-semibold rounded-xl shadow-[0_14px_30px_-10px_rgba(27,59,43,0.5)] border border-[#C8A464]/35 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
                >
                  <span>اطلب الآن</span>
                  <span className="text-[#DFC086] font-normal tabular-nums-ar">
                    · {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
                  </span>
                  <ArrowLeft
                    className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#collection"
                  className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-6 py-4 text-sm sm:text-base font-medium text-[#16261D] hover:text-[#1B3B2B] bg-[#FDFBF7] border border-[#1B3B2B]/20 hover:border-[#B28C4A] rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
                >
                  استكشف المجموعة
                </a>
              </div>

              {/* Grounded unboxed trust indicators */}
              <div className="pt-6 border-t border-[#B28C4A]/25 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#4C5C52]">
                <span className="font-medium text-[#16261D]">الدفع عند الاستلام</span>
                <span aria-hidden="true" className="text-[#B28C4A]">✦</span>
                <span>توصيل لجميع مدن المغرب</span>
                <span aria-hidden="true" className="text-[#B28C4A]">✦</span>
                <span>مجموعة متكاملة من 3 قطع</span>
              </div>
            </motion.div>

            {/* Product Composition Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-4"
            >
              <div className="relative flex-1 rounded-t-[150px] rounded-b-2xl sm:rounded-t-[190px] overflow-hidden bg-[#EFE7D8] border-2 border-[#C8A464]/45 shadow-[0_28px_70px_-24px_rgba(22,38,29,0.28)]">
                <div className="aspect-[4/4.5] sm:aspect-[4/4.3] lg:h-full lg:min-h-[490px] w-full">
                  <SafeImage
                    key={currentMedia.id}
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    loading="eager"
                    fallbackTitle="ORAVIA Collection"
                    className="w-full h-full object-cover object-center transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2218]/92 via-[#0F2218]/55 to-transparent p-5 sm:p-7 flex items-end justify-between gap-4">
                  <div className="text-[#FAF6EE]">
                    <p className="text-xs text-[#DFC086] mb-0.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{currentMedia.label}</span>
                    </p>
                    <p className="font-editorial text-lg sm:text-xl font-bold">
                      {STORE_CONFIG.kitName}
                    </p>
                  </div>
                  <div className="text-left shrink-0 text-[#FAF6EE] bg-[#152C21]/85 border border-[#C8A464]/45 rounded-xl px-4 py-2">
                    <span className="block text-[10px] text-[#E6DCC8]">السعر الكامل</span>
                    <span className="font-editorial text-xl sm:text-2xl font-bold tabular-nums-ar text-[#DFC086]">
                      {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Gallery Thumbnails */}
              <div
                aria-label="معاينة صور المجموعة"
                className="grid grid-cols-4 gap-2.5 sm:gap-3"
              >
                {HERO_GALLERY.map((item, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`عرض ${item.label}`}
                      aria-pressed={isActive}
                      className={`group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] ${
                        isActive
                          ? 'ring-2 ring-[#B28C4A] ring-offset-2 ring-offset-[#FAF6EE] shadow-md'
                          : 'opacity-75 hover:opacity-100 border border-[#1B3B2B]/15'
                      }`}
                    >
                      <SafeImage
                        src={item.src}
                        alt={item.alt}
                        loading="eager"
                        fallbackTitle={item.label}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architectural Gold-Accent Brand Ribbon */}
      <div className="bg-[#152C21] border-y border-[#C8A464]/30 py-3.5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2 text-xs sm:text-sm text-[#E6DCC8]">
          <span>مستوحاة من المسواك والنعناع</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span>علبة فاخرة من 3 قطع</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span>توصيل سريع في المغرب</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span className="text-[#DFC086] font-medium tabular-nums-ar">
            {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel} فقط
          </span>
        </div>
      </div>
    </>
  );
}
