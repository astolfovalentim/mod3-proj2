const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/thundercats-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb CONECTADO");
    })
    .catch((err) => {
      return console.log(`Erro ao conectar com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
