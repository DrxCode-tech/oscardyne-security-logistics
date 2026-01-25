import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);
console.log("KEY EXISTS?", process.env.FIREBASE_ADMIN_KEY ? "YES" : "NO");


if (!serviceAccount) {
  throw new Error("FIREBASE_ADMIN_KEY is missing");
}

// FIX: convert \\n to real newlines
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
