const { groceryservice} = require("../services");

/** create groceryservice user*/
const creategrocery = async (req, res) => {
  try {
    const reqBody = req.body;
    const groceryExists = await groceryservice(reqBody.email);
    if (groceryExists) {
      throw new Error("User already created by this grocery service!");
    }

    res.status(200).json({
      success: true,
      message: "grocery create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get grocery list */
const getgrocerylist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get grocery list successfully!",
      data: 'grocery',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get grocery details by id */
const getgroceryDetails = async (req, res) => {
  try {
    const getgroceryDetails = await groceryservice.getgroceryById(req.params.userId);
    if (!getDetails) {
      throw new Error("grocery not found!");
    }

    res.status(200).json({
      success: true,
      message: "User grocery get successfully!",
      data: getgroceryDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** grocery details update by id */
const updateDetails = async (req, res) => {
  try {
    const groceryId = req.params.userId;
    const groceryExists = await groceryservice.getgroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("grocery not found!");
    }

    await groceryservice.updateDetails(groceryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "grocery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete grocery user */
const deletegrocery = async (req, res) => {
  try {
    const userId = req.params.userId;
    const groceryExists = await groceryservice.getuserById(userId);
    if (!groceryExists) {
      throw new Error(" grocery User not found!");
    }

    await groceryservice.deletegrocery(userId);

    res.status(200).json({
      success: true,
      message: " grocery User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   creategrocery,
   getgrocerylist,
   getgroceryDetails,
   deletegrocery,
   updateDetails
};