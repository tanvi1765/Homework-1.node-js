const Joi = require("joi");

/** create travel */
const createtravel = {
  body: Joi.object().keys({
    travel_company: Joi.string().required().trim(),
    company_name: Joi.string().required().trim(),
    traveler_details: Joi.string().required().trim(),
    holiday_place: Joi.string().required().trim(),
    holiday_days: Joi.number().integer().required(),
    holiday_des: Joi.string().required().trim(),
    payment: Joi.number().integer().required()
  }),
};

/** GEt travel list */
const gettravellist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get travel details by id */
const gettravelDteails = {
  params: Joi.object().keys({
    travelId: Joi.string().required().trim(),
  }),
};
/** travel details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    travel_company: Joi.string().trim(),
    company_name: Joi.string().trim(),
    traveler_details: Joi.string().trim(),
    holiday_place: Joi.string().trim(),
  }),
};

module.exports = {
  createtravel,
  gettravelDteails,
  gettravellist,
  updateDetails
};
