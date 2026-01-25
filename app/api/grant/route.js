import { NextResponse } from "next/server";
import mailjet from "node-mailjet";
import { db } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { email, name, date } = await request.json();

    if (!email || !name || !date) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const mj = mailjet.apiConnect(
      process.env.MJ_API_KEY,
      process.env.MJ_SECRET
    );

    await mj.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: process.env.MJ_SENDER },
          To: [{ Email: email }],
          Subject: "Your Application Has Been Granted",
          TextPart: `Hello ${name}, your application has been granted. Your appointment date is ${date}.`,
        },
      ],
    });

    // Delete applicant records
    const snap = await db
      .collection("careerApplications")
      .where("email", "==", email)
      .get();

    const batch = db.batch();
    snap.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("GRANT ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
