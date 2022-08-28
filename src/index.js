import express from 'express'
import routes from './routes.js'
import { config } from 'dotenv'

const api = express()
const PORT = process.env.PORT || 3333

config()

api.use(express.json())

api.use('/', routes)

api.listen(PORT, () =>{
    console.log(`server is running in ${PORT}`)
})