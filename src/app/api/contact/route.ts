import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ✅ Validate with Zod (frontend + backend safety)
    const validatedData = contactSchema.parse(body);

    const { name, email, subject, message, website } = validatedData;

    // 🕳️ HONEYPOT CHECK (BOT DETECTION)
    if (website && website.trim().length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Bot detected",
        },
        { status: 400 },
      );
    }

    // 📧 Send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dev.vahdani@gmail.com",

      subject: `Portfolio Contact: ${subject}`,

      replyTo: email,

      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>📩 New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
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
