require('dotenv').config()
const PORT = process.env.PORT 
const express = require('express')
const cors = require('cors')
const app = express()
const route = require('./routes/routes')
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Serve static files to react
app.use(express.static(path.resolve(__dirname,"client","build")))
app.use('',route)
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})