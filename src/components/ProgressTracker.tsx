import { CheckCircle2, Star, Flame, Trophy } from "lucide-react";

interface Props {
  completedDays: number[];
  currentDay: number;
  totalPoints: number;
  currentStreak: number;
}

export default function ProgressTracker({ completedDays, currentDay, totalPoints, currentStreak }: Props) {
  const completionPercentage = (completedDays.length / 30) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-9 border-2 border-orange-100 sticky top-24" dir="rtl">

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-3 shadow-md">
          <Star className="w-9 h-9 text-white fill-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">رحلتك في رمضان</h2>
          <p className="text-gray-400 text-lg">تتبع تقدمك اليومي</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 text-center">
          <div className="text-4xl font-bold text-orange-600">{completedDays.length}</div>
          <div className="text-base text-gray-400 mt-1">من 30</div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
          <div className="flex items-center justify-center gap-1">
            <Flame className="w-6 h-6 text-red-500" />
            <span className="text-4xl font-bold text-red-600">{currentStreak}</span>
          </div>
          <div className="text-base text-gray-400 mt-1">تتابع</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-center">
          <div className="flex items-center justify-center gap-1">
            <Trophy className="w-6 h-6 text-amber-500" />
            <span className="text-4xl font-bold text-amber-600">{totalPoints}</span>
          </div>
          <div className="text-base text-gray-400 mt-1">نقاط</div>
        </div>
      </div>

      <div className="mb-7">
        <div className="flex justify-between mb-3">
          <span className="font-semibold text-gray-700 text-lg">نسبة الإنجاز</span>
          <span className="font-bold text-orange-600 text-lg">{Math.round(completionPercentage)}%</span>
        </div>
        <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-700" style={{ width: `${completionPercentage}%` }} />
        </div>
      </div>

      <div>
        <p className="text-xl text-gray-600 mb-5 font-semibold">تقويم رمضان</p>
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const isCompleted = completedDays.includes(day);
            const isCurrent = day === currentDay;
            const isFuture = day > currentDay;
            return (
              <div key={day} className="relative group">
                <div className={`aspect-square rounded-xl flex items-center justify-center font-bold transition-all shadow-sm
                  ${isCompleted ? "bg-orange-500 text-white shadow-md" :
                    isCurrent  ? "bg-orange-200 text-orange-800 ring-2 ring-orange-400" :
                    isFuture   ? "bg-gray-50 text-gray-300" :
                                 "bg-gray-100 text-gray-400"}`}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-7 h-7" />
                  ) : (
                    <span className="text-xl font-bold">{day}</span>
                  )}
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                  {isCompleted ? `✅ اليوم ${day}` : isCurrent ? `📍 اليوم ${day}` : `اليوم ${day}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 bg-orange-50 rounded-xl p-5 border border-orange-100 text-center">
        <p className="text-lg text-orange-700 font-medium">
          {completedDays.length === 0 && "ابدأ رحلتك اليوم 🌙"}
          {completedDays.length >= 1  && completedDays.length < 7  && "بداية رائعة، استمر! 🔥"}
          {completedDays.length >= 7  && completedDays.length < 15 && "أسبوع كامل، أحسنت! ⭐"}
          {completedDays.length >= 15 && completedDays.length < 21 && "نصف الطريق، لا تتوقف! 🏆"}
          {completedDays.length >= 21 && completedDays.length < 30 && "العشر الأواخر، اجتهد! ✨"}
          {completedDays.length === 30 && "أتممت التحدي، مبارك! 👑"}
        </p>
      </div>
    </div>
  );
}