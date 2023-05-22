const { Router } = require("express");
const fs = require("fs/promises");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const indexHtml = await fs.readFile("index.html", "utf-8");
    res.send(indexHtml);
  } catch (error) {
    console.error("Error reading index.html:", error);
    res.status(500).send("Error retrieving the index page");
  }
});

module.exports = route;

