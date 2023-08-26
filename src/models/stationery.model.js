const mongoose = require("mongoose");
const stationerySchema = new mongoose.Schema({

    stationery_name: {
      type: String,
      trim:true,
    },
    item: {
      type: Number,
    },
    bill_no: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: true,
  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const stationery = mongoose.model("stationery", stationerySchema);
module.exports = stationery;