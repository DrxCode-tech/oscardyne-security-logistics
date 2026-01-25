import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import { Readable } from "stream";

// Required for file uploads
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper: convert Request → Node stream
async function requestToNodeStream(request) {
  const buffer = Buffer.from(await request.arrayBuffer());
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export async function POST(request) {
  try {
    const form = formidable({ multiples: false });

    const stream = await requestToNodeStream(request);

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(stream, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const file = Array.isArray(files.file)
      ? files.file[0]
      : files.file;

    let fileUrl = null;

    if (file) {
      const upload = await cloudinary.uploader.upload(file.filepath, {
        folder: "applications",
        resource_type: "auto",
      });
      fileUrl = upload.secure_url;
    }

    const docRef = await db.collection("careerApplications").add({
      name: fields.name?.[0] || "",
      email: fields.email?.[0] || "",
      phone: fields.phone?.[0] || "",
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
