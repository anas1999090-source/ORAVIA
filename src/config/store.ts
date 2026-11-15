export interface ProductItem {
  id: string;
  index: string;
  name: string;
  spec: string;
  shortDescription: string;
  usageNote: string;
  image: string;
  alt: string;
}

export interface RoutineStep {
  step: string;
  title: string;
  timing: string;
  description: string;
}

export interface BenefitItem {
  index: string;
  title: string;
  description: string;
}

export interface ReviewPlaceholder {
  id: string;
  slotLabel: string;
  customerPlaceholder: string;
  cityPlaceholder: string;
  quotePlaceholder: string;
}

/**
 * إعدادات المتجر القابلة للتعديل بسهولة قبل الإطلاق
 * ---------------------------------------------------
 * - عدّل السعر من `priceMAD`
 * - عدّل رقم الواتساب من `whatsappNumber` بصيغة دولية بدون علامة + (مثال: 212612345678)
 */
export const STORE_CONFIG = {
  brandName: 'ORAVIA',
  brandTaglineArabic: 'العناية الطبيعية بالفم',
  currencyCode: 'MAD',
  currencyLabel: 'درهم',
  priceMAD: 150,
  /**
   * رقم واتساب الاستقبال الفعلي
   * الرقم المغربي: 0774776387 -> بالصيغة الدولية: 212774776387
   */
  whatsappNumber: '212774776387',
  isWhatsappPlaceholder: false,
  kitName: 'مجموعة ORAVIA المتكاملة للعناية بالفم',
  deliveryNote: 'توصيل لجميع مدن المغرب · الدفع عند الاستلام',
  heroImage: '/assets/aistudio/4dff1570-69d0-483d-83a3-fec7aa02c5bf_09a35efd.jpg',
  heroImageAlt: 'علبة مجموعة ORAVIA الفاخرة للعناية بالفم وتضم بودرة المسواك وبخاخ الفم وفرشاة الأسنان الخشبية',
};

export const MOROCCAN_CITIES = [
  'الدار البيضاء',
  'الرباط',
  'مراكش',
  'طنجة',
  'فاس',
  'أكادير',
  'مكناس',
  'وجدة',
  'القنيطرة',
  'تطوان',
  'المحمدية',
  'تمارة',
  'سلا',
  'بني ملال',
  'الناظور',
  'آسفي',
  'الجديدة',
  'خريبكة',
  'العيون',
  'مدينة أخرى',
] as const;

export const PRODUCTS: ProductItem[] = [
  {
    id: 'miswak-powder',
    index: '01',
    name: 'بودرة المسواك الطبيعية',
    spec: 'الوزن الصافي 50 غ',
    shortDescription:
      'مسحوق ناعم مستوحى من المسواك التقليدي في عبوة أنيقة محكمة الإغلاق، مصمم ليمنحك خطوة تنظيف لطيفة ضمن روتينك اليومي.',
    usageNote: 'تُستخدم مع الفرشاة الخشبية المبللة كخطوة أساسية في الروتين.',
    image: '/assets/aistudio/15d646cb-996f-478f-8873-6a241f37f921_fe04f3fb.jpg',
    alt: 'عبوة بودرة المسواك ORAVIA بحجم 50 غرام مفتوحة على سطح رخامي',
  },
  {
    id: 'miswak-spray',
    index: '02',
    name: 'بخاخ المسواك للفم',
    spec: 'عبوة عملية 30 مل',
    shortDescription:
      'بخاخ منعش سهل الحمل في الحقيبة أو الجيب، يجدد إحساس الانتعاش والنظافة في الفم بعد الوجبات أو قبل المواعيد.',
    usageNote: 'بختان خفيفتان داخل الفم في أي وقت خلال اليوم.',
    image: '/assets/aistudio/33ab3d3b-29e6-44c6-92d5-db4af7841a7f_d2843d75.jpg',
    alt: 'بخاخ الفم المنعش من ORAVIA مع أوراق النعناع الطازجة',
  },
  {
    id: 'wooden-toothbrush',
    index: '03',
    name: 'فرشاة أسنان خشبية طبيعية',
    spec: 'مقبض خشبي مريح',
    shortDescription:
      'فرشاة بتصميم انسيابي من الخشب الطبيعي وشعيرات ناعمة تمنحك تحكماً مريحاً وتنظيفاً متوازناً يراعي حساسية اللثة.',
    usageNote: 'مثالية للاستخدام اليومي مع بودرة المسواك أو المعجون المعتاد.',
    image: '/assets/aistudio/4b51519b-3814-44c3-b4a6-d60abf5262d0_031a6183.jpg',
    alt: 'فرشاة أسنان خشبية طبيعية بشعيرات داكنة من ORAVIA',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    index: '01',
    title: 'نظافة يومية لطيفة',
    description:
      'صُممت المجموعة لتكون جزءاً بسيطاً من روتينك الصباحي والمسائي، مما يساعد على الحفاظ على نظافة الفم والأسنان بشكل يومي منتظم.',
  },
  {
    index: '02',
    title: 'إحساس منتعش للنفس',
    description:
      'يجمع بخاخ الفم بين سهولة الاستخدام وإحساس الانتعاش الفوري، ليبقى نفسك لطيفاً خلال العمل واللقاءات والتنقل.',
  },
  {
    index: '03',
    title: 'عناية مستوحاة من الطبيعة',
    description:
      'رؤية تستلهم بساطة المسواك والنعناع والخشب الطبيعي في تقديم تجربة عناية متناسقة بعيداً عن المبالغة والتعقيد.',
  },
  {
    index: '04',
    title: 'روتين متكامل في خطوات واضحة',
    description:
      'كل قطعة داخل العلبة تؤدي دوراً محدداً يكمل الآخر، لتمنحك عناية منظمة وعملية في المنزل وخارجه.',
  },
];

export const ROUTINE_MODES: Record<
  'daily' | 'onthego',
  { label: string; subtitle: string; steps: RoutineStep[] }
> = {
  daily: {
    label: 'الروتين الصباحي والمسائي',
    subtitle: 'ثلاث خطوات هادئة في المنزل لبداية يوم منتعش ونهاية نظيفة.',
    steps: [
      {
        step: '01',
        title: 'تهيئة الفرشاة الخشبية',
        timing: 'صباحاً ومساءً',
        description:
          'بلل شعيرات الفرشاة الخشبية بقليل من الماء الفاتر ثم انفض الفائض بلطف.',
      },
      {
        step: '02',
        title: 'التنظيف ببودرة المسواك',
        timing: 'دقيقتان بلطف',
        description:
          'اغمس طرف الفرشاة في كمية صغيرة من بودرة المسواك، ونظّف الأسنان بحركات دائرية هادئة ثم اشطف الفم جيداً بالماء.',
      },
      {
        step: '03',
        title: 'لمسة الانتعاش الختامية',
        timing: 'بعد الشطف',
        description:
          'استخدم بختين من بخاخ المسواك للفم لإضفاء إحساس فوري بالنظافة والانتعاش يدوم معك.',
      },
    ],
  },
  onthego: {
    label: 'الانتعاش أثناء التنقل',
    subtitle: 'عناية سريعة ومرتبة في العمل أو السفر أو بعد الوجبات.',
    steps: [
      {
        step: '01',
        title: 'شطف سريع بالماء',
        timing: 'بعد الوجبات',
        description:
          'ابدأ بشطف الفم بالماء بعد القهوة أو الطعام لتجديد الإحساس بالراحة.',
      },
      {
        step: '02',
        title: 'رشة من بخاخ ORAVIA',
        timing: 'في أي لحظة',
        description:
          'رش بختين من بخاخ المسواك المحمول (30 مل) لانتعاش سريع ومناسب قبل الاجتماعات.',
      },
      {
        step: '03',
        title: 'حفظ المجموعة بأناقة',
        timing: 'جاهزة دائماً',
        description:
          'يتميز البخاخ بحجمه المدمج وغطائه المحكم ليرافقك بسهولة في الجيب أو حقيبة اليد.',
      },
    ],
  },
};

export const PHILOSOPHY_POINTS = [
  {
    title: 'جذور تقليدية برؤية معاصرة',
    text: 'تستلهم ORAVIA تقاليد العناية الطبيعية بالمسواك وتعيد تقديمها في عبوات مدروسة تلائم أسلوب الحياة الحديث في المغرب.',
  },
  {
    title: 'تفاصيل فاخرة بسعر في المتناول',
    text: 'حرصنا على أن تمنحك المجموعة إحساس المنتجات العالمية الراقية — من ملمس العلبة حتى القطع الثلاث — بسعر عادل وواضح.',
  },
  {
    title: 'وضوح وشفافية تامة',
    text: 'نقدم منتجات عناية يومية بالفم بوعود واقعية واضحة، دون ادعاءات طبية مبالغ فيها، مع خدمة طلب مباشر وسهل عبر الهاتف أو واتساب.',
  },
];

export const REVIEW_PLACEHOLDERS: ReviewPlaceholder[] = [
  {
    id: 'slot-1',
    slotLabel: 'نموذج تقييم 01 · قابل للتعديل',
    customerPlaceholder: '[اسم العميل أو العميلة]',
    cityPlaceholder: '[المدينة · مثال: الدار البيضاء]',
    quotePlaceholder:
      'مساحة مخصصة لإضافة رأي حقيقي لعميل بعد تجربة مجموعة ORAVIA، مع ذكر انطباعه حول التغليف وسهولة الروتين اليومي.',
  },
  {
    id: 'slot-2',
    slotLabel: 'نموذج تقييم 02 · قابل للتعديل',
    customerPlaceholder: '[اسم العميل أو العميلة]',
    cityPlaceholder: '[المدينة · مثال: الرباط]',
    quotePlaceholder:
      'مساحة مخصصة لإضافة تقييم حقيقي حول بخاخ الفم المنعش وتجربة الاستخدام اليومي خارج المنزل.',
  },
  {
    id: 'slot-3',
    slotLabel: 'نموذج تقييم 03 · قابل للتعديل',
    customerPlaceholder: '[اسم العميل أو العميلة]',
    cityPlaceholder: '[المدينة · مثال: مراكش]',
    quotePlaceholder:
      'مساحة مخصصة لإضافة انطباع عميل حقيقي حول جودة العلبة والفرشاة الخشبية وتجربة التوصيل.',
  },
];
