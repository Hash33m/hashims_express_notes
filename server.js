const fs = require("fs/promises")
const express = require("express")
const db = require("./db/db.json")

console.log(db)
const app = express()

let PORT = process.env.PORT || 8000

app.use(express.json())

app.get("/notes", (req, res) => {
  console.log("getting all notes", req.headers)
  const notes = fs.readFile(db).then((result) => result ?? null)
  console.log("/notes", notes)


  res.status(200).json({ db , notes})
})



app.listen(PORT, () => {
  console.log(`express server is listening at http://localhost:${PORT}`)
})