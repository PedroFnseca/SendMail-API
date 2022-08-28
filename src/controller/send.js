import express from 'express'
import { body, validationResult } from 'express-validator'
import { sendMailHTML, sendMailText } from '../service/sendMail.js'

const router = express.Router()

// Endpoint: /html
// Tipo: POST
// Descrição: Envia email com html
router.post('/html', [
    body('to').isEmail().withMessage('E-mail inválido'),
    body('subject').isString().withMessage('Assunto inválido'),
    body('html').isString().withMessage('Html inválido')
], async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const { to, subject, html } = req.body

    try {
        await sendMailHTML(to, subject, html)
        res.status(200).json({
            message: 'Email enviado com sucesso'
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message
        })
    }
})

// Endpoint: /text
// Tipo: POST
// Descrição: Envia email com texto simples
router.post('/text', [
    body('to').isEmail().withMessage('E-mail inválido'),
    body('subject').isString().withMessage('Assunto inválido'),
    body('text').isString().withMessage('Texto inválido')
], async (req, res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const { to, subject, text } = req.body

    try {
        await sendMailText(to, subject, text)
        res.status(200).json({
            message: 'Email enviado com sucesso'
        })
    }
    catch(err){
        res.status(500).json({
            error: err.message
        })
    }
})

export default router