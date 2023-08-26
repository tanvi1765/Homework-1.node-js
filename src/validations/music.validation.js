const Joi = require("joi");

/** create music */
const createmusic = {
  body: Joi.object().keys({
    music_title: Joi.string().required().trim(),
    music_Artist: Joi.string().required().trim(),
    music_language: Joi.string().required().trim(),
    music_duration: Joi.number().integer().required(),
    Release_Format: Joi.string().required().trim(),
  }),
};

/** GEt music list */
const getmusiclist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get music details by id */
const getmusicDteails = {
  params: Joi.object().keys({
    musicId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createmusic,
  getmusicDteails,
  getmusiclist,
};
