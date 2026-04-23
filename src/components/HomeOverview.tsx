import { Star, Flame, Trophy, Sparkles, BookOpen, Target, ChevronLeft } from "lucide-react";
import { ramadanContent } from "../data/ramadanContent";

interface Props {
  currentDay: number;
  totalPoints: number;
  currentStreak: number;
  completedDays: number[];
  onNavigate: (page: string) => void;
}

const typeLabel: Record<string, string> = { wisdom: "حكمة", ayah: "آية قرآنية", hadith: "حديث نبوي" };
const typeBg: Record<string, string> = {
  wisdom: "from-amber-500 to-orange-500",
  ayah: "from-emerald-500 to-teal-500",
  hadith: "from-blue-500 to-indigo-500"
};

export default function HomeOverview({ currentDay, totalPoints, currentStreak, completedDays, onNavigate }: Props) {
  const todayContent = ramadanContent.find(c => c.day === currentDay);
  const completionPct = Math.round((completedDays.length / 30) * 100);
  const isCompleted = completedDays.includes(currentDay);
  const bg = todayContent ? typeBg[todayContent.type] : "from-orange-500 to-orange-600";

  return (
    <div className="space-y-8 animate-fadeIn" dir="rtl">

      {/* بطاقة اليوم الرئيسية */}
      <div className={`relative bg-gradient-to-br ${bg} text-white p-12 md:p-16 lg:p-20 rounded-3xl shadow-2xl overflow-hidden`}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-24 -translate-y-24" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-16 translate-y-16" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold px-6 py-3 rounded-full bg-white/20 border border-white/30">
              {todayContent ? typeLabel[todayContent.type] : "محتوى اليوم"}
            </span>
            <span className="text-white/80 text-xl">اليوم {currentDay} / 30</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed">
            {todayContent?.text || "مرحباً بك في مجلس شُعل الرمضاني"}
          </h2>
          {todayContent?.reference && (
            <p className="text-white/80 text-2xl mb-8">{todayContent.reference}</p>
          )}
          {isCompleted ? (
            <div className="flex items-center gap-4 bg-white/20 rounded-2xl px-8 py-6 w-fit">
              <span className="text-5xl">✅</span>
              <span className="font-bold text-2xl">أنجزت اليوم – أحسنت!</span>
            </div>
          ) : (
            <div className="flex gap-5 flex-wrap mt-2">
              <button onClick={() => onNavigate("wisdom")} className="flex items-center gap-3 bg-white text-orange-600 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-colors shadow-lg">
                <BookOpen className="w-7 h-7" /> قبسٌ من نور
              </button>
              <button onClick={() => onNavigate("challenges")} className="flex items-center gap-3 bg-white/20 border border-white/40 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-colors">
                <Target className="w-7 h-7" /> التحدي اليومي
              </button>
            </div>
          )}
        </div>
      </div>

      {/* إحصائيات */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { icon: <Star className="w-10 h-10 text-orange-500 fill-orange-400" />, val: totalPoints, label: "نقاطك", bg: "bg-orange-50 border-orange-100" },
          { icon: <Flame className="w-10 h-10 text-red-500" />, val: currentStreak, label: "يوم متواصل", bg: "bg-red-50 border-red-100" },
          { icon: <Trophy className="w-10 h-10 text-amber-500" />, val: `${completedDays.length}/30`, label: `${completionPct}%`, bg: "bg-amber-50 border-amber-100" },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} border-2 rounded-2xl p-6 text-center`}>
            <div className="flex justify-center mb-3">{s.icon}</div>
            <div className="text-4xl font-bold text-gray-800">{s.val}</div>
            <div className="text-lg text-gray-500 mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* شريط التقدم */}
      <div className="bg-white rounded-3xl shadow-md p-9 border border-orange-100">
        <div className="flex justify-between items-center mb-5">
          <span className="font-bold text-gray-700 text-2xl">تقدمك في رمضان</span>
          <span className="font-bold text-orange-600 text-2xl">{completionPct}%</span>
        </div>
        <div className="h-7 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-700" style={{ width: `${completionPct}%` }} />
        </div>
        <p className="text-xl text-gray-500 mt-5 text-center">
          {completedDays.length === 0 ? "لم تبدأ بعد – اليوم الأول أهم الأيام!" :
           completedDays.length < 10 ? "بداية رائعة، استمر في المسيرة!" :
           completedDays.length < 20 ? "أنت في منتصف الطريق، لا تتوقف!" :
           completedDays.length < 30 ? "العشر الأواخر – وقت الجد والعطاء!" :
           "🎉 أتممت التحدي كاملاً، بارك الله فيك!"}
        </p>
      </div>

      {/* روابط سريعة */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: <Sparkles className="w-7 h-7" />, label: "قبسٌ من نور",   sub: "آيات وأحاديث",  page: "wisdom" },
          { icon: <Target className="w-7 h-7" />,   label: "ركن التحديات", sub: "تحدي يومي",     page: "challenges" },
          { icon: <Trophy className="w-7 h-7" />,   label: "لوحة المجتمع", sub: "أثرك الجماعي",  page: "community" },
          { icon: <Star className="w-7 h-7" />,     label: "الأوسمة",       sub: "إنجازاتك",      page: "community" },
        ].map((link, i) => (
          <button key={i} onClick={() => onNavigate(link.page)} className="flex items-center justify-between bg-white rounded-2xl p-7 border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group">
            <div className="text-right">
              <div className="font-bold text-gray-800 text-xl">{link.label}</div>
              <div className="text-lg text-gray-400 mt-1">{link.sub}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 group-hover:text-orange-600">{link.icon}</span>
              <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-orange-400 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}