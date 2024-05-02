import nodemailer from "nodemailer";

const transporter = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
};

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  // console.log(req.body)
  const { name, phone, email, message } = req.body;

  const data = {
    // Update your email here
    to: process.env.SUPPORT_EMAIL,
    from: email,
    subject: `Feedback from ${name}`,
    html: `
    <div class="header" style="background-color: #f2f2f2; padding: 20px 0; text-align: center;">
        <h1>Feedback</h1>
    </div>
    <div class="content" style="padding: 20px;">
        <table style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Feedback Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
        </table>
    </div>
    `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
