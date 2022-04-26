const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@api-rickmorty.jwurt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDb CONECTADO");
    })
    .catch((err) => {
      return console.log(`Erro ao conectar com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
