const express = require("express");
const { busValidation } = require("../validations/bus.validation");
const { busController } = require("../controllers/bus.controller");

const router = express.Router();

/** create bus */
router.post(
  "/create-bus",
  // validate(busValidation.createbus),
  busController.createbus
);

/** Get bus list */
router.get(
  "/list",
  // validate(busValidation.getbusList),
  busController.ge
);

/** Get bus details by id */
router.get(
  "/get-details/:busId",
  // validate(busValidation.getDetails),
  busController.getbusDetails
);
/** Delete bus */
router.delete(
  "/delete-bus/:busId",
  // validate(busValidation.getDetails),
  busController.deletebus
);

module.exports = router;
