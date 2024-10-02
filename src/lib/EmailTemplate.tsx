// app/lib/emailTemplate.ts

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return `
    <div>
      <h1>
        ${email}/${name}からお問い合わせが届いております。
      </h1>
      <h2>
        <span class="font-bold">${subject}</span>
        について下記のような問い合わせです。
      </h2>
      <p>${message}</p>
    </div>
  `;
}
