import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS, STORE_CONFIG, type ProductItem } from '../config/store';
import { BotanicalDivider } from './BotanicalOrnament';
import { SafeImage } from './SafeImage';

export function CollectionSection() {
  const [selectedId, setSelectedId] = useState<string>(PRODUCTS[0].id);
  const selectedProduct: ProductItem =
    PRODUCTS.find((p) => p.id === selectedId) ?? PRODUCTS[0];

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
            مكونات العلبة الفاخرة
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] leading-snug mb-3"
          >
            ثلاث قطع متكاملة لروتينك اليومي
          </h2>
          <BotanicalDivider variant="light" />
          <p className="text-sm sm:text-base text-[#4C5C52] leading-relaxed mt-3">
            تأتي كل علبة من {STORE_CONFIG.brandName} منسقة بعناية في حافظة مخملية خضراء لتجمع بين التنظيف اليومي اللطيف والانتعاش العملي.
          </p>
        </div>

        {/* 3-Column Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => {
            const isSelected = product.id === selectedId;
            return (
              <article
                key={product.id}
                onClick={() => setSelectedId(product.id)}
                className={`group cursor-pointer rounded-2xl bg-[#FAF6EE] overflow-hidden transition-all duration-200 flex flex-col ${
                  isSelected
                    ? 'shadow-[0_22px_48px_-18px_rgba(22,38,29,0.28)] ring-2 ring-[#B28C4A]'
                    : 'border border-[#1B3B2B]/12 hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(22,38,29,0.2)]'
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E6DCC8]">
                  <SafeImage
                    src={product.image}
                    alt={product.alt}
                    fallbackTitle={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F2218]/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <span className="absolute top-4 start-4 font-editorial text-sm font-bold text-[#FAF6EE] bg-[#152C21]/85 border border-[#C8A464]/50 px-3 py-1 rounded-lg tabular-nums-ar">
                    {product.index}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-xs text-[#7A6234] font-medium mb-1.5 tabular-nums-ar">
                      {product.spec}
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#16261D] mb-2.5 group-hover:text-[#1B3B2B] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm leading-[1.75] text-[#4C5C52] mb-5">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#B28C4A]/20 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(product.id);
                      }}
                      className={`text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded px-1 py-0.5 ${
                        isSelected
                          ? 'text-[#1B3B2B] underline underline-offset-4 decoration-[#B28C4A]'
                          : 'text-[#4C5C52] hover:text-[#16261D]'
                      }`}
                    >
                      {isSelected ? 'مختارة للعرض أدناه' : 'عرض دورها في الروتين'}
                    </button>

                    <span className="text-xs text-[#7A6234] whitespace-nowrap">ضمن المجموعة</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Active Product Usage Highlight Bar */}
        <div className="mt-8 rounded-2xl bg-[#152C21] text-[#FAF6EE] border border-[#C8A464]/35 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_20px_44px_-22px_rgba(15,34,24,0.45)]">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-16 h-16 rounded-xl overflow-hidden border border-[#C8A464]/45 shrink-0">
              <SafeImage
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                fallbackTitle={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-[#DFC086] font-medium mb-1">
                دور القطعة في الروتين · {selectedProduct.name}
              </p>
              <p className="text-sm sm:text-base text-[#FAF6EE] leading-relaxed">
                {selectedProduct.usageNote}
              </p>
            </div>
          </div>

          <a
            href="#order"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 bg-[#C8A464] text-[#0F2218] hover:bg-[#DFC086] px-6 py-3 text-sm font-semibold rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC086]"
          >
            <span>اطلب المجموعة ({STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel})</span>
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
