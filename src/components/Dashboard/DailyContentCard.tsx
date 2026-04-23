import { Flame, CheckCircle } from "lucide-react";

interface DailyContent {
  day_number: number;
  verse_arabic: string;
  verse_reference: string;
  hadith_arabic: string;
  hadith_reference: string;
  wisdom_arabic: string;
  challenge_title: string;
  challenge_description: string;
  challenge_points: number;
}

interface DailyContentCardProps {
  content: DailyContent;
  onComplete: () => void;
  isCompleted: boolean;
  isLoading: boolean;
}

export const DailyContentCard = ({
  content,
  onComplete,
  isCompleted,
  isLoading,
}: DailyContentCardProps) => {
  return (
    <div
      className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
      dir="rtl"
    >
      <div className="text-center mb-6">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full shadow-lg mb-4">
          <span className="font-bold text-lg">
            اليوم {content.day_number}
          </span>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          حكمة اليوم
        </h2>
      </div>

      <div className="space-y-6">
        {/* الآية */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold mb-3">📖 آية</h3>
          <p className="text-xl mb-2">{content.verse_arabic}</p>
          <p className="text-sm text-gray-600">
            {content.verse_reference}
          </p>
        </div>

        {/* الحديث */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
          <h3 className="text-xl font-bold mb-3">✨ حديث</h3>
          <p className="text-lg mb-2">{content.hadith_arabic}</p>
          <p className="text-sm text-gray-600">
            {content.hadith_reference}
          </p>
        </div>

        {/* الحكمة */}
        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
          <h3 className="text-xl font-bold mb-3">💡 حكمة</h3>
          <p className="text-lg">{content.wisdom_arabic}</p>
        </div>

        {/* التحدي */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-300">
          <h3 className="text-xl font-bold mb-3">🎯 تطبيق عملي</h3>

          <h4 className="text-lg font-bold mb-2">
            {content.challenge_title}
          </h4>

          <p className="mb-4 text-gray-700">
            {content.challenge_description}
          </p>

          <div className="flex items-center gap-2 text-orange-600">
            <Flame className="w-5 h-5" />
            <span className="font-bold">
              {content.challenge_points} نقاط
            </span>
          </div>
        </div>

        {/* زر الإكمال */}
        <button
          onClick={onComplete}
          disabled={isCompleted || isLoading}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
            isCompleted
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          {isCompleted ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6" />
              تم إكمال التحدي
            </span>
          ) : (
            "أكملت التحدي اليوم"
          )}
        </button>
      </div>
    </div>
  );
};
