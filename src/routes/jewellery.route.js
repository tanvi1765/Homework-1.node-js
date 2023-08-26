const express = require("express");
const { jewelleryValidation } = require("../../validations");
const { jewelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createjewellery),
  jewelleryController.createjewellery
);

/** Get jewellery list */
router.get(
  "/list",
  validate(jewelleryValidation.getjewelleryList),
  jewelleryController.getjewelleryList
);

/** Get jewellery details by id */
router.get(
  "/get-details/:jewelleryId",
  validate(jewelleryValidation.getDetails),
  jewelleryController.getjewelleryDetails
);
/** Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  validate(jewelleryValidation.getDetails),
  jewelleryController.deletejewellery
);

module.exports = router;
