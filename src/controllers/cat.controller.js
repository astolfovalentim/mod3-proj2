const catsService = require("../services/cat.service");

const findAllCatsController = (req, res) => {
  const cats = catsService.findAllCatsService();
  res.send(cats);
};

const findByIdCatController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCat = catsService.findByIdCatService(idParam);
  res.send(chosenCat);
};

const createCatsController = (req, res) => {
  const cat = req.body;
  const newCat = catsService.createCatsService(cat);
  res.send(newCat);
};

const updateCatsController = (req, res) => {
  const idParam = Number(req.params.id);
  const catEdit = req.body;
  const updatedCat = catsService.updateCatsService(idParam, catEdit);
  res.send(updatedCat);
};

const deleteCatsController = (req, res) => {
  const idParam = req.params.id;
  catsService.deleteCatsService(idParam);
  res.send({ message: "Thundercat deletado com sucesso!" });
};

module.exports = {
  findAllCatsController,
  findByIdCatController,
  createCatsController,
  updateCatsController,
  deleteCatsController,
};
