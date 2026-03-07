const fs = require("fs");
const PORTS =fs.readFileSync("/mnt/secrets/PORTS","utf8").trim();
console.log(PORTS)
const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
console.log("TOKEN_SECRET_KEY",process.env.TOKEN_SECRET_KEY);

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 4000 || PORTS


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
