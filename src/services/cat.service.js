const Cat = require("../models/Thundercats");

const findAllCatsService = async () => {
  const thundercats = await Cat.find();
  return thundercats;
};

const findByIdCatService = async (idParam) => {
  const cat = await Cat.findById(idParam);
  return cat;
};

const createCatsService = (newCat) => {
  const newId = thundercats.length + 1;
  newCat.id = newId;
  thundercats.push(newCat);
  return newCat;
};

const updateCatsService = (id, catEdit) => {
  catEdit["id"] = id;
  const catIndex = thundercats.findIndex((cat) => cat.id == id);
  thundercats[catIndex] = catEdit;
  return catEdit;
};

const deleteCatsService = (id) => {
  const catIndex = thundercats.findIndex((cat) => cat.id == id);
  return thundercats.splice(catIndex, 1);
};

module.exports = {
  findAllCatsService,
  findByIdCatService,
  createCatsService,
  updateCatsService,
  deleteCatsService,
};
