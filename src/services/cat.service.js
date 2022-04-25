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
  const createCat = await Cat.create(newCat);
  return createCat;
};

const updateCatsService = async (idParam, editCat) => {
  const updateCat = await Cat.findByIdAndUpdate(idParam, editCat);
  return [updateCat, editCat];
};

const deleteCatsService = async (idParam) => {
  return await Cat.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCatsService,
  findByIdCatService,
  createCatsService,
  updateCatsService,
  deleteCatsService,
};
