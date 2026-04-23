import { useEffect, useState } from "react";
import ProgressTracker from "./ProgressTracker";
import HomeOverview from "./HomeOverview";
import DailyWisdomPage from "./Pages/DailyWisdomPage";
import DailyChallengesPage from "./Pages/DailyChallengesPage";
import AIChatPage from "./Pages/AIChatPage";
import CommunityImpactPage from "./Pages/CommunityImpactPage";
import Sidebar from "./Navigation/Sidebar";
import { completeDay, getLocalUser } from "../lib/localStorage";

<img src="logo.png" alt="logo" className="h-10"/>
export default function RamadanDashboard() {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentPage, setCurrentPage] = useState("home");
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const ramadanStart = new Date("2026-02-19");
    const today = new Date();
    const diffTime = today.getTime() - ramadanStart.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    const day = Math.max(1, Math.min(diffDays, 30));
    setCurrentDay(day);

    const user = getLocalUser();
    setCompletedDays(user.completedDays);
    setTotalPoints(user.totalPoints);
    setCurrentStreak(user.currentStreak);
  }, []);

  const handleCompleteDay = () => {
    const updated = completeDay(currentDay, 10);
    setCompletedDays([...updated.completedDays]);
    setTotalPoints(updated.totalPoints);
    setCurrentStreak(updated.currentStreak);
  };

  const renderPage = () => {
    const isCompleted = completedDays.includes(currentDay);
    
    switch (currentPage) {
      case "wisdom":
        return <DailyWisdomPage currentDay={currentDay} onComplete={handleCompleteDay} isCompleted={isCompleted} />;
      case "challenges":
        return <DailyChallengesPage currentDay={currentDay} onComplete={handleCompleteDay} isCompleted={isCompleted} />;
      case "chat":
        return <AIChatPage />;
      case "community":
        return <CommunityImpactPage completedDays={completedDays} totalPoints={totalPoints} currentStreak={currentStreak} />;
      default:
        return <HomeOverview currentDay={currentDay} totalPoints={totalPoints} currentStreak={currentStreak} completedDays={completedDays} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50" dir="rtl">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* هيدر الشركة */}
      <div className="bg-white border-b-2 border-orange-100 shadow-sm">
        <div className="px-6 md:px-12 py-8 flex flex-col items-center gap-4">
          <img src="/logo.png" alt="Shal Smart Solutions" className="h-28 md:h-32 object-contain" />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">مجلس شُعل الرمضاني</h1>
            <p className="text-orange-500 text-lg font-semibold mt-2 tracking-widest uppercase">Shal Smart Solutions</p>
          </div>
        </div>
      </div>

      {/* شريط التنقل */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-30 shadow-sm">
        <div className="px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="text-left">
            <p className="text-gray-800 font-bold text-2xl">اليوم {currentDay} من رمضان 1447</p>
            <p className="text-gray-400 text-lg">تحدي الـ 30 يوماً من البركة</p>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-md hover:bg-orange-600 transition-colors">
            القائمة
          </button>
        </div>
      </div>

      {/* المحتوى - ✅ بدون max-width */}
      <div className="px-6 md:px-12 py-12">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-10">
          <div>{renderPage()}</div>
          <div>
            <ProgressTracker completedDays={completedDays} currentDay={currentDay} totalPoints={totalPoints} currentStreak={currentStreak} />
          </div>
        </div>
      </div>
    </div>
  );
}