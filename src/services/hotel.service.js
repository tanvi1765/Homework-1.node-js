const { hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createhotel = async (reqBody) => {
  return hotel.create(reqBody);
};

/**
 * Get hotel user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<hotel>}
 */
const gethotellist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return hotel.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  hotel user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const gethotelId = async (userId) => {
  return hotel.findById(userId);
};

/**
 * Delete  hotel user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletehotel = async (userId) => {
  return hotel.findByIdAndDelete(userId);
};

module.exports = {
  createhotel,
  gethotellist,
  gethotelId,
  deletehotel,
};
