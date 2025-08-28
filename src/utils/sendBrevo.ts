import axios from "axios";

export async function sendEmail(
  fromEmail: string,
  toEmail: string,
  replyTo: string,
  subject: string,
  text: string,
  html?: string
) {
  const res = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: { email: fromEmail, name: "Verdant Soft" },
      to: [{ email: toEmail }],
      replyTo: { email: replyTo },
      subject,
      textContent: text,
      htmlContent: html || `<p>${text}</p>`,
    },
    {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
    }
  );

  return res.data;
}
