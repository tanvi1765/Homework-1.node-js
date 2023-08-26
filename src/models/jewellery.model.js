const mongoose = require("mongoose");
const jewellerySchema = new mongoose.Schema(  {
    jewellery_name: {
      type: String,
      trim:true,
    },
    jewellery_type: {
      type: String,
      trim:true,
    },
    jewellery_material: {
      type:String,
      trim:true,
    },
    metal_type:{
        type:String,
        time:true,
    },
    jewellery_Weight:{
        type:String,
        trim:true,
    },
    jewellery_price:{
        type:Number,
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

const jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = jewellery;