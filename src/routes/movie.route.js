const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  validate(movieValidation.createmovie),
  movieController.createmovie
);

/** Get movie list */
router.get(
  "/list",
  validate(movieValidation.getmovieList),
  movieController.getmovieList
);

/** Get movie details by id */
router.get(
  "/get-details/:movieId",
  validate(movieValidation.getDetails),
  movieController.getmovieDetails
);
/** Delete movie */
router.delete(
  "/delete-movie/:movieId",
  validate(movieValidation.getDetails),
  movieController.deletemovie
);

module.exports = router;
