import Razorpay from "razorpay";

export function getRazorpayClient() {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay keys are not configured.");
  }

  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

/** Converts a price string like "₹4,999" into an integer amount in paise. */
export function rupeeStringToPaise(price: string): number {
  const rupees = Number(price.replace(/[^0-9.]/g, ""));
  return Math.round(rupees * 100);
}
