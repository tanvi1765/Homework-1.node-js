const Joi = require("joi");

/** create hotel */
const createHotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_type: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    room_type: Joi.string().required().trim(),
    Payment_type: Joi.string().required().trim(),
    Payment: Joi.number().integer().required(),
  }),
};

/** GEt hotel list */
const getHotelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get hotel details by id */
const getDetails = {
  params: Joi.object().keys({
    hotelId: Joi.string().required().trim(),
  }),
};
/** hotel details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    hotel_name: Joi.string().trim(),
    hotel_type: Joi.string().trim(),
    city: Joi.string().trim(),
    room_type: Joi.string().trim(),
  }),
};

module.exports = {
  createHotel,
  getDetails,
  getHotelList,
  updateDetails
};
