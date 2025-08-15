import { NextRequest, NextResponse } from "next/server";
import postmarkClient from "@/config/postmark-config";

interface ResumeRequest {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  experience?: string;
  resume: File;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const data: ResumeRequest = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      telephone: formData.get("telephone")?.toString() || "",
      experience: formData.get("experienceLevel")?.toString() || undefined,
      resume: formData.get("resume") as File,
    };
    console.log("data is ",data)
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.telephone ||
      !data.resume
    ) {
      return NextResponse.json(
        { message: "All fields are required.", success: false },
        { status: 400 }
      );
    }

    const toEmail = process.env.CV_EMAIL_TO;
    const fromEmail = process.env.EMAIL_FROM;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        {
          message: "EMAIL_TO or EMAIL_FROM environment variables are missing.",
          success: false,
        },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await data.resume.arrayBuffer());

    await postmarkClient.sendEmail({
      From: fromEmail,
      To: toEmail,
      Subject: `New Resume from ${data.firstName} ${data.lastName}`,
      HtmlBody: `
        <h2>New Job Application</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telephone:</strong> ${data.telephone}</p>
        ${
          data.experience
            ? `<p><strong>Experience:</strong> ${data.experience}</p>`
            : ""
        }
      `,
      Attachments: [
        {
          Name: data.resume.name,
          Content: buffer.toString("base64"),
          ContentType: data.resume.type,
          ContentID: "",
        },
      ],
    });

    return NextResponse.json(
      { message: "Resume sent successfully!", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Postmark Error:", error);
    return NextResponse.json(
      { message: "Failed to send resume.", success: false },
      { status: 500 }
    );
  }
}
