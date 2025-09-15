import { Resend } from "resend";

// Instancie o Resend com a chave da API a partir das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // O Vercel já lida com CORS para funções no mesmo projeto,
  // mas podemos manter os headers para garantir compatibilidade em dev
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Domínio verificado no Resend
        to: "gabrielabalbuquerque@outlook.com",
        subject: `Contato de ${name} pelo Portfólio`,
        html: `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      });
      return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return res.status(500).json({ error: "Falha ao enviar mensagem" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }
}
