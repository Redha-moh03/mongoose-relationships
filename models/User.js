const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName : {
        type:String,
        required : true ,
        unique : true ,
        minLength : 4,
        maxLength : 100,
    },
    password : {
        type: String,
        required :true , 
        minLength : 10,
        maxLength : 30,
    }
}, {timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User