import { createTransporter } from "./config.js";

// Envia email com texto simples
async function sendMailText(to, subject, text) {
  
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }
  
    await createTransporter().sendMail(mailOptions)
}

// Envia email com html 
async function sendMailHTML(to, subject, html) {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html
    }

    await createTransporter().sendMail(mailOptions)
}


export {
    sendMailText,
    sendMailHTML
}