const { stationery } = require("../models");

/**
 * Create stationery
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createstationery = async (reqBody) => {
  return stationery.create(reqBody);
};

/**
 * Get stationery user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<stationery>}
 */
const getstationerylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return stationery.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  stationery user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getstationeryId = async (userId) => {
  return stationery.findById(userId);
};

/**
 * Delete  stationery user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletestationery = async (userId) => {
  return stationery.findByIdAndDelete(userId);
};

module.exports = {
  createstationery,
  getstationerylist,
  getstationeryId,
  deletestationery,
};
