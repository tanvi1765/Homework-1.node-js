const mongoose = require("mongoose");;
const  pharmacyschema=new mongoose.Schema({
    medicine_name:{
        type:String,
        trim:true
    },
    Dosage_Form:{
        type:String,/*(  ex:tablet, capsule, liquid)*/
        trim:true
    },
    Payment_type:{
        type:String,
        trim:true
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
    const pharmacy= mongoose.model("pharmacy", pharmacyschema);
    module.exports = pharmacy;