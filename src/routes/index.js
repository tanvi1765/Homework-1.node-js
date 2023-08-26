const express = require("express");
const router = express.Router();

const busRoute = require("./bus.route");
router.use("/bus", busRoute);

const groceryRoute =require("./grocery.route");
router.use("/grocery", groceryRoute);

const hotelRoute =require("./hotel.route");
router.use("/hotel", hotelRoute);

const jewelleryRoute =require("./jewellery.route");
router.use("/jewellery", jewelleryRoute);

const movieRoute =require("./movie.route");
router.use("/movie", movieRoute);

const musicRoute =require("./music.route");
router.use("/music", musicRoute);

const pharmaRoute =require("./pharmacy.route");
router.use("/pharmacy", pharmaRoute);

const schoolRoute =require("./school.route");
router.use("/school", schoolRoute);

const stationaryRoute =require("./stationery.route");
router.use("/stationery", stationaryRoute);

const travelRoute =require("./travel.route");
router.use("/travel", travelRoute);

module.exports = router;
