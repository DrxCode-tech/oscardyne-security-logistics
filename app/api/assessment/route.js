import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const form = await request.json();

    if (!form?.name || !form?.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are Oscardyne Security AI Sales Consultant.

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
6. Professional Closing`,
        },
        {
          role: "user",
          content: JSON.stringify(form),
        },
      ],
    });

    const aiReport = completion.choices[0]?.message?.content;

    return NextResponse.json({
      success: true,
      aiReport,
    });
  } catch (error) {
    console.error("ASSESSMENT ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
