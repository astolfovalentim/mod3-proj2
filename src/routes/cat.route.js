const route = require("express").Router();
const controllerCats = require("../controllers/cat.controller");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const { validId, validObjectBody } = require("../middlewares/cat.middleware");

route.use("/api-docs", swaggerUi.serve);
route.get("/api-docs", swaggerUi.setup(swaggerDocument));

route.get("/all-cats", controllerCats.findAllCatsController);
route.get("/cat/:id", validId, controllerCats.findByIdCatController);
route.post("/create-cat", validObjectBody, controllerCats.createCatsController);
route.put(
  "/update-cat/:id",
  validId,
  validObjectBody,
  controllerCats.updateCatsController
);
route.delete("/delete-cat/:id", validId, controllerCats.deleteCatsController);

module.exports = route;
