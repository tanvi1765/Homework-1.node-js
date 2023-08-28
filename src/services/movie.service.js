const { movie } = require("../models");

const createmovie = async (reqBody) => {
  return movie.create(reqBody);
};
const getmovielist = async (filter, options) => {
  return movie.find({$or:{language:hindi }})
};
const getmovieId = async (userId) => {
  return movie.findById(userId,({$set:updateBody}));
};
const updateDetails = async (userId, updateBody) => {
  return movie.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletemovie = async (userId) => {
  return movie.findByIdAndDelete(userId);
};

module.exports = {
  createmovie,
  getmovielist,
  getmovieId,
  deletemovie,
  updateDetails
};
