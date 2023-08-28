const { stationeryservice} = require("../services");

/** create stationeryservice user*/
const createstationery = async (req, res) => {
  try {
    const reqBody = req.body;
    const stationeryExists = await stationeryservice(reqBody.email);
    if (stationeryExists) {
      throw new Error("User already created by this stationery service!");
    }

    res.status(200).json({
      success: true,
      message: "stationery create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get stationery list */
const getstationerylist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get stationery list successfully!",
      data: 'stationery',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get stationery details by id */
const getstationeryDetails = async (req, res) => {
  try {
    const getstationeryDetails = await stationeryservice.getstationeryById(req.params.userId);
    if (!getDetails) {
      throw new Error("stationery not found!");
    }

    res.status(200).json({
      success: true,
      message: "User stationery get successfully!",
      data: getstationeryDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** stationery details update by id */
const updateDetails = async (req, res) => {
  try {
    const stationeryId = req.params.userId;
    const stationeryExists = await stationeryservice.getstationeryById(stationeryId);
    if (!stationeryExists) {
      throw new Error("stationery not found!");
    }

    await stationeryservice.updateDetails(stationeryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "stationery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete stationery user */
const deletestationery = async (req, res) => {
  try {
    const userId = req.params.userId;
    const stationeryExists = await stationeryservice.getuserById(userId);
    if (!stationeryExists) {
      throw new Error(" stationery User not found!");
    }

    await stationeryservice.deletestationery(userId);

    res.status(200).json({
      success: true,
      message: " stationery User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createstationery,
   getstationerylist,
   getstationeryDetails,
   deletestationery,
   updateDetails
};