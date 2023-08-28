const { pharmacy } = require("../models");

const createpharmacy = async (reqBody) => {
  return pharmacy.create(reqBody);
};
const getpharmacylist = async (filter, options) => {
  return pharmacy.find({$or:{is_active:true}})
};
const getpharmacyId = async (userId) => {
  return pharmacy.findById(userId);
};
const updateDetails = async (userId, updateBody) => {
  return pharmacy.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletepharmacy = async (userId) => {
  return pharmacy.findByIdAndDelete(userId);
};

module.exports = {
  createpharmacy,
  getpharmacylist,
  getpharmacyId,
  deletepharmacy,
  updateDetails
};
