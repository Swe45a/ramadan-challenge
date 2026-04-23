import { Flame } from 'lucide-react';
import type { LocalUserData } from '../../lib/localStorage';


interface StreakTrackerProps {
  userData: LocalUserData;
}

export const StreakTracker = ({ userData }: StreakTrackerProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fadeIn" dir="rtl">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Amiri, serif' }}>
          سلسلة الأيام
        </h3>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
          <span className="text-5xl font-bold text-orange-600" style={{ fontFamily: 'Amiri, serif' }}>
            {userData.currentStreak}
          </span>
          <span className="text-xl text-gray-600" style={{ fontFamily: 'Amiri, serif' }}>
            يوم متتالية
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 text-center transform transition-transform hover:scale-105">
          <div className="text-3xl font-bold text-orange-600 mb-1" style={{ fontFamily: 'Amiri, serif' }}>
            {userData.longestStreak}
          </div>
          <div className="text-sm text-gray-700" style={{ fontFamily: 'Amiri, serif' }}>
            أطول سلسلة
          </div>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-4 text-center transform transition-transform hover:scale-105">
          <div className="text-3xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Amiri, serif' }}>
            {userData.totalPoints}
          </div>
          <div className="text-sm text-gray-700" style={{ fontFamily: 'Amiri, serif' }}>
            مجموع النقاط
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600" style={{ fontFamily: 'Amiri, serif' }}>
            التقدم في رمضان
          </span>
          <span className="text-sm font-bold text-orange-600" style={{ fontFamily: 'Amiri, serif' }}>
            {Math.round((userData.completedDays.length / 30) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(userData.completedDays.length / 30) * 100}%` }}
          />
        </div>
        <div className="text-center mt-2 text-sm text-gray-600" style={{ fontFamily: 'Amiri, serif' }}>
          {userData.completedDays.length} من 30 يوم
        </div>
      </div>
    </div>
  );
};
