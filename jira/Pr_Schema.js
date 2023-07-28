
const mongoose = require("mongoose");

const P_Schema = new mongoose.Schema({
    Project:{
        type:String,
        required:true
    },
    Issue_type:{
        type:String,
        required:true
    }
})

//we are creating new collection
const Pro = new mongoose.model("Proj",P_Schema)

module.exports = Pro;