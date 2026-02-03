import { NextResponse } from "next/server";
import OpenAI from "openai";
import Cohere from "cohere-ai";

export const runtime = "nodejs";

/* ------------ Clients ------------ */

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const cohere = new Cohere.Client({
  token: process.env.COHERE_API_KEY,
});

/* ------------ Route ------------ */

export async function POST(request) {
  try {
    const form = await request.json();

    if (!form?.name || !form?.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are Oscardyne Security AI Sales Consultant.

Produce a personalised, realistic, professional security assessment.
Recommend exactly ONE service.
Be confident, clear, and sales-focused.

End with contact info:
Email: oscarfitnessco@gmail.com
Phone: (403) 472 1938

Format strictly as:
1. Summary of Risk
2. Identified Weak Points
3. Recommended Security Solution
4. Why This Solves the Problem
5. Simple Action Plan
6. Professional Closing
`;

    /* ================= OPENAI (PRIMARY) ================= */

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: JSON.stringify(form) },
        ],
      });

      const aiReport = completion?.choices?.[0]?.message?.content;

      if (!aiReport) throw new Error("Empty OpenAI response");

      return NextResponse.json({
        success: true,
        aiReport,
      });

    } catch (openAiError) {
      console.warn("OpenAI failed, falling back to Cohere", openAiError);
    }

    /* ================= COHERE (FALLBACK) ================= */

    const cohereResponse = await cohere.generate({
      model: "command-r-plus",
      prompt: `${systemPrompt}\nUser Data:\n${JSON.stringify(form, null, 2)}\n\nAI Response:`,
      max_tokens: 700,
      temperature: 0.4,
    });

    const aiReport = cohereResponse.generations?.[0]?.text;

    if (!aiReport) {
      throw new Error("Cohere returned empty response");
    }

    return NextResponse.json({
      success: true,
      aiReport: aiReport.trim(),
    });

  } catch (error) {
    console.error("ASSESSMENT ROUTE FAILED:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
