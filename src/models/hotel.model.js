const mongoose = require("mongoose");;
const  hotelschema=new mongoose.Schema({
    hotel_name:{
        type: String,
        trim:true
    },
    hotel_type:{
        type:String,
        trim:true
    },
    city:{
        type: String,
        trim:true
    },
    room_type:{
        type:String,
        trim:true
    },
    Payment_type:{
        type:String,
        trim:true
    },
    Payment:{
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
    const hotel= mongoose.model("hotel", hotelschema);
    module.exports = hotel;
