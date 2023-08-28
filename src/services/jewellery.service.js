const { jewellery } = require("../models");

const createjewellery = async (reqBody) => {
  return jewellery.create(reqBody);
};
const getjewellerylist = async (filter, options) => {
  return jewellery.find({$or:{is_active:true}})
};
const getjewelleryId = async (userId) => {
  return jewellery.findById(userId);
};
const updateDetails = async (userId, updateBody) => {
  return jewellery.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletejewellery = async (userId) => {
  return jewellery.findByIdAndDelete(userId);
};

module.exports = {
  createjewellery,
  getjewellerylist,
  getjewelleryId,
  deletejewellery,
  updateDetails
};
