import { BookOpen, CheckCircle2, Sparkles, Star } from "lucide-react";
import { ramadanContent } from "../../data/ramadanContent";

interface Props {
  currentDay: number;
  onComplete: () => void;
  isCompleted: boolean;
}

const typeIcon: Record<string, string> = { wisdom: "💭", ayah: "📖", hadith: "🕌" };
const typeLabel: Record<string, string> = { wisdom: "حكمة", ayah: "آية قرآنية", hadith: "حديث نبوي" };
const typeBg: Record<string, string> = {
  wisdom: "from-amber-500 to-orange-500",
  ayah: "from-emerald-500 to-teal-500",
  hadith: "from-blue-500 to-indigo-500"
};

export default function DailyWisdomPage({ currentDay, onComplete, isCompleted }: Props) {
  const content = ramadanContent.find(item => item.day === currentDay);

  if (!content) return (
    <div className="bg-white rounded-3xl shadow-xl p-16 text-center text-gray-400 text-3xl">
      لا يوجد محتوى لهذا اليوم
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn" dir="rtl">

      {/* بطاقة النص الرئيسي */}
      <div className={`bg-gradient-to-br ${typeBg[content.type]} text-white p-12 md:p-16 lg:p-20 rounded-3xl shadow-xl relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-24 -translate-y-24" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-white/10 rounded-full translate-x-16 translate-y-16" />
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-8">
            <span className="text-6xl">{typeIcon[content.type]}</span>
            <span className="bg-white/20 border border-white/30 text-white text-xl font-bold px-6 py-3 rounded-full">
              {typeLabel[content.type]} – اليوم {currentDay}
            </span>
          </div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6">{content.text}</p>
          {content.reference && (
            <p className="text-white/80 text-2xl font-medium">{content.reference}</p>
          )}
        </div>
      </div>

      {/* التأمل */}
      {content.tafseer && (
        <div className="bg-white rounded-3xl shadow-md p-10 border-2 border-orange-100">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-9 h-9 text-orange-500" />
            <h3 className="font-bold text-gray-700 text-3xl">تأمّل ووقفة</h3>
          </div>
          <p className="text-gray-700 leading-loose text-2xl">{content.tafseer}</p>
        </div>
      )}

      {/* التطبيق العملي */}
      {content.application?.length > 0 && (
        <div className="bg-orange-50 rounded-3xl p-10 border-2 border-orange-100">
          <div className="flex items-center gap-4 mb-7">
            <Star className="w-9 h-9 text-orange-500 fill-orange-400" />
            <h3 className="font-bold text-gray-700 text-3xl">تطبيق عملي اليوم</h3>
          </div>
          <ul className="space-y-6">
            {content.application.map((item, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <span className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 mt-1">
                  {idx + 1}
                </span>
                <span className="text-gray-700 text-2xl leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* زر الإنجاز */}
      {isCompleted ? (
        <div className="flex items-center gap-5 bg-green-50 border-2 border-green-200 text-green-700 p-9 rounded-3xl">
          <CheckCircle2 className="w-12 h-12 text-green-500 flex-shrink-0" />
          <div>
            <p className="font-bold text-3xl">تم حفظ إنجاز اليوم ✨</p>
            <p className="text-green-600 text-xl mt-2">بارك الله فيك وزادك من فضله</p>
          </div>
        </div>
      ) : (
        <button
          onClick={onComplete}
          className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8 rounded-3xl font-bold text-3xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
        >
          <BookOpen className="w-10 h-10" />
          أنجزت اليوم واستوعبت المحتوى
        </button>
      )}

    </div>
  );
}