import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await db.collection("contact_requests").add({
      name,
      phone: phone || null,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Contact request received",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
