const Joi = require("joi");

/** create stationery */
const createstationery = {
  body: Joi.object().keys({
    stationery_name: Joi.string().required().trim(),
    item:Joi.number().integer().required(),
    bill_no: Joi.number().integer().required(),
  }),
};

/** GEt stationery list */
const getstationerylist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get stationery details by id */
const getstationeryDteails = {
  params: Joi.object().keys({
    stationeryId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createstationery,
  getstationeryDteails,
  getstationerylist,
};
