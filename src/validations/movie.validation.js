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

module.exports = {
  createmovie,
  getmovieDteails,
  getmovielist,
};
