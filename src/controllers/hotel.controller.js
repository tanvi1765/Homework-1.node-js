const { hotelservice} = require("../services");

/** create hotelservice user*/
const createhotel = async (req, res) => {
  try {
    const reqBody = req.body;
    const hotelExists = await hotelservice(reqBody.email);
    if (hotelExists) {
      throw new Error("User already created by this hotel service!");
    }

    res.status(200).json({
      success: true,
      message: "hotel create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get hotel list */
const gethotellist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get hotel list successfully!",
      data: 'hotel',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get hotel details by id */
const gethotelDetails = async (req, res) => {
  try {
    const gethotelDetails = await hotelservice.gethotelById(req.params.userId);
    if (!getDetails) {
      throw new Error("hotel not found!");
    }

    res.status(200).json({
      success: true,
      message: "User hotel get successfully!",
      data: gethotelDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete hotel user */
const deletehotel = async (req, res) => {
  try {
    const userId = req.params.userId;
    const hotelExists = await hotelservice.getuserById(userId);
    if (!hotelExists) {
      throw new Error(" hotel User not found!");
    }

    await hotelservice.deletehotel(userId);

    res.status(200).json({
      success: true,
      message: " hotel User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createhotel,
   gethotellist,
   gethotelDetails,
   deletehotel,
};