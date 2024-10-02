import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { EmailTemplate } from "@/lib/EmailTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "お名前の入力が必要です",
  }),
  email: z.string().email({ message: "メールアドレスの入力が必要です" }),
  subject: z.string().min(2, {
    message: "件名の入力が必要です",
  }),
  message: z.string().min(10, {
    message: "メッセージの入力が必要です",
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validateData = formSchema.parse(body);

    const msg = {
      to: "info@hiveminds.co.jp",
      from: "お問い合わせ hiveminds.co.jp <info@hiveminds.co.jp>",
      subject: `お問い合わせ ${validateData.subject}`,
      html: EmailTemplate(validateData),
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 },
      );
    }
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
