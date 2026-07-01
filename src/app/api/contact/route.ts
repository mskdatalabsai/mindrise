import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = payload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { message: "Please fill in every field before sending." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // ---------------------------------------------------------------------
  // TODO: connect a real email/notification provider before going live —
  // this validates the payload and responds successfully so the UI is
  // fully wired end-to-end, but nothing is delivered anywhere yet.
  //
  // Example using Resend (npm install resend):
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "TheMindRise.ai <noreply@themindrise.ai>",
  //     to: "contact@themindrise.ai",
  //     replyTo: email,
  //     subject: `New inquiry: ${subject}`,
  //     text: `${name} (${email}) wrote:\n\n${message}`,
  //   });
  // ---------------------------------------------------------------------
  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json(
    { message: "Message received. We'll be in touch shortly." },
    { status: 200 }
  );
}
