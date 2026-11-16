import { BENEFITS } from '../config/store';
import { BotanicalBranchBackdrop, BotanicalDivider } from './BotanicalOrnament';

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#152C21] via-[#11251B] to-[#152C21] text-[#FAF6EE]"
    >
      {/* Subtle warm radial glow & gold botanical silhouette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -end-20 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(200,164,100,0.12)_0%,rgba(21,44,33,0)_70%)]"
      />
      <BotanicalBranchBackdrop className="pointer-events-none hidden lg:block absolute -bottom-12 -end-8 w-64 h-80 opacity-15" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Intro Column */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#DFC086] mb-3">
              العناية اليومية بالفم
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-editorial text-3xl sm:text-4xl font-bold leading-snug text-[#FAF6EE] mb-4"
            >
              توازن يومي بين النظافة والانتعاش
            </h2>
            <div className="flex justify-start mb-5">
              <BotanicalDivider variant="dark" />
            </div>
            <p className="text-sm sm:text-base leading-[1.85] text-[#E6DCC8]/90 mb-8">
              صُممت مجموعة ORAVIA لترافق روتينك اليومي بلطف وانتظام، فتمنحك إحساساً مريحاً بنظافة الفم ونفساً منتعشاً دون تعقيد.
            </p>
            <div className="pt-5 border-t border-[#C8A464]/25 text-xs leading-relaxed text-[#E6DCC8]/80">
              ملاحظة توضيحية: منتجات ORAVIA مخصصة للعناية اليومية والتجميلية بالفم والأسنان، ولا تُعد علاجاً طبياً ولا تغني عن متابعة طبيب الأسنان المختص.
            </div>
          </div>

          {/* 2x2 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((item) => (
              <div
                key={item.index}
                className="group rounded-2xl bg-[#1B3B2B]/70 border border-[#C8A464]/25 hover:border-[#C8A464]/55 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_16px_34px_-22px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#C8A464]/20">
                  <span className="font-editorial text-2xl font-bold text-[#DFC086] tabular-nums-ar">
                    {item.index}.
                  </span>
                  <span className="text-[11px] text-[#C8A464]/80">روتين يومي</span>
                </div>
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
