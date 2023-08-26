const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createpharmacy),
  pharmacyController.createpharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  validate(pharmacyValidation.getpharmacyList),
  pharmacyController.getpharmacyList
);

/** Get pharmacy details by id */
router.get(
  "/get-details/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.getpharmacyDetails
);
/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.deletepharmacy
);

module.exports = router;
