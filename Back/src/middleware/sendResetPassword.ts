import Mailjet from "node-mailjet";
import dotenv from "dotenv";
dotenv.config();

// Récupération des clés API de Mailjet depuis les variables d'environnement
const mailJetApiKey: string | undefined =  process.env.mailJetApiKey;
const mailJetSecretKey: string | undefined = process.env.mailJetSecretKey;

interface resetPassword {
  email: string;
  token: string;
}

// Construction de l'objet de configuration pour l'initialisation de l'objet Mailjet
const construct = {
  apiKey: mailJetApiKey,
  apiSecret: mailJetSecretKey,
};

// Initialisation de l'objet Mailjet avec les clés API
const mailjet = new Mailjet(construct);

export const sendResetPassword = async ({ email, token }: resetPassword) => {
  // Envoi de l'e-mail avec le lien de réinitialisation
  const resetLink = `http://localhost:3000/reset-password/${token}`;
  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "lemillionaire23@gmail.com",
            Name: "Le Millionaire",
          },
          To: [
            {
              Email: email,
            },
          ],
          Subject: "Réinitialisation de mot de passe",
          HTMLPart: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Réinitialisation de mot de passe</title>
      </head>
      <body style="font-family: Arial, sans-serif;">

          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">

              <h2 style="color: #333;">Réinitialisation de mot de passe</h2>

              <p>Bonjour,</p>

              <p>Vous recevez ce message car une demande de réinitialisation de mot de passe a été effectuée pour votre compte. Si vous n'avez pas fait cette demande, veuillez ignorer ce message.</p>

              <p>Pour réinitialiser votre mot de passe, cliquez sur le lien ci-dessous :</p>

              <p><a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 3px;">Réinitialiser le mot de passe</a></p>

              <p>Si le lien ci-dessus ne fonctionne pas, vous pouvez copier et coller l'URL suivante dans votre navigateur:</p>

              <p>${resetLink}</p>

              <p>Merci</p>
              <p>L'équipe de support</p>
              <p>Le Millionaire</p>

          </div>

      </body>
      </html>
    `,
        },
      ],
    });

    return request;
  } catch (error: any) {
    return error.message;
  }
};
