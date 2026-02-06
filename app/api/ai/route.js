import { NextResponse } from "next/server";
import OpenAI from "openai";
import { CohereClient } from "cohere-ai";

export const runtime = "nodejs";

/* ================= CLIENTS ================= */

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

/* ================= ROUTE ================= */

console.log("API /api/ai HIT");
console.log("OPENAI KEY EXISTS:", !!process.env.OPENAI_API_KEY);
console.log("COHERE KEY EXISTS:", !!process.env.COHERE_API_KEY);

export async function POST(request) {
  try {
    const { txt, history = [] } = await request.json();

    if (!txt || !txt.trim()) {
      return NextResponse.json(
        { error: "Missing text" },
        { status: 400 }
      );
    }

    const memoryContext = history
      .map(m => `${m.from === "user" ? "User" : "AI"}: ${m.text}`)
      .join("\n");

    const systemPrompt = `
You are Oscardyne Security AI, the official intelligence assistant of Oscardyne Security Logistics.

Your role:
- Detect threats, scams, fraud, danger, or suspicious activity
- Warn clearly and immediately when risk is present
- Respond like a professional security analyst
- Be direct, precise, and authoritative

-----------------------------------------
ABOUT OSCARDYNE SECURITY
- Physical Security
- Environmental Security
- Cybersecurity
- Information Security
- Event Security
- Commercial Security

-----------------------------------------
EMERGENCY CONTACT
Phone: (403) 472 1938
Email: oscarfitnessco@gmail.com

-----------------------------------------
TEMPORARY MEMORY
${memoryContext}
-----------------------------------------
`;

    /* ============== OPENAI (PRIMARY) ============== */

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: txt },
        ],
      });

      const reply = response?.choices?.[0]?.message?.content;

      if (!reply) throw new Error("Empty OpenAI response");

      return NextResponse.json({ reply });

    } catch (openAiError) {
      console.warn("OpenAI failed, falling back to Cohere", openAiError);
    }

    /* ============== COHERE (FALLBACK — CORRECT) ============== */

    const cohereResponse = await cohere.chat({
      model: "command-a-03-2025",
      message: txt,
      preamble: systemPrompt,
    });

    const cohereReply = cohereResponse?.text;

    if (!cohereReply) {
      throw new Error("Cohere returned empty response");
    }

    return NextResponse.json({
      reply: cohereReply.trim(),
    });

  } catch (error) {
    console.error("AI ROUTE FAILED COMPLETELY:", error);
    return NextResponse.json(
      { error: "AI request failed." },
      { status: 500 }
    );
  }
}
