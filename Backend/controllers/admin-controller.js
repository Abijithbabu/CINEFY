const jwt = require('jsonwebtoken');
const Admin = require('../model/Admin');
const User = require('../model/User');
require("dotenv").config();

const login = async(req,res) =>{
    const { email, password } = req.body
    let existingUser 
    try {
        existingUser = await Admin.findOne({email:email,password:password})
        
    } catch (error) {
        return new Error(error)
    }
    if(!existingUser){
        return res.status(400).json({message:"User not found"})
    }
    const token = jwt.sign({id:existingUser._id},process.env.JWT_SECRET_ADMIN,{
        expiresIn: "1d"
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

const getAdmin = async (req,res) =>{
    const adminId = req.id
    let admin;
   
    try {
        admin = await Admin.findById(adminId,'-password')
        console.log(admin)
    } catch (error) {
        return new Error(error)
    }
    if(!admin){
        return res.status(404).json({message:"User not found"})
    }
    
    return res.status(200).json({admin})
}
const getUser = async(req,res) =>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        const userDetails = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        
        res.json({ userDetails });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}
const userDetails = async(req,res) =>{
    try {
        const user = await User.find({isDelete:false})
        if (user) {
            return res.status(200).json({user})
            
        } else {
            return res.status(404).json({message:"User not found"})
        }
    } catch (error) {
        return new Error(error.message)
    }
}
const addUser = async(req,res) =>{
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
const EditUser = async(req,res) =>{

    try{
        const id=req.params.id
        const {name,email}=req.body
        await User.findByIdAndUpdate(id,{
            $set:{
                name,
                email
            }
        })
        res.json({success:true})
            }catch(err){
        
            }
}
const searchUser = async (req, res) => {
    try {
      const search = req.body.search;
      const query = { isDelete: false };
  
      if (search) {
        query.$or = [
          { email: new RegExp(search, 'i') },
          { name: new RegExp(search, 'i') },
        ];
      }
  
      const users = await User.find(query);
      res.json({ users, success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  };

  const deleteUser = async (req,res) =>{
    try{
        const id=req.params.id
        
        await User.findByIdAndUpdate(id,{
            $set:{
                isDelete:true
            }
        })
        
        res.json({success:true})
                }catch(err){
        console.log(err);
            }
  }
const adminLogout = async(req,res)=>{
    
    const token = req.cookies.token;
    console.log("del"+token);
    if (!token) {
        return res.status(404).json({ message: 'No token found' });
      }

      jwt.verify(token, process.env.JWT_SECRET_ADMIN, (err, user) => {
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
    login,
    getAdmin,
    adminLogout,
    getUser,
    userDetails,
    addUser,
    EditUser,
    deleteUser,
    searchUser
}