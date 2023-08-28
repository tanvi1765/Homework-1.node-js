const { travel } = require("../models");

const createtravel = async (reqBody) => {
  return travel.create(reqBody);
};
const gettravellist = async (filter, options) => {
  return travel.find({$or:{payment:true}})
};
const gettravelId = async (userId) => {
  return travel.findById(userId);
};
const updateDetails = async (userId, updateBody) => {
  return travel.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletetravel = async (userId) => {
  return travel.findByIdAndDelete(userId);
};

module.exports = {
  createtravel,
  gettravellist,
  gettravelId,
  deletetravel,
  updateDetails
};
