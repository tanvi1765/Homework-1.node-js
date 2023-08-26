const mongoose = require("mongoose");
const musicschema = new mongoose.Schema(  {
    music_title: {
      type: String,
      trim:true,
    },
    music_Artist: {
      type: String,
      trim:true,
    },
    music_language:{
        type:String,
        trim:true,
    },
    music_duration:{
      type:Number,
  },
    Release_Format:{
        type:String,
        trim:true,
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

const music = mongoose.model("music", musicschema);
module.exports = music;