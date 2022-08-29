import express from 'express'
import routes from './routes.js'
import { config } from 'dotenv'
import cors from 'cors'

const api = express()
const PORT = process.env.PORT || 4652

config()

api.use(cors())
api.use(express.json())

api.use('/', routes)

api.listen(PORT, () =>{
    console.log(`server is running in ${PORT}`)
})