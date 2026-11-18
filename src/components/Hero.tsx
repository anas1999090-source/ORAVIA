import { motion } from 'motion/react';
import { STORE_CONFIG } from '../config/store';
import { SafeImage } from './SafeImage';

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7F3EA] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Soft warm sunlit radial halo behind the centered product */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,221,196,0.72)_0%,rgba(247,243,234,0)_70%)]"
        />

        <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Centered Rounded Product Card */}
            <div className="w-[210px] sm:w-[245px] md:w-[260px] aspect-square rounded-2xl overflow-hidden bg-[#EFE7D8] border border-[#B28C4A]/35 shadow-[0_22px_48px_-16px_rgba(22,38,29,0.28)] mb-7">
              <SafeImage
                src={STORE_CONFIG.productImage}
                alt={STORE_CONFIG.productImageAlt}
                loading="eager"
                fallbackTitle="ORAVIA 50g"
                className="w-full h-full object-cover object-[50%_70%]"
              />
            </div>

            {/* Brushed Gold Brand Title */}
            <p
              dir="ltr"
              className="text-xl sm:text-2xl font-bold tracking-[0.22em] uppercase text-[#C4A35A] mb-2"
            >
              {STORE_CONFIG.brandName}
            </p>

            {/* Primary Centered Headline */}
            <h1
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-5xl font-bold leading-[1.25] text-[#1B3B2B] mb-2.5"
            >
              عناية طبيعية بفمك كل يوم
            </h1>

            {/* Quiet Subtitle */}
            <p className="text-xs sm:text-sm text-[#5A685E] mb-6">
              {STORE_CONFIG.productName} · {STORE_CONFIG.productSpec}
            </p>

            {/* Centered Supporting Copy */}
            <p className="text-base sm:text-lg leading-[1.8] text-[#4C5C52] max-w-xl mx-auto mb-8">
              بودرة المسواك الطبيعية من ORAVIA بتركيبة ناعمة مستوحاة من الطبيعة، تمنحك نظافة يومية لطيفة وإحساساً متجدداً بالانتعاش.
            </p>

            {/* Prominent Forest Green CTA Button */}
            <a
              href="#order"
              className="inline-flex items-center justify-center whitespace-nowrap bg-[#1B3B2B] hover:bg-[#132B1F] text-[#FAF6EE] px-9 py-4 rounded-xl text-base sm:text-lg font-semibold shadow-[0_14px_30px_-12px_rgba(27,59,43,0.5)] transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
            >
              اطلب الآن · الدفع عند الاستلام ({STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel})
            </a>

            {/* Unboxed Trust & Free Shipping Note */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#5A685E]">
              <span className="font-medium text-[#1B3B2B]">توصيل مجاني لجميع مدن المغرب</span>
              <span aria-hidden="true" className="text-[#B28C4A]">·</span>
              <span>السعر {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel} فقط</span>
              <span aria-hidden="true" className="text-[#B28C4A]">·</span>
              <span>الدفع عند الاستلام</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architectural Forest Green Offer Strip */}
      <div className="bg-[#152C21] border-y border-[#C8A464]/30 py-3.5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2 text-xs sm:text-sm text-[#E6DCC8]">
          <span>بودرة المسواك الطبيعية · 50 غرام</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span className="text-[#DFC086] font-medium">توصيل مجاني لجميع مدن المغرب</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span>الدفع عند الاستلام</span>
          <span aria-hidden="true" className="text-[#C8A464]">·</span>
          <span className="text-[#DFC086] font-semibold tabular-nums-ar">
            {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}
          </span>
        </div>
      </div>
    </>
  );
}
