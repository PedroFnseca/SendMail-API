import nodeMailer from 'nodemailer'

// Cria um transporter para o envio de emails
function createTransporter(){
  return nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PWD_APP
    },
    tls: {
      rejectUnauthorized: false
    }
  })
}

export {
  createTransporter
}