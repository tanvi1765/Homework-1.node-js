const mongoose = require("mongoose");
const  medicalSchema= new mongoose.Schema({
    shop_name:{
        type: String,
        trim:true,
    },
    shop_type:{
        type: String,
        trim:true
    },
    Payment_type:{
        type: String,
        trim:true
    },
    pharmacy:{
        type:mongoose.Types.ObjectId,
        ref:"pharmacy",
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
    const medical= mongoose.model("medical", medicalSchema);
    module.exports = medical
    ;