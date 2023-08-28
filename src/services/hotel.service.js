const { hotel } = require("../models");

const createhotel = async (reqBody) => {
  return hotel.create(reqBody);
};
const gethotellist = async (filter, options) => {
  return hotel.find($or[{is_active:true}])
};
const gethotelId = async (userId) => {
  return hotel.findById(userId,({$set:updateBody}));
};
const updateDetails = async (userId, updateBody) => {
  return hotel.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletehotel = async (userId) => {
  return hotel.findByIdAndDelete(userId);
};

module.exports = {
  createhotel,
  gethotellist,
  gethotelId,
  deletehotel,
  updateDetails
};
