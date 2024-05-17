import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  const { name, email, businessName, number, text } = req.body;

  // var mailOptions = {
  //   from: "ahsanmg1998@gmail.com",
  //   to: "andrewhall0552@gmail.com",
  //   subject: "Consu",
  //   text: "Thanks for booking the consultation.",
  //   html: "<b><i>Thanks for booking the consultation.</i></b>",
  // };

  const mailOptions = {
    // Update your email here
    to: process.env.SUPPORT_EMAIL,
    from: email,
    subject: `Consultation Request from ${name}`,
    text: text,
    html: `
    <div class="header" style="background-color: #f2f2f2; padding: 20px 0; text-align: center;">
        <h1>Consultation Request from ${name}</h1>
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
                <td style="padding: 10px; border: 1px solid #ddd;">${number}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Business Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${businessName}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${text}</td>
            </tr>
        </table>
    </div>`,
  };
  try {
    // const response = await mailer.sendMail(mailOptions);
    // console.log(response);

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).send({ message: "EMAIL_SEND_ERROR" });
      }

      // console.log("Email sent! Info:: " + JSON.stringify(info));

      return res.status(200).send({ message: "EMAIL_SENT_SUCCESS" });
    });
    // res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error_proccessing_charge");
  }
};
