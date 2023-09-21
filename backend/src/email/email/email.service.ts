import { Injectable, Response } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
const nodemailer = require("nodemailer")

@Injectable()
export class EmailService {
    async sendEmail(name: string, email: string, message: string): Promise<string> {
      const myOAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
      );
  
      myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
      });
  
      const accessToken = (await myOAuth2Client.getAccessToken()).token;
  
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: "emialdepagina@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });
  
      const messages = {
        from: "emaildepagina@gmail.com",
        to: "comaspedro6@gmail.com",
        subject: `Sent from: ${name}`,
        text: `Mensaje Enviado por ${name} atraves de Pagina web de Pedro Comas,
                Datos de usuario:
                Nombre: ${name}
                Email: ${email}
                Mensaje: ${message}`,
        html: `<h2>Mensaje Enviado por ${name} atraves de frenzymedia.com/h2>
                <br>
                <div>
                <h3>Datos de usuario:</h3>
                <br>
                <span style="font-size: 18px">Nombre: ${name}</span>
                <br>
                <span style="font-size: 18px">Email: ${email}</span>
                <br>
                <span style="font-size: 18px"> Mensaje: ${message}</span>
                </div>`
      };
  
      return new Promise((resolve, reject) => {
        transporter.verify((err, success) => {
          if (err) {
            console.log(err);
            reject('Error verifying transporter');
          }
  
          transporter.sendMail(messages, (err) => {
            if (err) {
              console.log(err);
              reject('Something went wrong.');
            } else {
              console.log("Email successfully sent to recipient!")
              resolve("Email successfully sent to recipient!");
            }
          });
        });
      });
    }
  }
