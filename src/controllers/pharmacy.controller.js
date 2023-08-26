const { pharmacyservice} = require("../services");

/** create pharmacyservice user*/
const createpharmacy = async (req, res) => {
  try {
    const reqBody = req.body;
    const pharmacyExists = await pharmacyservice(reqBody.email);
    if (pharmacyExists) {
      throw new Error("User already created by this pharmacy service!");
    }

    res.status(200).json({
      success: true,
      message: "pharmacy create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get pharmacy list */
const getpharmacylist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get pharmacy list successfully!",
      data: 'pharmacy',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get pharmacy details by id */
const getpharmacyDetails = async (req, res) => {
  try {
    const getpharmacyDetails = await pharmacyservice.getpharmacyById(req.params.userId);
    if (!getDetails) {
      throw new Error("pharmacy not found!");
    }

    res.status(200).json({
      success: true,
      message: "User pharmacy get successfully!",
      data: getpharmacyDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete pharmacy user */
const deletepharmacy = async (req, res) => {
  try {
    const userId = req.params.userId;
    const pharmacyExists = await pharmacyservice.getuserById(userId);
    if (!pharmacyExists) {
      throw new Error(" pharmacy User not found!");
    }

    await pharmacyservice.deletepharmacy(userId);

    res.status(200).json({
      success: true,
      message: " pharmacy User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createpharmacy,
   getpharmacylist,
   getpharmacyDetails,
   deletepharmacy,
};