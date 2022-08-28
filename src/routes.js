import express from 'express'
import send from './controller/send.js'

const router = express.Router()

router.use('/send', send)

router.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not found'
    })
})

export default router