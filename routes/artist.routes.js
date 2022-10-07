const router = require("express").Router();
const validateToken = require("../middleware/validateToken.middleware");


const {
    getAll,
    getOne,
    create,
    updateOne,
    deleteOne,
} = require("../controller/artist.controller");


router.get("/", getAll);
router.get("/:id", validateToken, getOne);


router.post("/create", create);


router.put("/:id", updateOne);

router.delete("/:id/delete", deleteOne);

module.exports = router;