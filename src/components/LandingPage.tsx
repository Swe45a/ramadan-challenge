import { Sparkles, Star, Heart, BookOpen } from "lucide-react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <div className="absolute top-0 inset-x-0 flex justify-center py-10">
          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-400 fill-orange-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
        </div>

        <div className="text-center space-y-10 max-w-6xl mx-auto mt-20 w-full">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border-2 border-orange-200">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <span className="text-orange-600 font-bold text-xl md:text-2xl">رمضان كريم</span>
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-800 leading-tight">
            تحدي رمضان
            <span className="block text-orange-500 mt-3">30 يوماً من البركة</span>
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border-2 border-orange-100">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="w-10 h-10 text-orange-500 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700">عن التحدي</h2>
              <Heart className="w-10 h-10 text-orange-500 animate-pulse" />
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              رحلة روحانية يومية تشمل آيات، أحاديث، حكم، وتحديات عملية لمساعدتك على استثمار أيام رمضان بأفضل صورة.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              {[
                { icon: <BookOpen className="w-10 h-10 text-white" />, title: "حكمة أو آية يومية", desc: "محتوى متجدد كل يوم يثري روحك ويقربك من الله." },
                { icon: <Star className="w-10 h-10 text-white fill-white" />, title: "تحديات يومية", desc: "أفعال عملية بسيطة تكسبك نقاطاً وتقوّي عزيمتك." },
                { icon: <Heart className="w-10 h-10 text-white" />, title: "تتبع إنجازاتك", desc: "تقويم يحسب تقدمك من 1 رمضان وحتى نهاية الشهر." },
              ].map((card, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md border border-orange-100 hover:scale-105 transition-transform">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">{card.icon}</div>
                  <h3 className="font-bold text-xl md:text-2xl text-gray-700 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onStart}
              className="group relative w-full md:w-auto mx-auto block px-16 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                ابدأ الرحلة
                <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 text-gray-500 text-base md:text-lg pb-6">
            <div className="flex gap-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />)}</div>
            <span>بارك الله في أيامكم</span>
            <div className="flex gap-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}