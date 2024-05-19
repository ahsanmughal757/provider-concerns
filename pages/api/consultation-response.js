import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ConsultationResponseEmail } from "../../emails/consultation-response";
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SUPPORT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export default async (req, res) => {
  const { name, email } = req.body;

  const consultationMail = render(
    <ConsultationResponseEmail name={name} email={email} />
  );

  const mailOptions = {
    // Update your email here
    to: email,
    from: "Provider HealthCare Solutions <support@providerconcerns.com>",
    subject: `Thank you, ${name}! for contacting Provider Concerns Solutions.`,
    html: consultationMail,
    attachments: [
      {
        filename: "PCS Company Profile.pdf",
        path: path.resolve("public/pdfs/PCS_Company_Profile.pdf"),
        contentType: "application/pdf",
      },
    ],
  };
  try {

    console.log("__dirname: ", __dirname);
    await transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "EMAIL_SEND_ERROR" });
      }

      if (info?.accepted?.length !== 0) {
        console.log("Email sent INFO: " + JSON.stringify(info));
        return res.status(200).json({ message: "EMAIL_SENT_SUCCESS" });
      } else if (info?.rejected?.length === 0) {
        return res.status(500).json({ message: "EMAIL_SEND_REJECTED" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error_proccessing_charge");
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};
