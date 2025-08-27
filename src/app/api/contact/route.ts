import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendBrevo";

interface EmailRequest {
  email: string;
  name: string;
  message: string;
  html?: string;
}

export async function POST(req: NextRequest) {
  const {
    email: from,
    name,
    message: text,
    html,
  }: EmailRequest = await req.json();

  if (!from || !name || !text) {
    return NextResponse.json(
      { message: "From, name, and text fields are required.", success: false },
      { status: 400 }
    );
  }

  const toEmail = process.env.EMAIL_TO;
  const fromEmail = process.env.EMAIL_FROM;

  if (!toEmail || !fromEmail) {
    return NextResponse.json(
      {
        error: "EMAIL_TO or EMAIL_FROM environment variables are missing.",
        success: false,
      },
      { status: 500 }
    );
  }

  try {
    const res = await sendEmail(
      fromEmail,
      toEmail,
      from,
      `Message from ${name} - Contact Form`,
      text,
      html
    );

    return NextResponse.json(
      { message: "Email sent successfully!", success: true, response: res },
      { status: 200 }
    );
  } catch (error) {
    console.error("Brevo Error:", error);
    return NextResponse.json(
      { message: "Failed to send email.", success: false },
      { status: 500 }
    );
  }
}
