const mongoose = require("mongoose");
const  shopSchema= new mongoose.Schema({
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
    grocery:{
        type:mongoose.Types.ObjectId,
        ref:"grocery",
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
    const shop= mongoose.model("shop", shopSchema);
    module.exports = shop;