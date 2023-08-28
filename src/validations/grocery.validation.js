const Joi = require("joi");

/** create grocery */
const createGrocery = {
  body: Joi.object().keys({
    grocery_name: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    grocery_quantity: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    Purchase_grocery: Joi.string().required().trim(),
  }),
};

/** GEt grocery list */
const getGroceryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get grocery details by id */
const getDetails = {
  params: Joi.object().keys({
    groceryId: Joi.string().required().trim(),
  }),
};
/** grocery details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    grocery_name: Joi.string().trim(),
    category: Joi.string().trim(),
    grocery_quantity: Joi.string().trim(),
    Purchase_grocery: Joi.string().trim(),
  }),
};


module.exports = {
  createGrocery,
  getDetails,
  getGroceryList,
  updateDetails
};
