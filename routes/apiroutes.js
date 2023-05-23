const router = require("express").Router();
const path = require("path");
const db = require("../db/db.json");


router.get("/notes", (req, res) => {
  const savedNotes = db;
  res.json(savedNotes);
});

router.post("/notes", (req, res) => {
  const savedNotes = db;
  const note = req.body;
  savedNotes.push(note);
  fs.writeFile(path.join(__dirname,"../db/db.json")),
  JSON.stringify(savedNotes);

  res.status(200).json(savedNotes);

});

module.exports = router; 