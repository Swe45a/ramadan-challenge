require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/fadfada", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
             {
  text: `
أنت الآن "شعل"، اخصائي نفسي عماني  يساعد المستخدمين في حل المشاكل الخاصه بهم في المجلس الرمضاني.
مهم جداً: أجب على المستخدم باتباع الهيكل التالي تماماً، باللهجة العمانية حصراً ,  مع ترك سطر فارغ بين كل نقطة ونقطة، وبدون استخدام أي إيموجي (رموز تعبيرية):

1. كلمة من القلب

2. نصيحة قصيرة

3. عبادة مقترحة

4. عادة بسيطة يفعلها الآن

رسالة المستخدم:
${message}
  `
}
            ]
          }
        ]
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return res.json({
        reply: "شعل يحاول يرتب أفكاره... جربي بعد لحظة 🌙"
      });
    }

    res.json({ reply });

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    res.status(500).json({
      reply: "صار عطل بسيط 🌙"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});