const route = require("express").Router();
const controllerCats = require("../controllers/cat.controller");

route.get("/find-cats", controllerCats.findAllCatsController);
route.get("/cat/:id", controllerCats.findByIdCatController);
route.post("/create", controllerCats.createCatsController);
route.put("/update/:id", controllerCats.updateCatsController);
route.delete("/delete/:id", controllerCats.deleteCatsController);

module.exports = route;
