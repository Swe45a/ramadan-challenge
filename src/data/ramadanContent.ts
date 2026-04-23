export interface RamadanItem {
  day: number;
  type: "wisdom" | "ayah" | "hadith";
  text: string;
  reference?: string;
  tafseer?: string;
  application: string[];
}

export const ramadanContent: RamadanItem[] = [
  {
    day: 1,
    type: "wisdom",
    text: "خيرُ الناسِ أنفعُهم للناس.",
    reference: "حديث حسن",
    application: [
      "ساعد شخصًا اليوم بمعلومة.",
      "انشر فائدة بسيطة."
    ]
  },
  {
    day: 2,
    type: "ayah",
    text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    reference: "الطلاق 2",
    application: [
      "توكل على الله في أمر يقلقك.",
      "راجع نيتك اليوم."
    ]
  },
  {
    day: 3,
    type: "hadith",
    text: "أحبُّ الأعمالِ إلى اللهِ أدومُها وإن قلّ.",
    reference: "رواه البخاري",
    application: [
      "ابدأ عادة صغيرة ثابتة.",
      "خصص دقيقة ذكر يومية."
    ]
  },
  {
    day: 4,
    type: "wisdom",
    text: "رمضان فرصة لإحياء القلب قبل العادات.",
    application: [
      "خفف المشتتات اليوم.",
      "اجعل لك خلوة قصيرة."
    ]
  },
  {
    day: 5,
    type: "ayah",
    text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    reference: "البقرة 153",
    application: [
      "اصبر على ما يزعجك.",
      "تجنب الرد السريع."
    ]
  },
  {
    day: 6,
    type: "hadith",
    text: "الصيام جُنّة.",
    reference: "رواه البخاري",
    application: [
      "اضبط لسانك اليوم.",
      "ابتعد عن الغضب."
    ]
  },
  {
    day: 7,
    type: "wisdom",
    text: "كل يوم في رمضان بداية جديدة.",
    application: [
      "صحح خطأ الأمس.",
      "ابدأ بنية صادقة."
    ]
  },
  {
    day: 8,
    type: "ayah",
    text: "ادْعُونِي أَسْتَجِبْ لَكُمْ",
    reference: "غافر 60",
    application: [
      "ادعُ دعوة من قلبك.",
      "ادعُ لوالديك."
    ]
  },
  {
    day: 9,
    type: "hadith",
    text: "تبسُّمُك في وجهِ أخيك صدقة.",
    reference: "رواه الترمذي",
    application: [
      "ابتسم اليوم للجميع.",
      "انشر طاقة إيجابية."
    ]
  },
  {
    day: 10,
    type: "wisdom",
    text: "النية الصادقة تغيّر قيمة العمل.",
    application: [
      "راجع نيتك قبل أي عمل.",
      "اجعل عملك خالصًا."
    ]
  },
  {
    day: 11,
    type: "ayah",
    text: "وَتَوَكَّلْ عَلَى اللَّهِ",
    reference: "الأحزاب 3",
    application: [
      "سلّم أمرك لله.",
      "لا تقلق على المستقبل."
    ]
  },
  {
    day: 12,
    type: "hadith",
    text: "من لا يَرحم لا يُرحم.",
    reference: "رواه البخاري",
    application: [
      "كن لينًا اليوم.",
      "سامح من أخطأ."
    ]
  },
  {
    day: 13,
    type: "wisdom",
    text: "العادات الصغيرة تصنع فرقًا كبيرًا.",
    application: [
      "حافظ على ورد يومي.",
      "قلل عادة سلبية."
    ]
  },
  {
    day: 14,
    type: "ayah",
    text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    reference: "الشرح 6",
    application: [
      "ثق أن الفرج قريب.",
      "لا تيأس."
    ]
  },
  {
    day: 15,
    type: "hadith",
    text: "الدالُّ على الخير كفاعله.",
    reference: "رواه مسلم",
    application: [
      "شارك فكرة نافعة.",
      "دلّ شخصًا على عبادة."
    ]
  },
  {
    day: 16,
    type: "wisdom",
    text: "منتصف الطريق لا يعني التوقف.",
    application: [
      "جدد حماسك.",
      "راجع أهدافك الرمضانية."
    ]
  },
  {
    day: 17,
    type: "ayah",
    text: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
    reference: "آل عمران 134",
    application: [
      "أحسن في عملك.",
      "افعل خيرًا خفيًا."
    ]
  },
  {
    day: 18,
    type: "hadith",
    text: "إنما الأعمال بالنيات.",
    reference: "رواه البخاري ومسلم",
    application: [
      "صحح نيتك.",
      "اجعل عملك لله."
    ]
  },
  {
    day: 19,
    type: "wisdom",
    text: "الهدوء قوة لا ضعف.",
    application: [
      "اختر الصمت عند الغضب.",
      "تنفس بعمق قبل الرد."
    ]
  },
  {
    day: 20,
    type: "ayah",
    text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    reference: "البقرة 45",
    application: [
      "صلِّ بخشوع.",
      "اصبر على الطاعة."
    ]
  },
  {
    day: 21,
    type: "hadith",
    text: "أفضل الصدقة صدقة في رمضان.",
    reference: "رواه الترمذي",
    application: [
      "تصدق اليوم ولو بالقليل.",
      "شارك في إفطار صائم."
    ]
  },
  {
    day: 22,
    type: "wisdom",
    text: "العشر الأواخر بداية سباق جديد.",
    application: [
      "زد في قيام الليل.",
      "أكثر من الدعاء."
    ]
  },
  {
    day: 23,
    type: "ayah",
    text: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ",
    reference: "القدر 3",
    application: [
      "تحرَّ ليلة القدر.",
      "أخلص في العبادة."
    ]
  },
  {
    day: 24,
    type: "hadith",
    text: "من قام ليلة القدر إيمانًا واحتسابًا غُفر له ما تقدم من ذنبه.",
    reference: "رواه البخاري",
    application: [
      "أحيِ الليل.",
      "ادعُ بإلحاح."
    ]
  },
  {
    day: 25,
    type: "wisdom",
    text: "اللحظات الأخيرة تصنع الفرق.",
    application: [
      "لا تتكاسل.",
      "اختم الشهر بقوة."
    ]
  },
  {
    day: 26,
    type: "ayah",
    text: "فَفِرُّوا إِلَى اللَّهِ",
    reference: "الذاريات 50",
    application: [
      "الجأ إلى الاستغفار.",
      "اهرب من المعصية."
    ]
  },
  {
    day: 27,
    type: "hadith",
    text: "خيركم خيركم لأهله.",
    reference: "رواه الترمذي",
    application: [
      "أحسن لأهلك اليوم.",
      "قل كلمة طيبة."
    ]
  },
  {
    day: 28,
    type: "wisdom",
    text: "لا ينتهي رمضان إلا وقد تغيّرت.",
    application: [
      "قيّم نفسك.",
      "ضع خطة لما بعد رمضان."
    ]
  },
  {
    day: 29,
    type: "ayah",
    text: "وَاذْكُرُوا اللَّهَ كَثِيرًا",
    reference: "الجمعة 10",
    application: [
      "سبّح مئة مرة.",
      "أكثر من الحمد."
    ]
  },
  {
    day: 30,
    type: "hadith",
    text: "أحبُّ الناسِ إلى الله أنفعهم للناس.",
    reference: "حديث حسن",
    application: [
      "اختم الشهر بعمل نافع.",
      "استمر بعد رمضان."
    ]
  }
];
