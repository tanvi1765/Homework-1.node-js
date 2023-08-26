const { jewellery } = require("../models");

/**
 * Create jewellery
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createjewellery = async (reqBody) => {
  return jewellery.create(reqBody);
};

/**
 * Get jewellery user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<jewellery>}
 */
const getjewellerylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return jewellery.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  jewellery user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getjewelleryId = async (userId) => {
  return jewellery.findById(userId);
};

/**
 * Delete  jewellery user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletejewellery = async (userId) => {
  return jewellery.findByIdAndDelete(userId);
};

module.exports = {
  createjewellery,
  getjewellerylist,
  getjewelleryId,
  deletejewellery,
};
