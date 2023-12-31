const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const tukangRouter = require('./routes/tukang-router')
const authRouter = require('./routes/auth-router')

app.use("/api/v1/tukang", tukangRouter)
app.use("/api/v1/auth", authRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})