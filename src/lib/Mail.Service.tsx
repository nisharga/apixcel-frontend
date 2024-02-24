import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || '' ,
  port: Number(process.env.EMAIL_PORT) || 0,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const SendEmail = async (name: any, token: any, email: any) => {
  const info = await transporter.sendMail({
    from: "patraarijit440@gmail.com",
    to: email, // list of receivers
    subject: "Forget Password", // Subject line
    html: `

        Hey, ${name},
        your forget passwrod link is below click the link <br/>
        <a href="https://nextjs-authentication-system.vercel.app/update-password?token=${token}">Click</a>

        `, // html body
  });

  return info;
};
