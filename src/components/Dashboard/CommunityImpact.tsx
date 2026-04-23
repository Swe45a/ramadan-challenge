import { useEffect, useState } from "react";

export default function CommunityImpactPage() {
  const [wisdom, setWisdom] = useState<number[]>([]);
  const [challenges, setChallenges] = useState<number[]>([]);

  useEffect(() => {
    const w = localStorage.getItem("wisdom_completed_days");
    const c = localStorage.getItem("challenge_completed_days");

    if (w) setWisdom(JSON.parse(w));
    if (c) setChallenges(JSON.parse(c));
  }, []);

  const totalPoints = wisdom.length * 5 + challenges.length * 10;
  const totalCompleted = wisdom.length + challenges.length;
  const progress = (totalCompleted / 60) * 100;

  return (
    <main className="min-h-screen px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-10">
        لوحة أثر المجتمع
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-500">إجمالي النقاط</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            {totalPoints}
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-500">إجمالي الإنجازات</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            {totalCompleted}
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <p className="text-gray-500">الترتيب التقديري</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">
            #{Math.max(1, 50 - totalPoints)}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-xl mx-auto bg-white shadow rounded-2xl p-6">
        <p className="mb-4 font-semibold text-gray-600">
          تقدمك في رمضان
        </p>

        <div className="w-full h-4 bg-orange-100 rounded-full overflow-hidden">
          <div
            className="h-4 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-orange-600 font-bold">
          {Math.round(progress)}%
        </p>
      </div>

      {/* Achievement Badge */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">
          🌙 إنجازك اليومي يصنع فرقاً
        </h3>
        <p>
          استمر… كل خطوة تقربك من أفضل نسخة منك.
        </p>
      </div>
    </main>
  );
}



