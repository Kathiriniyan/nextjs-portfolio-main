import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    const html = `
      <div>
        <h1 style="color: #facc15;">${subject}</h1>
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      </div>
    `;
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      reply_to: email, // makes it easy to reply to sender
      subject,
      html,
    });
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
