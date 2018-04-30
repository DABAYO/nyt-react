const router = require("express").Router();
const fetchRoutes = require("./fetch");
const headlineRoutes = require("./headlines");

router.use("/fetch", fetchRoutes);
router.use("/headlines", headlineRoutes);

module.exports = router;
