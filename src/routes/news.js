var express = require("express");
var router = express.Router();

const newscontrollers = require("../app/controllers/NewsController");
//newscontrollers.index
router.use("/:slug", newscontrollers.show);
router.use("/", newscontrollers.index);

module.exports = router;
