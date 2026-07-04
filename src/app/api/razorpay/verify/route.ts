import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";

interface VerifyPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export async function POST(request: Request) {
  let payload: Partial<VerifyPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = payload;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ message: "Missing payment details." }, { status: 400 });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keySecret) {
    return NextResponse.json(
      { message: "Payments are not configured yet." },
      { status: 500 }
    );
  }

  const expectedSignature = createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ message: "Payment verification failed." }, { status: 400 });
  }

  return NextResponse.json({ verified: true });
}
