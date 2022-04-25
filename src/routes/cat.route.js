const route = require("express").Router();
const controllerCats = require("../controllers/cat.controller");

route.get("/all-cats", controllerCats.findAllCatsController);
route.get("/cat/:id", controllerCats.findByIdCatController);
route.post("/create-cat", controllerCats.createCatsController);
route.put("/update-cat/:id", controllerCats.updateCatsController);
route.delete("/delete-cat/:id", controllerCats.deleteCatsController);

module.exports = route;
