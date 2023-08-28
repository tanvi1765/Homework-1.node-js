const { music } = require("../models");

const createmusic = async (reqBody) => {
  return music.create(reqBody);
};
const getmusiclist = async (filter, options) => {
  return music.find({$or:{is_active:true}})
};
const getmusicId = async (userId) => {
  return music.findById(userId,({$set:updateBody}));
};
const updateDetails = async (userId, updateBody) => {
  return music.findByIdAndUpdate(userId, { $set: updateBody });
};
const deletemusic = async (userId) => {
  return music.findByIdAndDelete(userId);
};

module.exports = {
  createmusic,
  getmusiclist,
  getmusicId,
  deletemusic,
  updateDetails
};
