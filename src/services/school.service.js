const { school } = require("../models");

/**
 * Create school
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createschool = async (reqBody) => {
  return school.create(reqBody);
};

/**
 * Get school user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<school>}
 */
const getschoollist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return school.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  school user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getschoolId = async (userId) => {
  return school.findById(userId);
};

/**
 * Delete  school user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteschool = async (userId) => {
  return school.findByIdAndDelete(userId);
};

module.exports = {
  createschool,
  getschoollist,
  getschoolId,
  deleteschool,
};
