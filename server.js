const fs = require("fs");
const path = require("path");
const express = require("express");
const db = require("./db/db.json");
const routes = require("./routes");
const PORT = process.env || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use(express.static("public"));
app.use(routes);




app.listen(PORT, () => {
  console.log(`express server is listening at http://localhost:${PORT}`)
});