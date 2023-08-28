const Joi = require("joi");

/** create school */
const createschool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    mediume_type: Joi.string().required().trim(),
    principal_name: Joi.string().required().trim(),
    area: Joi.string().required().trim(),
  }),
};

/** GEt school list */
const getschoollist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get school details by id */
const getschoolDteails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
};
/** school details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    school_name: Joi.string().trim(),
    mediume_type: Joi.string().trim(),
    principal_name: Joi.string().trim(),
    area: Joi.string().trim(),
  }),
};

module.exports = {
  createschool,
  getschoolDteails,
  getschoollist,
  updateDetails
};
