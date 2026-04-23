import { Trophy, Star, Flame, Award, Users, TrendingUp } from "lucide-react";

interface Props {
  completedDays: number[];
  totalPoints: number;
  currentStreak: number;
}

const BADGES = [
  { id: "start",    icon: "🌙", title: "بداية النور",       desc: "أكملت أول يوم",          requiredDays: 1,  color: "from-blue-400 to-blue-600" },
  { id: "three",    icon: "⭐", title: "ثلاثة أيام",        desc: "3 أيام بركة",            requiredDays: 3,  color: "from-yellow-400 to-amber-500" },
  { id: "week",     icon: "🔥", title: "أسبوع الالتزام",    desc: "7 أيام إنجاز",           requiredDays: 7,  color: "from-orange-400 to-red-500" },
  { id: "ten",      icon: "💎", title: "العشرة الأولى",     desc: "10 أيام رحمة",           requiredDays: 10, color: "from-teal-400 to-emerald-500" },
  { id: "half",     icon: "🏆", title: "نصف الطريق",        desc: "15 يوم من البركة",        requiredDays: 15, color: "from-violet-400 to-purple-600" },
  { id: "twenty",   icon: "🌟", title: "العشرون",           desc: "20 يوم اجتهاد",          requiredDays: 20, color: "from-pink-400 to-rose-500" },
  { id: "lastten",  icon: "✨", title: "العشر الأواخر",     desc: "دخلت أفضل أيام رمضان",   requiredDays: 21, color: "from-amber-400 to-orange-600" },
  { id: "complete", icon: "👑", title: "ختم التحدي",        desc: "أتممت 30 يوماً كاملاً!", requiredDays: 30, color: "from-orange-500 to-amber-600" },
];

// ✅ بيانات افتراضية تزيد مع المستخدمين الحقيقيين
const MOCK_USERS = [
  { name: "أحمد علي",        username: "@ahmed_ali",      streak: 28, days: 28 },
  { name: "فاطمة محمد",      username: "@fatima_m",       streak: 26, days: 26 },
  { name: "سالم الكندي",     username: "@salem_alkindi",  streak: 25, days: 25 },
  { name: "نورة السعيد",     username: "@noura_alsaeed",  streak: 22, days: 22 },
  { name: "عبدالله المطيري", username: "@abdullah_m",     streak: 20, days: 20 },
];

const RANK_COLORS = ["from-yellow-400 to-amber-500", "from-gray-300 to-gray-400", "from-amber-600 to-orange-600"];
const RANK_ICONS = ["🥇", "🥈", "🥉"];

export default function CommunityImpactPage({ completedDays, totalPoints, currentStreak }: Props) {
  const completedCount = completedDays.length;
  const unlockedBadges = BADGES.filter(b => completedCount >= b.requiredDays);
  const lockedBadges = BADGES.filter(b => completedCount < b.requiredDays);
  
  // ✅ الأرقام تزيد مع المستخدمين الحقيقيين
  const realUsersCount = 1; // المستخدم الحالي
  const totalParticipants = 24 + realUsersCount; // افتراضي + حقيقي
  const mockTotalDays = 183;
  const totalCompanyDays = completedCount + mockTotalDays;
  const totalCompanyPoints = totalCompanyDays * 10;

  // ✅ إضافة المستخدم الحالي للـ Leaderboard
  const currentUser = {
    name: "أنت",
    username: "@you",
    streak: currentStreak,
    days: completedCount,
    points: totalPoints,
    isCurrentUser: true
  };

  const allUsers = [...MOCK_USERS.map(u => ({ ...u, points: u.days * 10, isCurrentUser: false })), currentUser]
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);

  return (
    <div className="space-y-8 animate-fadeIn" dir="rtl">

      {/* إحصائيات المجتمع */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-3xl shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-white/80" />
          <h2 className="text-3xl font-bold">إحصائيات المجتمع</h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[
            { val: totalParticipants, label: "مشارك" },
            { val: totalCompanyDays, label: "يوم مُنجز" },
            { val: totalCompanyPoints, label: "نقطة جماعية" },
          ].map((s, i) => (
            <div key={i} className="bg-white/20 rounded-2xl p-5 text-center">
              <div className="text-4xl font-bold">{s.val}</div>
              <div className="text-white/70 text-base mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* الأوسمة */}
      <div className="bg-white rounded-3xl shadow-md p-8 border-2 border-orange-100">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold text-gray-800">أوسمتك</h2>
          <span className="bg-orange-100 text-orange-600 text-lg font-bold px-3 py-1 rounded-full mr-auto">{unlockedBadges.length}/{BADGES.length}</span>
        </div>

        {unlockedBadges.length > 0 && (
          <div className="mb-6">
            <p className="text-lg text-gray-500 mb-4">🎉 أوسمتك المكتسبة</p>
            <div className="grid grid-cols-2 gap-4">
              {unlockedBadges.map(badge => (
                <div key={badge.id} className={`bg-gradient-to-br ${badge.color} text-white p-5 rounded-2xl flex items-center gap-4 shadow-md`}>
                  <span className="text-4xl">{badge.icon}</span>
                  <div>
                    <p className="font-bold text-lg">{badge.title}</p>
                    <p className="text-white/70 text-sm">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {lockedBadges.length > 0 && (
          <div>
            <p className="text-lg text-gray-400 mb-4">🔒 أوسمة في انتظارك</p>
            <div className="grid grid-cols-2 gap-4">
              {lockedBadges.map(badge => (
                <div key={badge.id} className="bg-gray-100 p-5 rounded-2xl flex items-center gap-4 opacity-50">
                  <span className="text-4xl grayscale">{badge.icon}</span>
                  <div>
                    <p className="font-bold text-lg text-gray-600">{badge.title}</p>
                    <p className="text-gray-400 text-sm">بعد {badge.requiredDays} أيام</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ✅ لوحة المتصدرين - أسماء أكبر */}
      <div className="bg-white rounded-3xl shadow-md p-8 border-2 border-orange-100">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold text-gray-800">لوحة المتصدرين</h2>
          <span className="text-base text-gray-400 mr-auto">أفضل هذا الشهر</span>
        </div>
        <div className="space-y-4">
          {allUsers.map((user, idx) => (
            <div key={idx} className={`flex items-center gap-5 p-5 rounded-2xl ${user.isCurrentUser ? "bg-orange-500 text-white border-2 border-orange-400" : idx < 3 ? "bg-orange-50 border-2 border-orange-100" : "bg-gray-50"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${user.isCurrentUser ? "bg-white/20" : idx < 3 ? `bg-gradient-to-br ${RANK_COLORS[idx]} text-white shadow-md` : "bg-gray-200 text-gray-500"}`}>
                {user.isCurrentUser ? "أنت" : idx < 3 ? RANK_ICONS[idx] : idx + 1}
              </div>
              <div className="flex-1">
                {/* ✅ الأسماء أكبر */}
                <p className={`font-bold text-xl ${user.isCurrentUser ? "text-white" : "text-gray-800"}`}>{user.name}</p>
                <p className={`text-base ${user.isCurrentUser ? "text-white/70" : "text-gray-400"}`}>{user.username}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Flame className={`w-6 h-6 ${user.isCurrentUser ? "text-white" : "text-orange-500"}`} />
                  <span className={`font-bold text-lg ${user.isCurrentUser ? "text-white" : "text-orange-600"}`}>{user.streak}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className={`w-6 h-6 ${user.isCurrentUser ? "text-white fill-white" : "text-amber-400 fill-amber-400"}`} />
                  <span className={`font-bold text-lg ${user.isCurrentUser ? "text-white" : "text-amber-600"}`}>{user.points}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* التقدم الإجمالي */}
      <div className="bg-white rounded-3xl shadow-md p-8 border-2 border-orange-100">
        <div className="flex items-center gap-3 mb-5">
          <TrendingUp className="w-7 h-7 text-orange-500" />
          <h3 className="font-bold text-gray-700 text-2xl">نسبة إنجاز الشركة</h3>
        </div>
        <div className="h-6 bg-gray-100 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-700"
            style={{ width: `${Math.round((totalCompanyDays / (totalParticipants * 30)) * 100)}%` }} />
        </div>
        <div className="flex justify-between text-lg text-gray-500">
          <span>{totalCompanyDays} يوم من أصل {totalParticipants * 30}</span>
          <span className="font-bold text-orange-600">{Math.round((totalCompanyDays / (totalParticipants * 30)) * 100)}%</span>
        </div>
      </div>
    </div>
  );
}