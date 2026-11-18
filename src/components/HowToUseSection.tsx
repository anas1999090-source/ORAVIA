import { useState } from 'react';
import { STORE_CONFIG, USAGE_STEPS } from '../config/store';
import { SafeImage } from './SafeImage';

export function HowToUseSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-[#FAF6EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
              طريقة الاستعمال
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D]"
            >
              ثلاث خطوات بسيطة لعناية يومية
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4C5C52] max-w-md">
            يمكنك استعمال بودرة المسواك صباحاً ومساءً ضمن روتينك المعتاد بسهولة تامة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Steps List */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {USAGE_STEPS.map((item, idx) => {
              const isActiveStep = idx === activeStepIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-right rounded-2xl p-6 flex items-start gap-5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] ${
                    isActiveStep
                      ? 'bg-[#FDFBF7] border border-[#B28C4A] shadow-[0_14px_34px_-18px_rgba(22,38,29,0.2)]'
                      : 'bg-[#F2ECE0]/75 border border-[#1B3B2B]/10 hover:bg-[#F2ECE0]'
                  }`}
                >
                  <span
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-editorial text-xl font-bold tabular-nums-ar shrink-0 transition-colors ${
                      isActiveStep
                        ? 'bg-[#1B3B2B] text-[#DFC086]'
                        : 'bg-[#E6DCC8] text-[#7A6234]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-semibold text-[#16261D]">
                        {item.title}
                      </h3>
                      <span className="text-xs text-[#7A6234] font-medium">
                        {item.timing}
                      </span>
                    </div>
                    <p className="text-sm leading-[1.75] text-[#4C5C52]">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Product Visual */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-t-[130px] rounded-b-2xl overflow-hidden bg-[#EFE7D8] border border-[#B28C4A]/35 shadow-[0_24px_54px_-24px_rgba(22,38,29,0.22)]">
              <div className="aspect-[4/5] lg:h-full w-full">
                <SafeImage
                  src={STORE_CONFIG.productImage}
                  alt={STORE_CONFIG.productImageAlt}
                  fallbackTitle="ORAVIA Miswak Powder"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2218]/90 via-[#0F2218]/45 to-transparent p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-[#DFC086]">
                  {STORE_CONFIG.productName} · {STORE_CONFIG.productSpec}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
