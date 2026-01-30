const {Schema, default: mongoose} = require("mongoose")

const User = new Schema({

    f_name : {
        type : "string",
        required :true
    },

    l_name : {
        type :"string",
        required : true
    },

    email : {
        type : "string",
        unique : true,
        required : true
    },

    password : {
        type :"string",
        required : true
    }

})

module.exports = mongoose.model('User' , User)