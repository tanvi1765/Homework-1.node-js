const express = require("express");
const { schoolValidation } = require("../../validations");
const { schoolController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create school */
router.post(
  "/create-school",
  validate(schoolValidation.createschool),
  schoolController.createschool
);

/** Get school list */
router.get(
  "/list",
  validate(schoolValidation.getschoolList),
  schoolController.getschoolList
);

/** Get school details by id */
router.get(
  "/get-details/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.getschoolDetails
);
/** Delete school */
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.deleteschool
);

module.exports = router;
