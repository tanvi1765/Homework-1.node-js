const { movieservice} = require("../services");

/** create movieservice user*/
const createmovie = async (req, res) => {
  try {
    const reqBody = req.body;
    const movieExists = await movieservice(reqBody.email);
    if (movieExists) {
      throw new Error("User already created by this movie service!");
    }

    res.status(200).json({
      success: true,
      message: "movie create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get movie list */
const getmovielist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get movie list successfully!",
      data: 'movie',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get movie details by id */
const getmovieDetails = async (req, res) => {
  try {
    const getmovieDetails = await movieservice.getmovieById(req.params.userId);
    if (!getDetails) {
      throw new Error("movie not found!");
    }

    res.status(200).json({
      success: true,
      message: "User movie get successfully!",
      data: getmovieDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete movie user */
const deletemovie = async (req, res) => {
  try {
    const userId = req.params.userId;
    const movieExists = await movieservice.getuserById(userId);
    if (!movieExists) {
      throw new Error(" movie User not found!");
    }

    await movieservice.deletemovie(userId);

    res.status(200).json({
      success: true,
      message: " movie User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createmovie,
   getmovielist,
   getmovieDetails,
   deletemovie,
};