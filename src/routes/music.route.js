const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  validate(musicValidation.createmusic),
  musicController.createmusic
);

/** Get music list */
router.get(
  "/list",
  validate(musicValidation.getmusicList),
  musicController.getmusicList
);

/** Get music details by id */
router.get(
  "/get-details/:musicId",
  validate(musicValidation.getDetails),
  musicController.getmusicDetails
);
/** Delete music */
router.delete(
  "/delete-music/:musicId",
  validate(musicValidation.getDetails),
  musicController.deletemusic
);

module.exports = router;
