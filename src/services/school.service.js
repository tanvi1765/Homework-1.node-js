const { school } = require("../models");

const createschool = async (reqBody) => {
  return school.create(reqBody);
};
const getschoollist = async (filter, options) => {
  return school.find({$or:{mediume_type:gujarati}})
};
const getschoolId = async (userId) => {
  return school.findById(userId,({$set:updateBody}));
};
const updateDetails = async (userId, updateBody) => {
  return school.findByIdAndUpdate(userId, { $set: updateBody });
};
const deleteschool = async (userId) => {
  return school.findByIdAndDelete(userId);
};

module.exports = {
  createschool,
  getschoollist,
  getschoolId,
  deleteschool,
  updateDetails
};
