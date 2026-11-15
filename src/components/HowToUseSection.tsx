import { useState } from 'react';
import { ROUTINE_MODES } from '../config/store';
import { SafeImage } from './SafeImage';

type RoutineKey = keyof typeof ROUTINE_MODES;

export function HowToUseSection() {
  const [activeMode, setActiveMode] = useState<RoutineKey>('daily');
  const currentRoutine = ROUTINE_MODES[activeMode];

  const activeImage =
    activeMode === 'daily'
      ? {
          src: '/assets/aistudio/15d646cb-996f-478f-8873-6a241f37f921_fe04f3fb.jpg',
          alt: 'فتح عبوة بودرة المسواك من ORAVIA ضمن الروتين الصباحي والمسائي',
        }
      : {
          src: '/assets/aistudio/33ab3d3b-29e6-44c6-92d5-db4af7841a7f_d2843d75.jpg',
          alt: 'استخدام بخاخ الفم المنعش من ORAVIA أثناء التنقل',
        };

  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-[#FAF6EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
              طريقة الاستخدام اليومي
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D]"
            >
              خطوات بسيطة لروتين متكامل
            </h2>
          </div>

          {/* Interactive Segmented Control */}
          <div
            role="tablist"
            aria-label="اختيار وقت الروتين"
            className="inline-flex items-center p-1 bg-[#F2ECE0] rounded-lg border border-[#1B3B2B]/10 self-start md:self-auto"
          >
            {(Object.keys(ROUTINE_MODES) as RoutineKey[]).map((key) => {
              const selected = activeMode === key;
              return (
                <button
                  key={key}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveMode(key)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] ${
                    selected
                      ? 'bg-[#1B3B2B] text-[#FAF6EE]'
                      : 'text-[#4C5C52] hover:text-[#16261D]'
                  }`}
                >
                  {ROUTINE_MODES[key].label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Steps List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#4C5C52] mb-6">
              {currentRoutine.subtitle}
            </p>

            <div className="space-y-4">
              {currentRoutine.steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-[#F2ECE0]/70 border border-[#1B3B2B]/10 p-6 flex items-start gap-5"
                >
                  <span className="font-editorial text-3xl font-bold text-[#B28C4A] leading-none pt-0.5 tabular-nums-ar shrink-0">
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
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl overflow-hidden bg-[#EFE7D8] border border-[#1B3B2B]/10">
              <div className="aspect-[4/5] lg:h-full w-full">
                <SafeImage
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fallbackTitle="ORAVIA Routine"
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
