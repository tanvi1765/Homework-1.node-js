const { schoolservice} = require("../services");

/** create schoolservice user*/
const createschool = async (req, res) => {
  try {
    const reqBody = req.body;
    const schoolExists = await schoolservice(reqBody.email);
    if (schoolExists) {
      throw new Error("User already created by this school service!");
    }

    res.status(200).json({
      success: true,
      message: "school create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get school list */
const getschoollist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get school list successfully!",
      data: 'school',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get school details by id */
const getschoolDetails = async (req, res) => {
  try {
    const getschoolDetails = await schoolservice.getschoolById(req.params.userId);
    if (!getDetails) {
      throw new Error("school not found!");
    }

    res.status(200).json({
      success: true,
      message: "User school get successfully!",
      data: getschoolDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** school details update by id */
const updateDetails = async (req, res) => {
  try {
    const schoolId = req.params.userId;
    const schoolExists = await schoolservice.getschoolById(schoolId);
    if (!schoolExists) {
      throw new Error("school not found!");
    }

    await schoolservice.updateDetails(schoolId, req.body);

    res
      .status(200)
      .json({ success: true, message: "school details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete school user */
const deleteschool = async (req, res) => {
  try {
    const userId = req.params.userId;
    const schoolExists = await schoolservice.getuserById(userId);
    if (!schoolExists) {
      throw new Error(" school User not found!");
    }

    await schoolservice.deleteschool(userId);

    res.status(200).json({
      success: true,
      message: " school User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createschool,
   getschoollist,
   getschoolDetails,
   deleteschool,
   updateDetails
};