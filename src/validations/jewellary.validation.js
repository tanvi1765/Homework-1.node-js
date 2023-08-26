const Joi = require("joi");

/** create jewellary */
const createJewellary = {
  body: Joi.object().keys({
    jewellery_name: Joi.string().required().trim(),
    jewellery_type: Joi.string().required().trim(),
    jewellery_material: Joi.string().required().trim(),
    metal_type: Joi.string().required().trim(),
    jewellery_Weight: Joi.number().integer().required()
  }),
};

/** GEt jewellary list */
const getJewellaryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get jewellary details by id */
const getDetails = {
  params: Joi.object().keys({
    jewellaryId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createJewellary,
  getDetails,
  getJewellaryList,
};
