const Joi = require("joi");

/** create bus */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_type: Joi.string().required().trim(),
    Payment_type: Joi.string().required().trim(),
  }),
};

/** GEt bus list */
const getBusList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get bus details by id */
const getDetails = {
  params: Joi.object().keys({
    busId: Joi.string().required().trim(),
  }),
};
/** bus details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    bus_name: Joi.string().trim(),
    bus_type: Joi.string().trim(),
    Payment_type: Joi.string().trim(),
  }),
};

module.exports = {
  createBus,
  getDetails,
  getBusList,
  updateDetails
};
