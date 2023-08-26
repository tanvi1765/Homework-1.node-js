const { number } = require("joi");
const mongoose = require("mongoose");
const movieschema = new mongoose.Schema(  {
    movie_name: {
      type: String,
      trim:true,
    },
    movie_language:{
        type:String,
        trim:true,
    },
    movie_rumtime:{
        type:Number,
    },
    movie_ticket:{
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

const movie = mongoose.model("movie", movieschema);
module.exports = movie;