const mongoose = require("mongoose");
const warehouse=new mongoose.Schema({
    location_code:{
        type:String,
        unique: true
    },
    parent_location_code:{
        type:String,
        default:null
    }
});
