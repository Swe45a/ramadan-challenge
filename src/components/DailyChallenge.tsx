import { CheckCircle2, Target, Trophy, Zap } from "lucide-react";
import { dailyChallenges } from "../data/dailyChallenges";interface Props {
  currentDay: number;
  onComplete: () => void;
  isCompleted: boolean;
}

const challengeDetails: Record<number, { icon: string; desc: string }> = {
  1:  { icon: "📵", desc: "خصّص ساعة كاملة بعيداً عن السوشال ميديا وركّز على ما ينفعك." },
  2:  { icon: "📖", desc: "اقرأ صفحة من القرآن الكريم بتدبر وتأمل في المعاني." },
  3:  { icon: "💡", desc: "اجلس 15 دقيقة لتعلّم مهارة جديدة أو مراجعة مهارة قديمة." },
  4:  { icon: "💌", desc: "أرسل رسالة امتنان صادقة لشخص أثّر إيجابياً في حياتك." },
  5:  { icon: "🕌", desc: "حافظ على الصلوات الخمس في أوقاتها بخشوع وحضور قلب." },
  6:  { icon: "📚", desc: "اقرأ صفحتين من كتاب مفيد في أي مجال يهمك." },
  7:  { icon: "🏠", desc: "ساعد في أعمال المنزل طوعاً دون أن يُطلب منك." },
  8:  { icon: "🌟", desc: "انشر فائدة رمضانية على من حولك أو في مجموعتك العائلية." },
  9:  { icon: "🧘", desc: "خصّص 10 دقائق للذكر والتأمل في مكان هادئ." },
  10: { icon: "📿", desc: "قل 100 تسبيحة بتركيز وحضور في القلب." },
  11: { icon: "💝", desc: "تصدّق ولو بمبلغ بسيط – فالصدقة تطفئ الخطيئة." },
  12: { icon: "🌙", desc: "أفطر مع العائلة أو فكّر على إفطار صائم ولو بتمرة." },
  13: { icon: "👨‍👩‍👧", desc: "تواصل مع أقاربك وصِل رحمك اليوم ولو برسالة." },
  14: { icon: "🤝", desc: "ساعد شخصاً محتاجاً في محيطك بشكل عملي." },
  15: { icon: "👕", desc: "أخرج ملابس لا تحتاجها وتبرع بها لمن يحتاجها." },
  16: { icon: "🕊️", desc: "اسعَ للإصلاح بين شخصين أو تجنّب خلاف قائم." },
  17: { icon: "💊", desc: "زُر مريضاً أو اتصل به لتطمئن عليه." },
  18: { icon: "🐾", desc: "اعتنِ بحيوان أو أطعمه إن كان في محيطك." },
  19: { icon: "🎓", desc: "علّم شخصاً مهارة بسيطة تُحسنها." },
  20: { icon: "🌍", desc: "اعمل تطوعاً في أي مجال ولو لساعة." },
  21: { icon: "🌙", desc: "قُم للتهجد ولو ركعتين في الثلث الأخير من الليل." },
  22: { icon: "🙏", desc: "قل 100 استغفار بتركيز وحضور قلب حقيقي." },
  23: { icon: "📝", desc: "اكتب 3 أهداف حقيقية تريد تحقيقها بعد رمضان." },
  24: { icon: "☮️", desc: "اجعل اليوم بلا جدال أو نقاش حاد مع أي أحد." },
  25: { icon: "🤐", desc: "راقب لسانك طوال اليوم وتجنّب الغيبة تماماً." },
  26: { icon: "🧹", desc: "رتّب غرفتك أو مكتبك – النظام الخارجي يُرتّب الداخل." },
  27: { icon: "🎧", desc: "استمع لدرس ديني أو محاضرة مفيدة كاملة." },
  28: { icon: "📔", desc: "اكتب يوميات الامتنان – 5 أشياء تشكر الله عليها." },
  29: { icon: "❤️", desc: "اعفُ عن شخص أساء إليك وتسامح معه في قلبك." },
  30: { icon: "🤲", desc: "أطِل الدعاء في ختام رمضان واسأل الله كل ما تتمنى." },
};

export default function DailyChallengesPage({ currentDay, onComplete, isCompleted }: Props) {
  const challengeText = dailyChallenges[currentDay - 1] || "تحدي اليوم";
  const detail = challengeDetails[currentDay] || { icon: "🎯", desc: "اجتهد في تنفيذ تحدي اليوم بأفضل صورة." };

  return (
    <div className="space-y-8 animate-fadeIn" dir="rtl">

      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-12 md:p-16 lg:p-20 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-24 -translate-y-24" />
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-8">
            <Target className="w-10 h-10 text-white/80" />
            <span className="bg-white/20 border border-white/30 text-white text-xl font-bold px-6 py-3 rounded-full">
              ركن التحديات – اليوم {currentDay}
            </span>
          </div>
          <div className="flex items-center gap-7">
            <span className="text-8xl">{detail.icon}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{challengeText}</h2>
          </div>
        </div>
      </div>

      {/* كيف تنفّذ */}
      <div className="bg-white rounded-3xl shadow-md p-10 border-2 border-orange-100">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-9 h-9 text-orange-500" />
          <h3 className="font-bold text-gray-700 text-3xl">كيف تنفّذ التحدي؟</h3>
        </div>
        <p className="text-gray-700 leading-loose text-2xl">{detail.desc}</p>
      </div>

      {/* المكافأة */}
      <div className="bg-orange-50 rounded-3xl p-9 border-2 border-orange-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-2xl">مكافأة الإنجاز</p>
              <p className="text-gray-500 text-lg">عند إتمام التحدي</p>
            </div>
          </div>
          <div className="text-6xl font-bold text-orange-600">+10 <span className="text-3xl">نقطة</span></div>
        </div>
      </div>

      {/* زر الإنجاز */}
      {isCompleted ? (
        <div className="flex items-center gap-5 bg-green-50 border-2 border-green-200 text-green-700 p-9 rounded-3xl">
          <CheckCircle2 className="w-12 h-12 text-green-500 flex-shrink-0" />
          <div>
            <p className="font-bold text-3xl">أحسنت! تم احتساب نقاطك 🎉</p>
            <p className="text-green-600 text-xl mt-2">+10 نقطة أُضيفت لرصيدك</p>
          </div>
        </div>
      ) : (
        <button
          onClick={onComplete}
          className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white py-8 rounded-3xl font-bold text-3xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
        >
          <CheckCircle2 className="w-10 h-10" />
          أنجزت التحدي! احسب نقاطي
        </button>
      )}

    </div>
  );
}