import { Home, Sparkles, Trophy, MessageCircle, Users, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Sidebar({ isOpen, onClose, currentPage, onNavigate }: Props) {
  const items = [
    { page: "home",       icon: <Home />,         label: "الصفحة الرئيسية" },
    { page: "wisdom",     icon: <Sparkles />,      label: "قبسٌ من نور" },
    { page: "challenges", icon: <Trophy />,        label: "ركن التحديات" },
    { page: "chat",       icon: <MessageCircle />, label: "شعل – الرفيق الرمضاني" },
    { page: "community",  icon: <Users />,         label: "لوحة أثر المجتمع" },
  ];

  return (
    <>
      {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition" />}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#fdf6ef] shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center px-6 py-5 border-b border-orange-100">
          <h2 className="text-orange-600 font-bold text-xl">القائمة</h2>
          <button onClick={onClose} className="p-1 hover:bg-orange-100 rounded-lg transition-colors">
            <X className="text-orange-600 w-6 h-6" />
          </button>
        </div>
        <div className="p-5 space-y-3">
          {items.map(item => (
            <button
              key={item.page}
              onClick={() => { onNavigate(item.page); onClose(); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200
                ${currentPage === item.page
                  ? "bg-orange-500 text-white shadow-lg scale-[1.02]"
                  : "bg-white text-gray-700 hover:bg-orange-50 hover:shadow-sm border border-orange-50"}`}
            >
              <span className="font-semibold">{item.label}</span>
              <span className={currentPage === item.page ? "text-white" : "text-orange-500"}>{item.icon}</span>
            </button>
          ))}
        </div>
        <div className="absolute bottom-6 left-0 right-0 px-5">
          <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
            <p className="text-orange-600 text-sm font-medium">رمضان كريم 🌙</p>
            <p className="text-gray-400 text-xs mt-1">بارك الله في أيامكم</p>
          </div>
        </div>
      </div>
    </>
  );
}