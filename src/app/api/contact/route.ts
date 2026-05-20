import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          errors: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message, website } = result.data;

    if (website?.trim()) {
      return NextResponse.json(
        {
          success: true,
        },
        { status: 200 },
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dev.vahdani@gmail.com",

      subject: `[Portfolio] ${subject}`,

      replyTo: email,

      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>📩 New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p style="white-space: pre-wrap;">
            ${message.replace(/\n/g, "<br />")}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
