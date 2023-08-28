const { busservice} = require("../services");

/** create busservice user*/
const createbus = async (req, res) => {
  try {
    const reqBody = req.body;
    const busExists = await busservice(reqBody.email);
    if (busExists) {
      throw new Error("User already created by this bus service!");
    }

    res.status(200).json({
      success: true,
      message: "bus create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get bus list */
const getbuslist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get bus list successfully!",
      data: 'bus',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get bus details by id */
const getbusDetails = async (req, res) => {
  try {
    const getbusDetails = await busservice.getbusById(req.params.userId);
    if (!getDetails) {
      throw new Error("bus not found!");
    }

    res.status(200).json({
      success: true,
      message: "User bus get successfully!",
      data: getbusDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** bus details update by id */
const updateDetails = async (req, res) => {
  try {
    const busId = req.params.userId;
    const busExists = await busservice.getbusById(busId);
    if (!busExists) {
      throw new Error("bus not found!");
    }

    await busservice.updateDetails(busId, req.body);

    res
      .status(200)
      .json({ success: true, message: "bus details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete bus user */
const deletebus = async (req, res) => {
  try {
    const userId = req.params.userId;
    const busExists = await busservice.getuserById(userId);
    if (!busExists) {
      throw new Error(" bus User not found!");
    }

    await busservice.deletebus(userId);

    res.status(200).json({
      success: true,
      message: " bus User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createbus,
   getbuslist,
   getbusDetails,
   deletebus,
   updateDetails
};