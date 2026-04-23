import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

type Message = { sender: "user" | "bot"; text: string };

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "مرحباً! أنا شعل، رفيقك في رمضان 🌙\nفضفض معي، وسأكون معك بكلمة من القلب، نصيحة، وعبادة مقترحة." }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;
    const newMessages: Message[] = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    const currentInput = userInput;
    setUserInput("");
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/fadfada", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput })
      });
      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch {
      setMessages([...newMessages, { sender: "bot", text: "يبدو أن الخادم غير متصل الآن 🌙\nتأكد من تشغيل الـ server على المنفذ 3000." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-h-[700px] bg-white rounded-3xl shadow-xl border-2 border-orange-100 overflow-hidden" dir="rtl">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5 flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-white font-bold text-xl">شعل</h2>
          <p className="text-white/70 text-sm">رفيقك الرمضاني – فضفض بحرية 🌙</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-orange-50/30">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.sender === "bot" ? "bg-orange-500" : "bg-gray-300"}`}>
              {msg.sender === "bot" ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
            </div>
            <div className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${msg.sender === "bot" ? "bg-white text-gray-800 rounded-tr-sm border border-orange-100" : "bg-orange-500 text-white rounded-tl-sm"}`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-tr-sm border border-orange-100 shadow-sm">
              <div className="flex gap-1">
                {[0,150,300].map(d => <span key={d} className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-orange-100">
        <div className="flex items-center gap-3">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="اكتب ما يدور في بالك... 💭"
            rows={1}
            className="flex-1 border-2 border-orange-100 rounded-2xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-orange-400 transition-colors bg-orange-50/50"
          />
          <button onClick={sendMessage} disabled={isLoading || !userInput.trim()} className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50 shadow-md">
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">Enter للإرسال • Shift+Enter لسطر جديد</p>
      </div>
    </div>
  );
}