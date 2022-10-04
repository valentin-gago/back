const router = require("express").Router();
const {
  TestController,
  getAll,
  create,
  updateOne,
  deleteOne,
} = require("../controller/artista.controller");

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

// router.get("/test", TestController);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

// crear las rutas de artistas
router.get("/artists", getAll);
router.get("/:id", TestController);

// GET

//POST
router.post("/create", create);

//PUT
router.put("/:id", updateOne);

//DELETE
router.delete("/:id/delete", deleteOne);

module.exports = router;
