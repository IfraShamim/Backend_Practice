require('dotenv').config()
const express = require('express')
// require('express'): Node.js ka built-in function require() use hota hai kisi external module ko import karne ke liye.
// Express ko apne project mein use karne ke liye import kiya.

const app = express()
// Ek Express app banayi jise hum aage chalake routes aur functions assign karenge.

const port = 3000
// Server kis port par chalega, wo set kiya gaya (3000).

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Jab user root page par aaye (/), to usko "Hello World!" message dikhaye.

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// Server ko start kiya gaya aur console mein message aayega: "Example app listening on port 3000"

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})