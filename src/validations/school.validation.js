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

module.exports = {
  createschool,
  getschoolDteails,
  getschoollist,
};
