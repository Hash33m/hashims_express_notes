const {Router} = require("express");
const { rootCertificates } = require("tls");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const indexHtml = await fs.readFile("index.html", "utf-8");
    res.render(indexHtml);
  } catch (error) {
    console.error("Error reading index.html:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = route
