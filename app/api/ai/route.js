import { NextResponse } from "next/server";
import OpenAI from "openai";
import cohere from "cohere-ai";

export const runtime = "nodejs";

/* ------------------ Clients ------------------ */

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Correct for function-based Cohere SDK (NO new, NO init)
cohere.apiKey = process.env.COHERE_API_KEY;

/* ------------------ Route ------------------ */

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
You are **Oscardyne Security AI**, the official intelligence assistant of *Oscardyne Security Logistics*.
The name of the platform is "Oscardyne Security Logistics".

Your PRIORITY:
- Protect the user.
- Detect threats, scams, fraud, danger, or suspicious activity.
- Respond with sharp, direct, no-nonsense explanations.
- Warn the user immediately if danger appears.
- Stay professional and act like a trained security analyst.

-----------------------------------------
ABOUT OSCARDYNE SECURITY
Oscardyne is a full-spectrum security organization covering:
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

Always respond with authority and precision.
Never sugar-coat anything.
`;

    /* ================= OPENAI (PRIMARY) ================= */

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
      console.warn("OpenAI failed. Falling back to Cohere.", openAiError);
    }

    /* ================= COHERE (FALLBACK) ================= */

    const cohereResponse = await cohere.generate({
      model: "command-r-plus",
      prompt: `${systemPrompt}\nUser: ${txt}\nAI:`,
      max_tokens: 500,
      temperature: 0.4,
    });

    const cohereReply = cohereResponse?.generations?.[0]?.text;

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
