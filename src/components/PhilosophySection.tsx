import { PHILOSOPHY_POINTS, STORE_CONFIG } from '../config/store';
import { SafeImage } from './SafeImage';

export function PhilosophySection() {
  return (
    <section id="why-oravia" className="py-16 sm:py-24 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Editorial Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B28C4A]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-medium text-[#7A6234]">
                لماذا {STORE_CONFIG.brandName}؟
              </p>
            </div>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] leading-snug mb-5"
            >
              فلسفة تجمع بين الأصالة والبساطة الراقية
            </h2>
            <p className="text-sm sm:text-base leading-[1.85] text-[#4C5C52] mb-8">
              وُلدت {STORE_CONFIG.brandName} من قناعة بسيطة: أن العناية اليومية بالفم تستحق أن تكون تجربة هادئة وأنيقة ومتاحة للجميع في المغرب، بمظهر يليق برفّ حمّامك دون تكلف.
            </p>

            <div className="divide-y divide-[#B28C4A]/25 border-t border-b border-[#B28C4A]/25">
              {PHILOSOPHY_POINTS.map((point, idx) => (
                <div key={point.title} className="py-5 flex items-start gap-4">
                  <span className="font-editorial text-xl font-bold text-[#B28C4A] tabular-nums-ar shrink-0 pt-0.5">
                    0{idx + 1}.
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#16261D] mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-[1.75] text-[#4C5C52]">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Frame */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#E6DCC8] border border-[#B28C4A]/35 shadow-[0_24px_54px_-24px_rgba(22,38,29,0.22)]">
              <div className="aspect-[4/4.5] lg:h-full w-full">
                <SafeImage
                  src="/assets/aistudio/4b51519b-3814-44c3-b4a6-d60abf5262d0_031a6183.jpg"
                  alt="تفاصيل الفرشاة الخشبية الطبيعية من ORAVIA على طاولة رخامية مع أوراق النعناع"
                  fallbackTitle="ORAVIA Craft"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2218]/90 via-[#0F2218]/40 to-transparent p-6">
                <p dir="ltr" className="font-editorial text-lg text-[#DFC086] tracking-wide text-right">
                  Rooted in Nature. Made for Modern Care.
                </p>
                <p className="text-xs text-[#FAF6EE]/90 mt-1">
                  جذور مستوحاة من الطبيعة · تصميم لعناية يومية عصرية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
