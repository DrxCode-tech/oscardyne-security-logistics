import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin"; // adjust path if needed

export async function POST(req) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json(
                { error: "Missing application ID" },
                { status: 400 }
            );
        }

        await db.collection("careerApplications").doc(id).delete();

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to delete application" },
            { status: 500 }
        );
    }
}
