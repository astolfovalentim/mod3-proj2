const catsService = require("../services/cat.service");
const mongoose = require("mongoose");

const findAllCatsController = async (req, res) => {
  const allCats = await catsService.findAllCatsService();

  if (allCats.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  res.send(allCats);
};

const findByIdCatController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCat = await catsService.findByIdCatService(idParam);

  if (!chosenCat) {
    return res.status(404).send({ message: "Personagem não encontrada!" });
  }

  res.send(chosenCat);
};

const createCatsController = async (req, res) => {
  const cat = req.body;
  const newCat = await catsService.createCatsService(cat);
  res.status(201).send(newCat);
};

const updateCatsController = async (req, res) => {
  const idParam = req.params.id;
  const editCat = req.body;
  const updatedCat = await catsService.updateCatsService(idParam, editCat);
  res.send(updatedCat);
};

const deleteCatsController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCat = catsService.findByIdCatService(idParam);

  if (!chosenCat) {
    return res.status(404).send({ message: "Personagem não encontrada!" });
  }

  await catsService.deleteCatsService(idParam);
  res.send({ message: "Thundercat deletado com sucesso!" });
};

module.exports = {
  findAllCatsController,
  findByIdCatController,
  createCatsController,
  updateCatsController,
  deleteCatsController,
};
