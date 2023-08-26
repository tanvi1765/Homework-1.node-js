const mongoose = require("mongoose");;
const  travelschema=new mongoose.Schema({
    travel_company:{
        type:String,
        trim:true
    },
    company_name:{
        type:String,
        trim:true,
    },
    traveler_details:{
        type:String,
        trim:true,
    },
    holiday_place:{
        type:String,
        trim:true,
    },
    holiday_days:{
        type:Number,
    },
    holiday_des:{
        type:String,
        trim:true,
    },
    payment:{
        type:Number,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );
    const travel= mongoose.model("travel", travelschema);
    module.exports = travel;