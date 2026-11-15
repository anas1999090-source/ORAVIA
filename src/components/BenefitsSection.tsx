import { BENEFITS } from '../config/store';

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#152C21] text-[#FAF6EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Intro Column */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#C8A464] mb-3">
              العناية اليومية بالفم
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold leading-snug text-[#FAF6EE] mb-5"
            >
              توازن يومي بين النظافة والانتعاش
            </h2>
            <p className="text-sm sm:text-base leading-[1.8] text-[#E6DCC8]/90 mb-8">
              صُممت مجموعة ORAVIA لترافق روتينك اليومي بلطف وانتظام، فتمنحك إحساساً مريحاً بنظافة الفم ونفساً منتعشاً دون تعقيد.
            </p>
            <div className="pt-5 border-t border-[#FAF6EE]/12 text-xs leading-relaxed text-[#E6DCC8]/75">
              ملاحظة توضيحية: منتجات ORAVIA مخصصة للعناية اليومية والتجميلية بالفم والأسنان، ولا تُعد علاجاً طبياً ولا تغني عن متابعة طبيب الأسنان المختص.
            </div>
          </div>

          {/* 2x2 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((item) => (
              <div
                key={item.index}
                className="rounded-2xl bg-[#1B3B2B]/65 border border-[#C8A464]/20 p-6 sm:p-7"
              >
                <span className="block font-editorial text-2xl font-bold text-[#C8A464] mb-3 tabular-nums-ar">
                  {item.index}.
                </span>
                <h3 className="text-lg font-semibold text-[#FAF6EE] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.75] text-[#E6DCC8]/90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
