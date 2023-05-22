const router = require("express").Router();
const apiRoute = require("./apiroutes");
const htmlRoute = require("./htmlroutes");

router.use("/api", apiRoute);
router.use("/", htmlRoute);


module.exports = router

