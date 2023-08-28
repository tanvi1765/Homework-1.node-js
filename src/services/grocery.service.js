const { grocery } = require("../models");

const creategrocery = async (reqBody) => {
  return grocery.create(reqBody);
};
const getgrocerylist = async (filter, options) => {
  return grocery.find({$or:[{ $or:{price:2000}}]});
};
const getgroceryId = async (userId) => {
  return grocery.findById(userId);
};
const updateDetails = async (userId, updateBody) => {
  return grocery.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletegrocery = async (userId) => {
  return grocery.findByIdAndDelete(userId);
};

module.exports = {
  creategrocery,
  getgrocerylist,
  getgroceryId,
  deletegrocery,
  updateDetails
};
