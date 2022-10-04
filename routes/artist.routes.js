const router = require("express").Router();
const validateToken = require("../middleware/validateToken.middleware");


const {
    getAll,
    getOne,
    create,
    updateOne,
    deleteOne,
} = require("../controller/artista.controller");


router.get("/", getAll);
router.get("/:id", validateToken, getOne);


router.post("/", create);


router.put("/:id", updateOne);

router.delete("/:id", deleteOne);

module.exports = router;