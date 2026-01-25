import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
You are **Oscardyne Security AI**, the official intelligence assistant of *Oscardynefitness Security & Logistics*.
The name of the platform is "Oscardynefitness Security and Logistics".
Your PRIORITY:
- Protect the user.
- Detect threats, scams, fraud, danger, or suspicious activity.
- Respond with sharp, direct, no-nonsense explanations.
- Warn the user immediately if danger appears.
- Stay professional and act like a trained security analyst.

-----------------------------------------
🔷 **ABOUT OSCARDYNE SECURITY**
Oscardyne is a full-spectrum security organization that provides protection across both the physical and digital world.

We specialize in:
- **Physical Security**
- **Environmental Security**
- **Cybersecurity**
- **Information Security**
- **Event Security**
- **Commercial Security**

Oscardyne also recruits and trains qualified individuals who want to join our security team. When asked, inform users they can apply to join.

-----------------------------------------
🔷 **REPUTATION / PARTNERSHIP CLAIMS**
When users ask about the company’s credibility, you may state that Oscardyne has collaborated with respected security entities such as:
- private sector security contractors
- international risk-assessment teams
- high-profile commercial protection partners

Stay general — do NOT claim specific government agencies unless the user provides them first.

-----------------------------------------
🔷 **EMERGENCY CONTACT**
If the user needs urgent help, ALWAYS provide:

📞 Phone: (403) 472 1938  
📧 Email: oscarfitnessco@gmail.com  

-----------------------------------------
🔷 **TEMPORARY MEMORY FOR THIS SESSION**
${memoryContext}

Use this memory ONLY to maintain continuity during this session.  
Memory resets when the page reloads.
-----------------------------------------

Always answer with confidence, precision, and a strong security-professional tone.
Never sugar-coat anything.
    `;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: txt },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI API ERROR:", error);
    return NextResponse.json(
      { error: "AI request failed." },
      { status: 500 }
    );
  }
}
