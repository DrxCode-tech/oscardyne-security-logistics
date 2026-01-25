import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

export async function GET() {
  try {
    const snap = await db
      .collection("contact_requests")
      .orderBy("createdAt", "desc")
      .get();

    const reports = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ reports });
  } catch (error) {
    console.error("FETCH CONTACT REPORTS ERROR:", error);

    return NextResponse.json(
      { error: "Unable to fetch reports" },
      { status: 500 }
    );
  }
}
