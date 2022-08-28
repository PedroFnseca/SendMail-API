import express from 'express'
import routes from './routes.js'

const api = express()
api.use(express.json())
const PORT = process.env.PORT || 3333

api.use('/', routes)

api.listen(PORT, () =>{
    console.log(`server is running in ${PORT}`)
})