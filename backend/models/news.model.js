const {Schema , default : mongoose, model} = require("mongoose")

const News = new Schema({

    email : {
        type : String,
        require : true
    }

} , {timestamps:true})

module.exports = new model("News" , News)