const { travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createtravel = async (reqBody) => {
  return travel.create(reqBody);
};

/**
 * Get travel user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<travel>}
 */
const gettravellist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return travel.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  travel user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const gettravelId = async (userId) => {
  return travel.findById(userId);
};

/**
 * Delete  travel user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletetravel = async (userId) => {
  return travel.findByIdAndDelete(userId);
};

module.exports = {
  createtravel,
  gettravellist,
  gettravelId,
  deletetravel,
};
