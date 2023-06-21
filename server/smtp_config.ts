import { SmtpClient } from "smtp";

const client = new SmtpClient();

await client.connectTLS({
  hostname: "mail.tu-chemnitz.de",
  port: 465,
  username: <string> Deno.env.get("USER_ID"),
  password: <string> Deno.env.get("PASS"),
});

export const sendMail = async (toEmail: string, fullName: string) => {
  await client.send({
    from: <string> Deno.env.get("USER_ID_EMAIL"),
    to: toEmail.trim(),
    subject: `Thanks you ${fullName.toUpperCase()}`,
    content: `
        Dear ${fullName.toUpperCase()},

        Thank You for Your Feedback on My Portfolio and I truly appreciate the time you took to review my work and share your insights.

        Your feedback means a lot to me as advice with a fresh perspective and helps me improve as a frontend developer.
        I am thrilled to receive such constructive criticism, and I will use it to refine my skills and enhance my portfolio further.

        Best regards,
        MD TAREKUL ISLAM
        `,
    html: `

        <!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your custom CSS styles here */
    /* For example:
      body {
        font-family: Arial, sans-serif;
        line-height: 1.5;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
      }
      .message {
        margin-bottom: 20px;
      }
      .signature {
        text-align: right;
      }
    */
  </style>
</head>
<body>
  <div class="container">
    <div class="message">
      <p>Dear ${fullName},</p>
      <p>Thank you for your feedback on my portfolio, and I truly appreciate the time you took to review my work and share your insights.</p>
      <p>Your feedback means a lot to me as it provides me with a fresh perspective and helps me improve as a frontend developer. I am thrilled to receive such constructive criticism, and I will use it to refine my skills and enhance my portfolio further.</p>
      <p>Best regards,</p>
      <p>MD TAREKUL ISLAM</p>
    </div>
  </div>
</body>
</html>

        `,
  });
  await client.close();
};
