const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6 
    },
    profilePic:{
      type:String,
  },
    isDelete:{
      type:Boolean,
      default:false
    }
})
// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
// Match user entered password to hashed password in database
userSchema.methods.matchPasswords = async function (enteredPassword) {
    try {
      return await bcrypt.compare(String(enteredPassword), this.password);
    } catch (error) {
      throw new Error('Error comparing passwords: ' + error.message);
    }
  }; 

module.exports = mongoose.model('User',userSchema);