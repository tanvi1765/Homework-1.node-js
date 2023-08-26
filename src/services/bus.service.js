const { bus } = require("../services");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createbus = async (reqBody) => {
  return bus.create(reqBody);
};

/**
 * Get bus user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<bus>}
 */
const getbuslist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return bus.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  bus user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getbusId = async (userId) => {
  return bus.findById(userId);
};

/**
 * Delete  bus user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletebus = async (userId) => {
  return bus.findByIdAndDelete(userId);
};

module.exports = {
  createbus,
  getbuslist,
  getbusId,
  deletebus,
};
