const mongoose = require("mongoose");

const thundercatsSchema = new mongoose.Schema({
  personagem: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  habilidade: {
    type: String,
    require: true,
  },
  arma: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
});

const cat = mongoose.model("thundercats", thundercatsSchema);

module.exports = cat;
