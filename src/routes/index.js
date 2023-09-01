const express = require("express");
const busRoute = require("./bus.route");
const groceryRoute =require("./grocery.route");
const hotelRoute =require("./hotel.route");
const jewelleryRoute =require("./jewellery.route");
const movieRoute =require("./movie.route");
const musicRoute =require("./music.route");
const pharmaRoute =require("./pharmacy.route");
const schoolRoute =require("./school.route");
const stationaryRoute =require("./stationery.route");
const travelRoute =require("./travel.route");

const router = express.Router();

router.use("/bus", busRoute);
router.use("/grocery", groceryRoute);
router.use("/hotel", hotelRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/pharmacy", pharmaRoute);
router.use("/school", schoolRoute);
router.use("/stationery", stationaryRoute);
router.use("/travel", travelRoute);

module.exports = router;
