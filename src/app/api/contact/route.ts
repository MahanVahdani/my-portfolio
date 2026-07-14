import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contactSchema";
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";

// --- TEMPORARILY DISABLED FOR TESTING ---
// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL!,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// });
//
// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(2, "1 h"),
//   analytics: true,
//   prefix: "@upstash/ratelimit",
// });

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";

    // Extract Location from Vercel Headers
    const city = request.headers.get("x-vercel-ip-city") ?? "Unknown City";
    const country =
      request.headers.get("x-vercel-ip-country") ?? "Unknown Country";
    const location = `${city}, ${country}`;

    // --- TEMPORARILY DISABLED FOR TESTING ---
    // const { success, limit, reset, remaining } = await ratelimit.limit(
    //   `contact_form_${ip}`,
    // );
    //
    // if (!success) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Too many requests. Please try again later.",
    //     },
    //     {
    //       status: 429,
    //       headers: {
    //         "X-RateLimit-Limit": limit.toString(),
    //         "X-RateLimit-Remaining": remaining.toString(),
    //         "X-RateLimit-Reset": reset.toString(),
    //       },
    //     },
    //   );
    // }

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

    // Honeypot check
    if (website?.trim()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: "Mahan Portfolio <onboarding@resend.dev>",
      to: "dev.vahdani@gmail.com",
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>📩 New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>📍 Sent from:</strong> ${location}</p>
          <hr />
          <p style="white-space: pre-wrap; font-size: 16px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
