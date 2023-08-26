const { grocery } = require("../models");

/**
 * Create grocery
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const creategrocery = async (reqBody) => {
  return grocery.create(reqBody);
};

/**
 * Get grocery user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<grocery>}
 */
const getgrocerylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return grocery.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  grocery user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getgroceryId = async (userId) => {
  return grocery.findById(userId);
};

/**
 * Delete  grocery user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletegrocery = async (userId) => {
  return grocery.findByIdAndDelete(userId);
};

module.exports = {
  creategrocery,
  getgrocerylist,
  getgroceryId,
  deletegrocery,
};
