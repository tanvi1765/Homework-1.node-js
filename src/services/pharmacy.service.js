const { pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createpharmacy = async (reqBody) => {
  return pharmacy.create(reqBody);
};

/**
 * Get pharmacy user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<pharmacy>}
 */
const getpharmacylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return pharmacy.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  pharmacy user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getpharmacyId = async (userId) => {
  return pharmacy.findById(userId);
};

/**
 * Delete  pharmacy user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletepharmacy = async (userId) => {
  return pharmacy.findByIdAndDelete(userId);
};

module.exports = {
  createpharmacy,
  getpharmacylist,
  getpharmacyId,
  deletepharmacy,
};
