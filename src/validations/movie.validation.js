const Joi = require("joi");

/** create movie */
const createmovie = {
  body: Joi.object().keys({
    movie_name: Joi.string().required().trim(),
    movie_language: Joi.string().required().trim(),
    movie_rumtime: Joi.number().integer().required(),
    Payment_type:  Joi.number().integer().required(),
  }),
};

/** GEt movie list */
const getmovielist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get movie details by id */
const getmovieDteails = {
  params: Joi.object().keys({
    movieId: Joi.string().required().trim(),
  }),
};

/** movie details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    movie_name: Joi.string().trim(),
    movie_language: Joi.string().trim(),
    movie_rumtime: Joi.string().trim(),
    Payment_type: Joi.string().trim(),
  }),
};


module.exports = {
  createmovie,
  getmovieDteails,
  getmovielist,
  updateDetails
};
