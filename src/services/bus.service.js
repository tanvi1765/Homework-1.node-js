const { bus } = require("../services");
const  {busvalidation}= require("../validations");

const createbus = async (reqBody) => {
  return bus.create(reqBody);
};
const getbuslist = async (filter, options) => {
  return bus.find( {$or:[{is_active:true}]}
)};
const getbusId = async (userId) => {
  return bus.findById(userId);
};
const updateDetails = async (userId, updateBody) => {
  return bus.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletebus = async (userId) => {
  return bus.findByIdAndDelete(userId);
};

module.exports = {
  createbus,
  getbuslist,
  getbusId,
  deletebus,
  updateDetails
};
