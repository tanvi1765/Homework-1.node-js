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

/** pharmacy details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    medicine_name: Joi.string().trim(),
    Dosage_Form: Joi.string().trim(),
    Payment_type: Joi.string().trim(),
  }),
};



module.exports = {
  createpharmacy,
  getpharmacyDteails,
  getpharmacylist,
  updateDetails
};
