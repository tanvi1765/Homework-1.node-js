const { stationery } = require("../models");

const createstationery = async (reqBody) => {
  return stationery.create(reqBody);
};
const getstationerylist = async (filter, options) => {
  return stationery.find({$or:{is_active:false}})
};
const updateDetails = async (userId, updateBody) => {
  return stationery.findByIdAndUpdate(userId, { $set: updateBody });
};
const getstationeryId = async (userId) => {
  return stationery.findById(userId);
};
const deletestationery = async (userId) => {
  return stationery.findByIdAndDelete(userId);
};

module.exports = {
  createstationery,
  getstationerylist,
  getstationeryId,
  deletestationery,
  updateDetails
};
