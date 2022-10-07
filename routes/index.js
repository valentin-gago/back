const validateToken = require("../middleware/validateToken.middleware");

module.exports = (app) => {
  app.use("/api/artist", require("./artist.routes"));
  // ruta auth
  app.use("/api/auth", require("./auth.routes"));
  app.use("/api/user", validateToken, require("./user.routes"));
};
