import { useState } from 'react';
import { PRODUCTS, STORE_CONFIG, type ProductItem } from '../config/store';
import { SafeImage } from './SafeImage';

export function CollectionSection() {
  const [selectedId, setSelectedId] = useState<string>(PRODUCTS[0].id);
  const selectedProduct: ProductItem =
    PRODUCTS.find((p) => p.id === selectedId) ?? PRODUCTS[0];

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
              مكونات العلبة الفاخرة
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] leading-snug"
            >
              ثلاث قطع متكاملة لروتينك اليومي
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4C5C52] max-w-md leading-relaxed">
            تأتي كل علبة من {STORE_CONFIG.brandName} منسقة بعناية لتجمع بين التنظيف اليومي اللطيف والانتعاش العملي طوال اليوم.
          </p>
        </div>

        {/* 3-Column Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => {
            const isSelected = product.id === selectedId;
            return (
              <article
                key={product.id}
                className={`group rounded-2xl bg-[#FAF6EE] overflow-hidden transition-all duration-200 flex flex-col ${
                  isSelected
                    ? 'shadow-[0_18px_40px_-18px_rgba(22,38,29,0.22)] ring-1 ring-[#1B3B2B]/35'
                    : 'border border-[#1B3B2B]/10 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgba(22,38,29,0.16)]'
                }`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#E6DCC8]">
                  <SafeImage
                    src={product.image}
                    alt={product.alt}
                    fallbackTitle={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#7A6234] font-medium mb-2 tabular-nums-ar">
                      <span>{product.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.spec}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#16261D] mb-2.5">
                      {product.name}
                    </h3>

                    <p className="text-sm leading-[1.75] text-[#4C5C52] mb-5">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1B3B2B]/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedId(product.id)}
                      className={`text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded px-2 py-1 ${
                        isSelected
                          ? 'text-[#1B3B2B] underline underline-offset-4 decoration-[#B28C4A]'
                          : 'text-[#4C5C52] hover:text-[#16261D]'
                      }`}
                    >
                      {isSelected ? 'تفاصيل القطعة أدناه' : 'عرض دورها في الروتين'}
                    </button>

                    <span className="text-xs text-[#4C5C52] whitespace-nowrap">ضمن المجموعة</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Active Product Usage Highlight Bar */}
        <div className="mt-8 rounded-2xl bg-[#FAF6EE] border border-[#1B3B2B]/12 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#7A6234] font-medium mb-1">
              دور القطعة المختارة · {selectedProduct.name}
            </p>
            <p className="text-sm sm:text-base text-[#16261D] leading-relaxed">
              {selectedProduct.usageNote}
            </p>
          </div>
          <a
            href="#order"
            className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
          >
            اطلب المجموعة كاملة ({STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel})
          </a>
        </div>
      </div>
    </section>
  );
}
