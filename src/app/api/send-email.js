import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'admin@beatstream.app',
      pass: 'upUZU6nfy9y0',
    },
  });

  const mailOptions = {
    from: email,
    to: 'admin@beatstream.app',
    subject: 'Join Waitlist Request',
    text: `A new user has requested to join the waitlist.\n\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}