import { NextResponse } from "next/server";
import { getResendClient, EMAIL_FROM, BUSINESS_EMAIL } from "@/lib/resend";

interface EnrollmentPayload {
  name: string;
  email: string;
  phone: string;
  courseTitle: string;
  preferredDate: string;
  paymentId: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Partial<EnrollmentPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, courseTitle, preferredDate, paymentId, message } = payload;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !courseTitle?.trim() ||
    !preferredDate?.trim() ||
    !paymentId?.trim()
  ) {
    return NextResponse.json(
      { message: "Missing required enrollment details." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
  }

  // Payment has already succeeded by the time this runs, so a failure to send
  // either email shouldn't fail the enrollment itself — just log it. Both
  // sends are attempted independently so one failing doesn't block the other.
  try {
    const resend = getResendClient();

    const learnerEmail = resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: `You're registered for ${courseTitle}!`,
      text: `Hi ${name},

You're all set — you've successfully registered for ${courseTitle}, preferred date: ${preferredDate}.

Your Zoom meeting link and joining instructions will be sent to this email one day before the session.

We're excited to have you!
TheMindRise.ai`,
    });

    const businessEmail = resend.emails.send({
      from: EMAIL_FROM,
      to: BUSINESS_EMAIL,
      replyTo: email,
      subject: `New enrollment: ${courseTitle}`,
      text: `New enrollment received.

Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${courseTitle}
Preferred date: ${preferredDate}
Payment ID: ${paymentId}
Message: ${message?.trim() || "(none)"}`,
    });

    const [learnerResult, businessResult] = await Promise.allSettled([
      learnerEmail,
      businessEmail,
    ]);

    if (learnerResult.status === "rejected") {
      console.error("Failed to send learner confirmation email:", learnerResult.reason);
    }
    if (businessResult.status === "rejected") {
      console.error("Failed to send business notification email:", businessResult.reason);
    }
  } catch (error) {
    console.error("Enrollment email sending failed:", error);
  }

  return NextResponse.json({ message: "Enrollment confirmed." }, { status: 200 });
}
