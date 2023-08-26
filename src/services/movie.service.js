const { movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createmovie = async (reqBody) => {
  return movie.create(reqBody);
};

/**
 * Get movie user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<movie>}
 */
const getmovielist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return movie.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  movie user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getmovieId = async (userId) => {
  return movie.findById(userId);
};

/**
 * Delete  movie user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletemovie = async (userId) => {
  return movie.findByIdAndDelete(userId);
};

module.exports = {
  createmovie,
  getmovielist,
  getmovieId,
  deletemovie,
};
