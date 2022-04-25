const catsService = require("../services/cat.service");
const mongoose = require("mongoose");

const findAllCatsController = async (req, res) => {
  const cats = await catsService.findAllCatsService();

  if (cats.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  res.send(cats);
};

const findByIdCatController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }
  const chosenCat = await catsService.findByIdCatService(idParam);

  if (!chosenCat) {
    return res.status(404).send({ message: "Personagem não encontrada!" });
  }

  res.send(chosenCat);
};

const createCatsController = async (req, res) => {
  const cat = req.body;
  if (
    !cat ||
    !cat.personagem ||
    !cat.descricao ||
    !cat.habilidade ||
    !cat.arma ||
    !cat.foto
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos do personagem!" });
  }

  const newCat = await catsService.createCatsService(cat);
  res.status(201).send(newCat);
};

const updateCatsController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const catEdit = req.body;

  if (
    !catEdit ||
    !catEdit.personagem ||
    !catEdit.descricao ||
    !catEdit.habilidade ||
    !catEdit.arma ||
    !catEdit.foto
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos da personagem!" });
  }

  const updatedCat = await catsService.updateCatsService(idParam, catEdit);
  res.send(updatedCat);
};

const deleteCatsController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

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
