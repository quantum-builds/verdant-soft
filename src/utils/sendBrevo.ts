import axios from "axios";

export async function sendEmail(
  fromEmail: string,
  toEmail: string,
  replyTo: string,
  subject: string,
  text: string,
  html?: string
) {
  console.log("key is ", process.env.BREVO_API_KEY);
  const res = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: { email: fromEmail, name: "Website Contact" }, // must be verified in Brevo
      to: [{ email: toEmail }],
      replyTo: { email: replyTo },
      subject,
      textContent: text,
      htmlContent: html || `<p>${text}</p>`,
    },
    {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY, // set in .env
        "content-type": "application/json",
      },
    }
  );

  return res.data;
}
