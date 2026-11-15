import { useState, type FormEvent } from 'react';
import {
  Check,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import {
  MOROCCAN_CITIES,
  PRODUCTS,
  STORE_CONFIG,
} from '../config/store';
import { SafeImage } from './SafeImage';

interface OrderFormValues {
  fullName: string;
  phone: string;
  city: string;
  customCity: string;
  address: string;
  quantity: number;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  city?: string;
  address?: string;
}

const INITIAL_FORM: OrderFormValues = {
  fullName: '',
  phone: '',
  city: '',
  customCity: '',
  address: '',
  quantity: 1,
};

function normalizeMoroccanPhone(raw: string): string {
  return raw.replace(/[\s\-().]/g, '');
}

function isValidMoroccanPhone(raw: string): boolean {
  const cleaned = normalizeMoroccanPhone(raw);
  return /^(0[5-7]\d{8}|(\+?212)[5-7]\d{8})$/.test(cleaned);
}

export function OrderSection() {
  const [form, setForm] = useState<OrderFormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedOrder, setPreparedOrder] = useState<{
    message: string;
    whatsappUrl: string;
    resolvedCity: string;
    totalMAD: number;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const unitPrice = STORE_CONFIG.priceMAD;
  const totalMAD = unitPrice * form.quantity;

  const resolvedCity =
    form.city === 'مدينة أخرى' ? form.customCity.trim() : form.city.trim();

  const updateQuantity = (delta: number) => {
    setForm((prev) => ({
      ...prev,
      quantity: Math.min(10, Math.max(1, prev.quantity + delta)),
    }));
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (form.fullName.trim().length < 3) {
      nextErrors.fullName = 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل).';
    }

    if (!isValidMoroccanPhone(form.phone)) {
      nextErrors.phone =
        'يرجى إدخال رقم هاتف مغربي صحيح (مثال: 0612345678 أو +212612345678).';
    }

    if (!resolvedCity) {
      nextErrors.city = 'يرجى اختيار أو كتابة المدينة.';
    }

    if (form.address.trim().length < 6) {
      nextErrors.address = 'يرجى كتابة عنوان التوصيل بشكل واضح.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const lines = [
      `السلام عليكم، أود طلب ${STORE_CONFIG.kitName}:`,
      `---------------------------`,
      `الاسم الكامل: ${form.fullName.trim()}`,
      `رقم الهاتف: ${normalizeMoroccanPhone(form.phone)}`,
      `المدينة: ${resolvedCity}`,
      `عنوان التوصيل: ${form.address.trim()}`,
      `الكمية: ${form.quantity}`,
      `السعر الإجمالي: ${totalMAD} ${STORE_CONFIG.currencyLabel} (${STORE_CONFIG.currencyCode})`,
      `طريقة الدفع: الدفع عند الاستلام`,
    ];

    const message = lines.join('\n');
    const cleanWhatsapp = STORE_CONFIG.whatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;

    setCopied(false);
    setPreparedOrder({
      message,
      whatsappUrl,
      resolvedCity,
      totalMAD,
    });

    // توجيه العميل مباشرة إلى واتساب عند إرسال الاستمارة
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!preparedOrder) return;
    try {
      await navigator.clipboard.writeText(preparedOrder.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="order" className="py-16 sm:py-24 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-medium text-[#7A6234] mb-2">
            الطلب السريع والدفع عند الاستلام
          </p>
          <h2
            style={{ textWrap: 'balance' }}
            className="font-editorial text-3xl sm:text-4xl font-bold text-[#16261D] mb-3"
          >
            احصل على مجموعة ORAVIA الكاملة
          </h2>
          <p className="text-sm sm:text-base text-[#4C5C52]">
            أدخل معلومات التوصيل أدناه لتجهيز طلبك وإرساله مباشرة عبر واتساب لتأكيد الشحن إلى مدينتك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kit Summary & Pricing Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#FAF6EE] border border-[#1B3B2B]/12 overflow-hidden">
            <div className="aspect-[4/3] w-full bg-[#EFE7D8] overflow-hidden">
              <SafeImage
                src={STORE_CONFIG.heroImage}
                alt={STORE_CONFIG.heroImageAlt}
                fallbackTitle="ORAVIA Box"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-[#1B3B2B]/10">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#16261D]">
                    {STORE_CONFIG.kitName}
                  </h3>
                  <p className="text-xs text-[#4C5C52] mt-1">
                    السعر قابل للتعديل من إعدادات المتجر
                  </p>
                </div>
                <div className="text-left shrink-0">
                  <span className="font-editorial text-3xl font-bold text-[#1B3B2B] tabular-nums-ar">
                    {unitPrice}
                  </span>{' '}
                  <span className="text-sm font-medium text-[#16261D]">
                    {STORE_CONFIG.currencyLabel}
                  </span>
                </div>
              </div>

              <ul className="py-5 space-y-2.5 text-sm text-[#4C5C52] border-b border-[#1B3B2B]/10">
                {PRODUCTS.map((product) => (
                  <li key={product.id} className="flex items-center justify-between gap-3">
                    <span className="text-[#16261D] font-medium">{product.name}</span>
                    <span className="text-xs text-[#7A6234]">{product.spec}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 flex items-center justify-between text-sm">
                <span className="text-[#4C5C52]">الإجمالي ({form.quantity} × {unitPrice} {STORE_CONFIG.currencyLabel})</span>
                <span className="text-lg font-bold text-[#16261D] tabular-nums-ar">
                  {totalMAD} {STORE_CONFIG.currencyLabel}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#4C5C52]">
                <ShieldCheck className="w-4 h-4 text-[#1B3B2B] shrink-0" aria-hidden="true" />
                <span>{STORE_CONFIG.deliveryNote}</span>
              </div>
            </div>
          </div>

          {/* Order Form / Prepared WhatsApp Order Panel */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FDFBF7] border border-[#1B3B2B]/12 p-6 sm:p-8 lg:p-10">
            {preparedOrder ? (
              <div className="space-y-6">
                <div className="pb-5 border-b border-[#1B3B2B]/10">
                  <p className="text-xs font-medium text-[#7A6234] mb-1">
                    تم التوجيه إلى واتساب
                  </p>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#16261D] mb-2">
                    جاري تحويلك إلى واتساب لتأكيد الطلب
                  </h3>
                  <p className="text-sm text-[#4C5C52] leading-relaxed">
                    إذا لم تفتح محادثة واتساب تلقائياً، اضغط على زر المتابعة أدناه لإرسال تفاصيل طلبك مباشرة.
                  </p>
                </div>

                <div className="rounded-xl bg-[#F2ECE0]/70 border border-[#1B3B2B]/10 p-5 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-[#4C5C52]">الاسم الكامل</span>
                    <span className="font-medium text-[#16261D]">{form.fullName}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[#4C5C52]">الهاتف</span>
                    <span dir="ltr" className="font-medium text-[#16261D] tabular-nums-ar">
                      {normalizeMoroccanPhone(form.phone)}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[#4C5C52]">المدينة</span>
                    <span className="font-medium text-[#16261D]">{preparedOrder.resolvedCity}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[#4C5C52]">العنوان</span>
                    <span className="font-medium text-[#16261D] text-left">{form.address}</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 border-t border-[#1B3B2B]/10">
                    <span className="font-semibold text-[#16261D]">المبلغ الإجمالي عند الاستلام</span>
                    <span className="font-bold text-[#1B3B2B] tabular-nums-ar">
                      {preparedOrder.totalMAD} {STORE_CONFIG.currencyLabel}
                    </span>
                  </div>
                </div>

                {STORE_CONFIG.isWhatsappPlaceholder && (
                  <p className="text-xs text-[#7A6234] bg-[#F2ECE0] rounded-lg px-4 py-3 border border-[#B28C4A]/30">
                    تنبيه لإعداد المتجر: رقم الواتساب المضبوط حالياً هو رقم تجريبي (212600000000). يمكنك تعديله من ملف الإعدادات قبل النشر.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={preparedOrder.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-6 py-4 text-base font-medium rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    <span>فتح واتساب وإرسال الطلب الآن</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-[#16261D] bg-[#F2ECE0] hover:bg-[#E6DCC8] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#1B3B2B]" aria-hidden="true" />
                        <span>تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>نسخ التفاصيل</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setPreparedOrder(null)}
                  className="inline-flex items-center gap-2 text-sm text-[#4C5C52] hover:text-[#16261D] transition-colors"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>تعديل معلومات الطلب</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-[#1B3B2B]/10">
                  <h3 className="text-xl font-semibold text-[#16261D]">
                    استمارة الطلب المباشر
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4C5C52] mt-1">
                    الدفع نقداً عند استلام الطرد في جميع المدن المغربية.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[#16261D] mb-1.5"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.fullName}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, fullName: e.target.value }));
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="مثال: سارة العلمي"
                      className="w-full rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-4 py-3 text-sm text-[#16261D] placeholder:text-[#4C5C52]/60 focus:outline-none focus:border-[#1B3B2B] focus:ring-2 focus:ring-[#1B3B2B]/15"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-700">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#16261D] mb-1.5"
                    >
                      رقم الهاتف (واتساب)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="06 12 34 56 78"
                      className="w-full text-right rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-4 py-3 text-sm text-[#16261D] placeholder:text-[#4C5C52]/60 focus:outline-none focus:border-[#1B3B2B] focus:ring-2 focus:ring-[#1B3B2B]/15 tabular-nums-ar"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-[#16261D] mb-1.5"
                    >
                      المدينة
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={form.city}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, city: e.target.value }));
                        if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                      }}
                      className="w-full rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-4 py-3 text-sm text-[#16261D] focus:outline-none focus:border-[#1B3B2B] focus:ring-2 focus:ring-[#1B3B2B]/15"
                    >
                      <option value="">اختر مدينتك</option>
                      {MOROCCAN_CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {form.city === 'مدينة أخرى' && (
                      <input
                        type="text"
                        aria-label="اسم المدينة"
                        value={form.customCity}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, customCity: e.target.value }));
                          if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                        }}
                        placeholder="اكتب اسم مدينتك"
                        className="mt-2.5 w-full rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-4 py-3 text-sm text-[#16261D] focus:outline-none focus:border-[#1B3B2B]"
                      />
                    )}
                    {errors.city && (
                      <p className="mt-1.5 text-xs text-red-700">{errors.city}</p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <span className="block text-sm font-medium text-[#16261D] mb-1.5">
                      الكمية
                    </span>
                    <div className="flex items-center justify-between rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-3 py-1.5 h-[46px]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(-1)}
                        disabled={form.quantity <= 1}
                        aria-label="إنقاص الكمية"
                        className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#16261D] hover:bg-[#E6DCC8] disabled:opacity-40 transition-colors"
                      >
                        <Minus className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <span className="text-base font-semibold text-[#16261D] tabular-nums-ar">
                        {form.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(1)}
                        disabled={form.quantity >= 10}
                        aria-label="زيادة الكمية"
                        className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#16261D] hover:bg-[#E6DCC8] disabled:opacity-40 transition-colors"
                      >
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[#16261D] mb-1.5"
                  >
                    العنوان الكامل للتوصيل
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    autoComplete="street-address"
                    required
                    value={form.address}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, address: e.target.value }));
                      if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                    }}
                    placeholder="الحي، الشارع، رقم الإقامة أو الشقة..."
                    className="w-full rounded-xl bg-[#FAF6EE] border border-[#1B3B2B]/20 px-4 py-3 text-sm text-[#16261D] placeholder:text-[#4C5C52]/60 focus:outline-none focus:border-[#1B3B2B] focus:ring-2 focus:ring-[#1B3B2B]/15 resize-none"
                  />
                  {errors.address && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.address}</p>
                  )}
                </div>

                {/* Primary Submit CTA */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#1B3B2B] text-[#FAF6EE] hover:bg-[#132B1F] px-6 py-4 text-base font-semibold rounded-xl shadow-[0_12px_28px_-12px_rgba(27,59,43,0.45)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
                >
                  <span>أطلب مجموعتك الآن</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums-ar text-[#DFC086]">
                    {totalMAD} {STORE_CONFIG.currencyLabel}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
