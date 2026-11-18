import { ArrowLeft } from 'lucide-react';
import { PRODUCT_FEATURES, STORE_CONFIG } from '../config/store';
import { BotanicalBranchBackdrop, BotanicalDivider } from './BotanicalOrnament';
import { SafeImage } from './SafeImage';

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#152C21] via-[#11251B] to-[#152C21] text-[#FAF6EE]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -end-20 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(200,164,100,0.14)_0%,rgba(21,44,33,0)_70%)]"
      />
      <BotanicalBranchBackdrop className="pointer-events-none hidden lg:block absolute -bottom-12 -end-8 w-64 h-80 opacity-15" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#DFC086] mb-2">
            مميزات المنتج
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF6EE] leading-snug mb-3"
          >
            لماذا يختار عملاؤنا بودرة المسواك ORAVIA؟
          </h2>
          <BotanicalDivider variant="dark" />
          <p className="text-sm sm:text-base text-[#E6DCC8]/90 leading-relaxed mt-3">
            عناية يومية متوازنة بالفم تجمع بين نعومة الاستخدام، جودة التغليف الفاخر، وسهولة الروتين اليومي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Product Visual Spotlight */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#1B3B2B] border border-[#C8A464]/35 shadow-[0_24px_54px_-22px_rgba(0,0,0,0.45)] flex flex-col justify-between">
              <div className="aspect-[4/4.6] lg:flex-1 w-full overflow-hidden">
                <SafeImage
                  src={STORE_CONFIG.productImage}
                  alt={STORE_CONFIG.productImageAlt}
                  fallbackTitle="ORAVIA 50g"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5 sm:p-6 bg-[#0F2218]/90 border-t border-[#C8A464]/25 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#DFC086]">{STORE_CONFIG.productSpec}</p>
                  <p className="text-base font-semibold text-[#FAF6EE]">
                    {STORE_CONFIG.productName}
                  </p>
                </div>
                <a
                  href="#order"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 bg-[#C8A464] text-[#0F2218] hover:bg-[#DFC086] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>اطلب بـ {STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel}</span>
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* 4 Features Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {PRODUCT_FEATURES.map((item) => (
                <div
                  key={item.index}
                  className="rounded-2xl bg-[#1B3B2B]/70 border border-[#C8A464]/25 hover:border-[#C8A464]/55 p-6 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3.5 border-b border-[#C8A464]/20">
                      <span className="font-editorial text-2xl font-bold text-[#DFC086] tabular-nums-ar">
                        {item.index}.
                      </span>
                      <span className="text-[11px] text-[#C8A464]">{item.subtitle}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FAF6EE] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-[1.75] text-[#E6DCC8]/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs leading-relaxed text-[#E6DCC8]/75 pt-4 border-t border-[#C8A464]/20">
              ملاحظة توضيحية: بودرة المسواك ORAVIA منتج عناية يومية وتجميلية بالفم والأسنان، ولا يُعد علاجاً طبياً ولا يغني عن استشارة طبيب الأسنان.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
