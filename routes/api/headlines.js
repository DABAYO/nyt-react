const router = require("express").Router();
const headlineController = require("../../controllers/headline");

router.route("/")
    .get("/", headlineController.findAll)
    .delete("/:id", headlineController.delete)
    .post("/:id", headlineController.create);

router
    .route("/:id")
    .get(headlineController,findById)
    .delete(headlineController.remove);

module.exports = router;
