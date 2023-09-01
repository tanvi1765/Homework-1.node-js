const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema(  {
    grocery_name: {
      type: String,
      trim:true,
    },
    category: {
      type: String,
      trim:true,
    },
    grocery_quantity:{
        type: Number,
    },
    price:{
        type:Number,
    },
    Purchase_grocery:{
        type: Number,
    },
    shop:{
      type:mongoose.Types.ObjectId,
      ref:"shop",
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

const grocery = mongoose.model("grocery", grocerySchema);
module.exports = grocery;