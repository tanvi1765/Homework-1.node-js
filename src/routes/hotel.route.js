const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  validate(hotelValidation.createhotel),
  hotelController.createhotel
);

/** Get hotel list */
router.get(
  "/list",
  validate(hotelValidation.gethotelList),
  hotelController.gethotelList
);

/** Get hotel details by id */
router.get(
  "/get-details/:hotelId",
  validate(hotelValidation.getDetails),
  hotelController.gethotelDetails
);
/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  validate(hotelValidation.getDetails),
  hotelController.deletehotel
);

module.exports = router;
