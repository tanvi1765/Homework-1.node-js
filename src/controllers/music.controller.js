const { musicservice} = require("../services");

/** create musicservice user*/
const createmusic = async (req, res) => {
  try {
    const reqBody = req.body;
    const musicExists = await musicservice(reqBody.email);
    if (musicExists) {
      throw new Error("User already created by this music service!");
    }

    res.status(200).json({
      success: true,
      message: "music create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get music list */
const getmusiclist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get music list successfully!",
      data: 'music',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get music details by id */
const getmusicDetails = async (req, res) => {
  try {
    const getmusicDetails = await musicservice.getmusicById(req.params.userId);
    if (!getDetails) {
      throw new Error("music not found!");
    }

    res.status(200).json({
      success: true,
      message: "User music get successfully!",
      data: getmusicDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** music details update by id */
const updateDetails = async (req, res) => {
  try {
    const musicId = req.params.userId;
    const musicExists = await musicservice.getmusicById(musicId);
    if (!musicExists) {
      throw new Error("music not found!");
    }

    await musicservice.updateDetails(musicId, req.body);

    res
      .status(200)
      .json({ success: true, message: "music details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete music user */
const deletemusic = async (req, res) => {
  try {
    const userId = req.params.userId;
    const musicExists = await musicservice.getuserById(userId);
    if (!musicExists) {
      throw new Error(" music User not found!");
    }

    await musicservice.deletemusic(userId);

    res.status(200).json({
      success: true,
      message: " music User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createmusic,
   getmusiclist,
   getmusicDetails,
   deletemusic,
   updateDetails
};