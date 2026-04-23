import { useEffect, useState } from 'react';
import { Trophy, Flame, Star } from 'lucide-react';

interface Profile {
  id: string;
  full_name: string;
  username: string;
  current_streak: number;
  total_points: number;
}

export const Leaderboard = () => {
  const [topUsers, setTopUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMockLeaderboard();
  }, []);

  const loadMockLeaderboard = () => {
    const mockData: Profile[] = [
      {
        id: '1',
        full_name: 'أحمد علي',
        username: 'ahmed',
        current_streak: 5,
        total_points: 120,
      },
      {
        id: '2',
        full_name: 'فاطمة محمد',
        username: 'fatima',
        current_streak: 4,
        total_points: 100,
      },
      {
        id: '3',
        full_name: 'سالم الكندي',
        username: 'salem',
        current_streak: 3,
        total_points: 80,
      },
    ];

    setTopUsers(mockData);
    setLoading(false);
  };

  const getMedalIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Trophy className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Trophy className="w-6 h-6 text-orange-600" />;
    return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100" dir="rtl">
        جاري التحميل...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100" dir="rtl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">
          لوحة المتصدرين
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          أفضل المشاركين هذا الشهر
        </p>
      </div>

      <div className="space-y-3">
        {topUsers.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center gap-4 p-4 rounded-2xl ${
              index < 3
                ? 'bg-orange-50 border-2 border-orange-200'
                : 'bg-gray-50'
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {getMedalIcon(index + 1)}
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-gray-800">
                {user.full_name}
              </h4>
              <p className="text-sm text-gray-600">
                @{user.username}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-bold text-orange-600">
                  {user.current_streak}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-teal-500" />
                <span className="font-bold text-teal-600">
                  {user.total_points}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {topUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          لا يوجد مشاركون بعد
        </div>
      )}
    </div>
  );
};
