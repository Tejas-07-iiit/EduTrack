const {Schema , default : mongoose, model} = require("mongoose")

const Msg = new Schema({

    email : {
        type : String,
        require : true
    } ,

    Msg : {
        type : String,
        require : true
    }
    
} , {timestamps:true})

module.exports = new model("Msg" , Msg)