const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const castingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true,
    },
    shortdescription:{
        type:String,
        required:true, 
    },
    image:{
        type:String,
        
    },
    movie:{
        type:String,
    },
    director:{
        type:String,
    },
    roles:{
        type:Array
    },
    gender:{
        type:String
    },
    age:{
        type:String
    },
    location:{
        type:String
    },
    date:{
        type:Date
    },
    description:{
        type:String
    }

})


module.exports = mongoose.model('castingCall',castingSchema);

