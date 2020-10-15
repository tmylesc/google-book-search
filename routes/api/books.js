const router = require("express").Router();

const bookController = require("../../controllers/bookControllers");

router.route("/")
    .get(bookController.findAll)
    .get(bookController.create);

router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;