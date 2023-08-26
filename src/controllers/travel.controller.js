const { travelservice} = require("../services");

/** create travelservice user*/
const createtravel = async (req, res) => {
  try {
    const reqBody = req.body;
    const travelExists = await travelservice(reqBody.email);
    if (travelExists) {
      throw new Error("User already created by this travel service!");
    }

    res.status(200).json({
      success: true,
      message: "travel create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get travel list */
const gettravellist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get travel list successfully!",
      data: 'travel',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get travel details by id */
const gettravelDetails = async (req, res) => {
  try {
    const gettravelDetails = await travelservice.gettravelById(req.params.userId);
    if (!getDetails) {
      throw new Error("travel not found!");
    }

    res.status(200).json({
      success: true,
      message: "User travel get successfully!",
      data: gettravelDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete travel user */
const deletetravel = async (req, res) => {
  try {
    const userId = req.params.userId;
    const travelExists = await travelservice.getuserById(userId);
    if (!travelExists) {
      throw new Error(" travel User not found!");
    }

    await travelservice.deletetravel(userId);

    res.status(200).json({
      success: true,
      message: " travel User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createtravel,
   gettravellist,
   gettravelDetails,
   deletetravel,
};