import { STORE_CONFIG } from '../config/store';
import { BrandMark } from './BrandMark';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2218] text-[#FAF6EE] pt-14 pb-24 md:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#FAF6EE]/12">
          <div className="md:col-span-5">
            <BrandMark variant="light" className="mb-4" />
            <p className="text-sm leading-[1.8] text-[#E6DCC8]/80 max-w-sm">
              {STORE_CONFIG.productName} ({STORE_CONFIG.productSpec}) — عناية يومية بالفم مستوحاة من الطبيعة بسعر 135 درهم شامل التوصيل المجاني بالمغرب.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-[#C8A464] mb-4">روابط الصفحة</h3>
            <ul className="space-y-2.5 text-sm text-[#E6DCC8]/85">
              <li>
                <a href="#features" className="hover:text-[#FAF6EE] transition-colors">
                  مميزات المنتج
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-[#FAF6EE] transition-colors">
                  طريقة الاستخدام
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF6EE] transition-colors">
                  آراء العملاء
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#FAF6EE] transition-colors">
                  اطلب الآن ({STORE_CONFIG.priceMAD} {STORE_CONFIG.currencyLabel} · توصيل مجاني)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-[#C8A464] mb-4">الطلب والتوصيل</h3>
            <p className="text-sm leading-[1.8] text-[#E6DCC8]/85">
              توصيل مجاني متاح لجميع مدن المملكة المغربية مع الدفع عند الاستلام.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6DCC8]/65">
          <p>© {currentYear} {STORE_CONFIG.brandName}. جميع الحقوق محفوظة.</p>
          <p>منتج عناية يومية بالفم · لا يغني عن استشارة طبيب الأسنان</p>
        </div>
      </div>
    </footer>
  );
}
