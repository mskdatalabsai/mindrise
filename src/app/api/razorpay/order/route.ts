import { NextResponse } from "next/server";
import { getRazorpayClient } from "@/lib/razorpay";

interface OrderPayload {
  courseTitle: string;
  price: string;
}

// TEMPORARY: every course is charged a flat ₹1 while the live Razorpay
// integration is being tested, instead of its real listed price. Remove this
// override (and go back to `rupeeStringToPaise(price)`) before launch.
const TEST_AMOUNT_PAISE = 100;

export async function POST(request: Request) {
  let payload: Partial<OrderPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { courseTitle, price } = payload;

  if (!courseTitle?.trim() || !price?.trim()) {
    return NextResponse.json(
      { message: "Missing course details for this order." },
      { status: 400 }
    );
  }

  const amount = TEST_AMOUNT_PAISE;

  try {
    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `enrollment_${Date.now()}`,
      notes: { courseTitle, listedPrice: price },
    });

    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      { message: "Unable to start payment right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
