import { MessageSquareQuote } from 'lucide-react';
import { REVIEW_PLACEHOLDERS } from '../config/store';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF6EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
              تجارب العملاء
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D]"
            >
              مساحة مخصصة لآراء عملائنا
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4C5C52] max-w-md leading-relaxed">
            نلتزم بالشفافية التامة؛ البطاقات التالية نماذج جاهزة وسيتم استبدالها بالتقييمات الحقيقية فور استلام آراء المشترين الأوائل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEW_PLACEHOLDERS.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-[#FDFBF7] border border-dashed border-[#1B3B2B]/25 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-medium text-[#7A6234]">
                    {item.slotLabel}
                  </span>
                  <MessageSquareQuote
                    className="w-4 h-4 text-[#B28C4A]"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-sm leading-[1.8] text-[#4C5C52] mb-6">
                  «{item.quotePlaceholder}»
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B3B2B]/10 text-xs text-[#4C5C52] flex items-center justify-between gap-2">
                <span className="font-semibold text-[#16261D]">
                  {item.customerPlaceholder}
                </span>
                <span>{item.cityPlaceholder}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
