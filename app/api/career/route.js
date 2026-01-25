import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("file");

    let fileUrl = null;

    if (file && typeof file === "object") {
      const buffer = Buffer.from(await file.arrayBuffer());

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "applications",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      fileUrl = upload.secure_url;
    }

    const docRef = await db.collection("careerApplications").add({
      name,
      email,
      phone,
      fileUrl,
      submittedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("CAREER API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application." },
      { status: 500 }
    );
  }
}
