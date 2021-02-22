import { Application } from "express"

const express = require('express')
const app: Application = express()

app.use(express.json())

const PORT = process.env.NODE || 3000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in site http://localhost:${PORT}`)
})
