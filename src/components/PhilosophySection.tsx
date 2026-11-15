import { PHILOSOPHY_POINTS, STORE_CONFIG } from '../config/store';
import { SafeImage } from './SafeImage';

export function PhilosophySection() {
  return (
    <section id="why-oravia" className="py-16 sm:py-24 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Editorial Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
              لماذا {STORE_CONFIG.brandName}؟
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] leading-snug mb-5"
            >
              فلسفة تجمع بين الأصالة والبساطة الراقية
            </h2>
            <p className="text-sm sm:text-base leading-[1.8] text-[#4C5C52] mb-8">
              وُلدت {STORE_CONFIG.brandName} من قناعة بسيطة: أن العناية اليومية بالفم تستحق أن تكون تجربة هادئة وأنيقة ومتاحة للجميع في المغرب، بمظهر يليق برفّ حمّامك دون تكلف.
            </p>

            <div className="divide-y divide-[#1B3B2B]/12 border-t border-b border-[#1B3B2B]/12">
              {PHILOSOPHY_POINTS.map((point, idx) => (
                <div key={point.title} className="py-5">
                  <h3 className="text-base sm:text-lg font-semibold text-[#16261D] mb-1.5">
                    0{idx + 1}. {point.title}
                  </h3>
                  <p className="text-sm leading-[1.75] text-[#4C5C52]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Frame */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden bg-[#E6DCC8] border border-[#1B3B2B]/10">
              <div className="aspect-[4/4.5] lg:h-full w-full">
                <SafeImage
                  src="/assets/aistudio/4b51519b-3814-44c3-b4a6-d60abf5262d0_031a6183.jpg"
                  alt="تفاصيل الفرشاة الخشبية الطبيعية من ORAVIA على طاولة رخامية مع أوراق النعناع"
                  fallbackTitle="ORAVIA Craft"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
