// import nodemailer from "nodemailer";
// import sgTransport from "nodemailer-sendgrid-transport";

// const transporter = {
//   host: "providerconcerns.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "support@providerconcerns.com",
//     pass: "Support@pcs",
//   },
// };

// const mailer = nodemailer.createTransport(transporter);

// export default async (req, res) => {
//   // console.log(req.body)
//   const { name, email, number, subject, text } = req.body;

//   // verify connection configuration
//   // mailer.verify(function (error, success) {
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log("Server is ready to take our messages");
//   //   }
//   // });

//   console.log("Headers => :", req.headers)

//   const data = {
//     // Update your email here
//     to: "support@providerconcerns.com",
//     from: "example@gmail.com",
//     subject: "Hi there",
//     text: "What should i write?",
//     html: `
//             <b>From:</b> ${name} <br /> 
//             <b>Number:</b> ${number} <br /> 
//             <b>Subject:</b> ${subject} <br /> 
//             <b>Message:</b> ${text} 
//         `,
//   };
//   try {
//     const response = await mailer.sendMail(data);
//     console.log(response);
//     res.status(200).send("Email send successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error proccessing charge");
//   }
// };
