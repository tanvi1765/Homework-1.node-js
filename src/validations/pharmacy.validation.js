const Joi = require("joi");

/** create pharmacy */
const createpharmacy = {
  body: Joi.object().keys({
    medicine_name: Joi.string().required().trim(),
    Dosage_Form: Joi.string().required().trim(),
    Payment_type: Joi.string().required().trim(),
  }),
};

/** GEt pharmacy list */
const getpharmacylist = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get pharmacy details by id */
const getpharmacyDteails = {
  params: Joi.object().keys({
    pharmacyId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createpharmacy,
  getpharmacyDteails,
  getpharmacylist,
};
