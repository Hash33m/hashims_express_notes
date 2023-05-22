const fs = require("fs/promises")
const express = require("express")
const db = require("./db/db.json")

console.log(db)
const app = express()

let PORT = process.env.PORT || 8000

app.use(express.json());

app.get("/api/notes", async (req, res) => {
  try {
    const dbData = await fs.readFile("./db/db.json", "utf-8");
    const notes = JSON.parse(dbData);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error reading db.json:", error);
    res.status(500).send("Internal Server Error");
  }
});




app.get("/api/notes/:id", async (req, res) => {
  try {
    const dbData = await fs.readFile("./db/db.json", "utf-8");
    const notes = JSON.parse(dbData);
    const note = notes.find((note) => note.id === req.params.id);

    if (!note) {
      res.status(404).send("Note not found");
      return;
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error reading db.json:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/api/notes", async (req, res) => {
  console.log(req.body);

  if (!req.body.title || !req.body.text) {
    res.status(400).send("Missing title or text in request body");
    return;
  }

  try {
    const dbData = await fs.readFile("./db/db.json", "utf-8");
    const notes = JSON.parse(dbData);

    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    notes.push(newNote);

    await fs.writeFile("./db/db.json", JSON.stringify(notes, null, 2));

    res.status(200).json(newNote);
  } catch (error) {
    console.error("Error writing to db.json:", error);
    res.status(500).send("Error saving notes, please try");
  }
});










app.listen(PORT, () => {
  console.log(`express server is listening at http://localhost:${PORT}`)
});