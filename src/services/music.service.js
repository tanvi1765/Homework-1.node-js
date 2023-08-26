const { music } = require("../models");

/**
 * Create music
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createmusic = async (reqBody) => {
  return music.create(reqBody);
};

/**
 * Get music user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<music>}
 */
const getmusiclist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return music.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  music user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getmusicId = async (userId) => {
  return music.findById(userId);
};

/**
 * Delete  music user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletemusic = async (userId) => {
  return music.findByIdAndDelete(userId);
};

module.exports = {
  createmusic,
  getmusiclist,
  getmusicId,
  deletemusic,
};
