const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
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
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
