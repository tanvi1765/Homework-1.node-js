const mongoose = require("mongoose");
const  busSchema= new mongoose.Schema({
    bus_name:{
        type: String,
        trim:true,
    },
    bus_type:{
        type: String,
        trim:true
    },
    Payment_type:{
        type: String,
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
    const bus= mongoose.model("bus", busSchema);
    module.exports = bus;