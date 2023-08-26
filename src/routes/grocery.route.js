const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  validate(groceryValidation.creategrocery),
  groceryController.creategrocery
);

/** Get grocery list */
router.get(
  "/list",
  validate(groceryValidation.getgroceryList),
  groceryController.getgroceryList
);

/** Get grocery details by id */
router.get(
  "/get-details/:groceryId",
  validate(groceryValidation.getDetails),
  groceryController.getgroceryDetails
);
/** Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  validate(groceryValidation.getDetails),
  groceryController.deletegrocery
);

module.exports = router;
