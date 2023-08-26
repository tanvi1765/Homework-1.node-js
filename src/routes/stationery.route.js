const express = require("express");
const { stationeryValidation } = require("../../validations");
const { stationeryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create stationery */
router.post(
  "/create-stationery",
  validate(stationeryValidation.createstationery),
  stationeryController.createstationery
);

/** Get stationery list */
router.get(
  "/list",
  validate(stationeryValidation.getstationeryList),
  stationeryController.getstationeryList
);

/** Get stationery details by id */
router.get(
  "/get-details/:stationeryId",
  validate(stationeryValidation.getDetails),
  stationeryController.getstationeryDetails
);
/** Delete stationery */
router.delete(
  "/delete-stationery/:stationeryId",
  validate(stationeryValidation.getDetails),
  stationeryController.deletestationery
);

module.exports = router;
