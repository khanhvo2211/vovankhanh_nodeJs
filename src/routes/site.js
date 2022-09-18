var express = require("express");
var router = express.Router();

const sitecontrollers = require("../app/controllers/SiteController");
//newscontrollers.index
router.use("/search", sitecontrollers.search);
router.use("/", sitecontrollers.index);

module.exports = router;
