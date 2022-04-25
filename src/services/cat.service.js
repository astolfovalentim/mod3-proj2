const Cat = require("../models/Thundercats");

const findAllCatsService = async () => {
  const thundercats = await Cat.find();
  return thundercats;
};

const findByIdCatService = async (idParam) => {
  const cat = await Cat.findById(idParam);
  return cat;
};

const createCatsService = async (newCat) => {
  const catCreate = await Cat.create(newCat);
  return catCreate;
};

const updateCatsService = async (id, catEdit) => {
  const catUpdate = await Cat.findByIdAndUpdate(id, catEdit);
  return catUpdate;
};

const deleteCatsService = async (id) => {
  return await Cat.findByIdAndDelete(id);
};

module.exports = {
  findAllCatsService,
  findByIdCatService,
  createCatsService,
  updateCatsService,
  deleteCatsService,
};
