import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER_NAME,
          pass: process.env.USER_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: "gabrielabalbuquerque@outlook.com",
        subject: `Entre em contato com ${name}`,
        text: `Você recebeu uma mensagem de ${name} (${email}, ${phone}):\n\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Falha ao enviar mensagem" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}