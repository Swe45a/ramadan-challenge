import { Heart, Sparkles, TrendingUp, Zap } from 'lucide-react';

interface MotivationalMessageProps {
  missedDays: number;
  currentStreak: number;
  lastCompletedDay?: number | null;
  
}

export const MotivationalMessage = ({
  missedDays,
  currentStreak,
  
}: MotivationalMessageProps) => {

  if (missedDays === 0 && currentStreak > 0) {
    return (
      <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              ممتاز! أنت مستمر! 🎉
            </h3>
            <p className="text-green-700">
              لديك <strong>{currentStreak}</strong> أيام متتالية من الإنجاز!
              استمر في هذا المسار الرائع.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (missedDays === 1) {
    return (
      <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              لا بأس، يمكنك العودة 💪
            </h3>
            <p className="text-yellow-700">
              فاتك يوم واحد فقط، لا تقلق — اليوم فرصة جديدة!
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (missedDays >= 2 && missedDays <= 5) {
    return (
      <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-800 mb-2">
              عودتك مهمة 🌟
            </h3>
            <p className="text-orange-700">
              لم يفت الأوان بعد. ابدأ اليوم فقط والباقي سيتبع.
            </p>
            <div className="mt-2 flex items-center gap-2 text-orange-600 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>كل يوم هو فرصة جديدة</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (missedDays > 5) {
    return (
      <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              مرحبًا بك من جديد 🤗
            </h3>
            <p className="text-purple-700">
              لا يهم كم فاتك — الأهم أنك هنا الآن.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
