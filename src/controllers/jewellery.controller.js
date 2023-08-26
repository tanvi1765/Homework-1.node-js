const { jewelleryservice} = require("../services");

/** create jewelleryservice user*/
const createjewellery = async (req, res) => {
  try {
    const reqBody = req.body;
    const jewelleryExists = await jewelleryservice(reqBody.email);
    if (jewelleryExists) {
      throw new Error("User already created by this jewellery service!");
    }

    res.status(200).json({
      success: true,
      message: "jewellery create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get jewellery list */
const getjewellerylist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get jewellery list successfully!",
      data: 'jewellery',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get jewellery details by id */
const getjewelleryDetails = async (req, res) => {
  try {
    const getjewelleryDetails = await jewelleryservice.getjewelleryById(req.params.userId);
    if (!getDetails) {
      throw new Error("jewellery not found!");
    }

    res.status(200).json({
      success: true,
      message: "User jewellery get successfully!",
      data: getjewelleryDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete jewellery user */
const deletejewellery = async (req, res) => {
  try {
    const userId = req.params.userId;
    const jewelleryExists = await jewelleryservice.getuserById(userId);
    if (!jewelleryExists) {
      throw new Error(" jewellery User not found!");
    }

    await jewelleryservice.deletejewellery(userId);

    res.status(200).json({
      success: true,
      message: " jewellery User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createjewellery,
   getjewellerylist,
   getjewelleryDetails,
   deletejewellery,
};