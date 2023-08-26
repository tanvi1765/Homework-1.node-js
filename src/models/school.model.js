const mongoose = require("mongoose");;
const  schoolschema=new mongoose.Schema({
    school_name:{
        type:String,
        trim:true
    },
    mediume_type:{
        type:String,
        trim:true
    },
    principal_name:{
        type:String,
        trim:true
    },
    area:{
        type:String,
        trim:true
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
    const school= mongoose.model("school", schoolschema);
    module.exports = school;