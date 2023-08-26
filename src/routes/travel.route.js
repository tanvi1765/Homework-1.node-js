const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create travel*/
router.post(
  "/create-travel",
  // validate(travelvalidation.traveltravel),
  travelController.createtravel
);

/** Get travellist */
router.get(
  "/list",
  // validate(travelValidation.gettravelList),
  travelController.gettravelList
);

/** Get traveldetails by id */
router.get(
  "/get-details/:travelId",
  // validate(travelValidation.getDetails),
  travelController.gettravelDetails
);
/** Delete travel*/
router.delete(
  "/delete-travel/:travelId",
  // validate(travelValidation.getDetails),
  travelController.deletetravel
);

module.exports = router;
