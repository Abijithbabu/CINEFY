const User = require('../model/User')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const signup = async(req,res,next) =>{
    const {name,email,password} = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({email:email})
    } catch (error) {
       console.log(err) 
    }
    if (existingUser) {
        res
        .status(400)
        .json({message:"User already exist"})
    }
   
    const user = new User({
        name,
        email,
        password
    })

    try {
        
        await user.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({message:user})
}

const login = async(req,res) =>{ 
    const { email, password } = req.body
    console.log(email,password,process.env.JWT_SECRET);
    let existingUser;
    try {
        existingUser = await User.findOne({email:email})
        
    } catch (error) {
        return new Error(error)
    }
    if(!existingUser){
        return res.status(400).json({message:"User not found"})
    }
   const isPassword = (await existingUser.matchPasswords(password))
   if(!isPassword){
    return res.status(400).json({message:"Invalid Email Id or password"})
   }
   const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{
    expiresIn: 8600
   })
   console.log("token send",token)
   res.cookie("token", token, {
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
    httpOnly: true,
    sameSite: 'lax',
  });
   return res.status(200).json({message:"Successfully Logged in",
    user:existingUser,token})
}

const getUser = async (req,res) =>{
    const userId = req.id
    let user;
   
    try {
        user = await User.findById(userId,'-password')
        console.log(user)
    } catch (error) {
        return new Error(error)
    }
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    
    return res.status(200).json({user})
}
const updateProfile = async (req, res) => {
    try {
      if (!req.file) {
        return res.json({ error: 'Image is required' });
      }
      
      // Generate the correct image URL by replacing backslashes with forward slashes
      const filepath = req.file.path.replace(/\\/g, '/').slice(7);
  
      await User.findByIdAndUpdate(req.id, {
        $set: {
          profilePic: filepath,
        },
      });
  
      const user = await User.findById(req.id);
      console.log('profile----', user);
  
      res.json({ success: true, url: user.profilePic });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  

const logout = async(req,res)=>{
    const token = req.cookies.token;
    if (!token) {
        return res.status(404).json({ message: 'No token found' });
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          console.log(err.name)
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired. Please log in again' });
          }
          return res.status(400).json({ message: 'Invalid Token' });
        }
        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`] = ""
        return res.status(200).json({message:"Succefully Logged out"})
      });
}

module.exports = {
    signup,
    login,
    getUser,
    updateProfile,
    logout
}