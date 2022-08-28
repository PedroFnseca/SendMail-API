import express from 'express'

const router = express.Router()

router.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not found'
    })
})

export default router