import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../config/store';
import { BotanicalDivider } from './BotanicalOrnament';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-[#B28C4A]/20"
    >
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
            الأسئلة الشائعة
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] mb-3"
          >
            إجابات واضحة قبل الطلب
          </h2>
          <BotanicalDivider variant="light" />
          <p className="text-sm sm:text-base text-[#4C5C52] mt-3">
            كل ما تحتاج معرفته حول بودرة المسواك، عدد مرات الاستخدام، والتوصيل المجاني في المغرب.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-colors duration-150 ${
                  isOpen
                    ? 'bg-[#FAF6EE] border border-[#B28C4A]/60 shadow-[0_14px_30px_-20px_rgba(22,38,29,0.18)]'
                    : 'bg-[#FAF6EE]/70 border border-[#1B3B2B]/12 hover:border-[#B28C4A]/40'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-right px-5 sm:px-7 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded-2xl"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-editorial text-lg sm:text-xl font-bold text-[#B28C4A] tabular-nums-ar shrink-0">
                        {item.index}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-[#16261D]">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 text-[#1B3B2B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-7 pb-6 pt-1 text-sm leading-[1.85] text-[#4C5C52] sm:ps-[60px]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#order"
            className="inline-flex items-center justify-center whitespace-nowrap bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-7 py-3.5 text-sm sm:text-base font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
          >
            أكمل طلبك الآن · 135 درهم شامل التوصيل
          </a>
        </div>
      </div>
    </section>
  );
}
