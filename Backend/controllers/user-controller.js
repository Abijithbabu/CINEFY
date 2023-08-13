const User = require('../model/User')
const CastingCall = require('../model/CastingCall')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const OTP = require('../middleware/otpValidation')
require("dotenv").config();
let otp
const sendOtp = async(req,res)=>{
   otp = OTP.sendMessage(parseInt(req.body.phone),res)
   return res.status(200).json({message : otp})
}

const signup = async (req, res, next) => {
  const { name, email, phone, password, type } = req.body
  console.log(req.body);
  try {
    let existingUser = await User.findOne({ email: email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" })
    }
    const user = new User({
      name,
      email,
      phone,
      password,
      type
    })
    await user.save()
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 8600
    })
    console.log("token send", token)
    res.cookie("token", token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.status(200).json({ message: "Successfully Logged in", user, token })
  } catch (error) {
    console.log(error)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password, process.env.JWT_SECRET);
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })

  } catch (error) {
    return new Error(error)
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" })
  }
  const isPassword = (await existingUser.matchPasswords(password))
  if (!isPassword) {
    return res.status(400).json({ message: "Incorrect password ! please recheck your password" })
  }
  if (existingUser.isDelete) {
    return res.status(400).json({ message: "oops ! you've been temporarly blocked by the Administrator" })
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: 860000
  })
  console.log("token send", token)

  
  res.status(200).cookie("token", token, {
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60), 
    httpOnly: true,
    SameSite:'None',
    secure: true, 
  }).json({
    message: "Successfully Logged in",
    user: existingUser, token
  })
}

const gLogin = async (req,res)=>{
  const {name, email, googleId, imageUrl } = req.body
  console.log(email, googleId)
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })

    if (existingUser) {
      const isPassword = (await existingUser.matchPasswords(googleId))
      if (!isPassword) {
        return res.status(400).json({ message: "Invalid Email Id or password" })
      }
      if (existingUser.isDelete) {
        return res.status(400).json({ message: "oops ! you've been temporarly blocked by the Administrator" })
      }
    }
      else{
        existingUser = new User({
          name,
          email,
          profilePic:imageUrl,
          password:googleId,
          type:'user'
        })
        console.log(existingUser);
        await existingUser.save()
      }
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: 8600
      })    
      
      res.status(200).cookie("token", token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 60 * 60), 
        httpOnly: true,
        SameSite:'None',
        secure: true, 
      }).json({
        message: "Successfully Logged in",
        user: existingUser, token
      })    

  } catch (error) {
    console.log(error.message);
    return new Error(error)
  }
}

const getUser = async (req, res) => {
  console.log(req.query.email);
  let user;

  try {
    user = await User.findOne({email:req.query.email})
    console.log(user)
  } catch (error) {
    return new Error(error)
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(200).json({ user })
}

const resetPassword = async (req, res) => {
  const {_id , password} = req.body
  console.log(req.body);
  let user;
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  try {
    user = await User.updateOne({_id},{$set:{password:newPassword}})
    console.log(user)
  } catch (error) {
    return new Error(error)
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  return res.status(200).json({ user })
}

const updateProfile = async (req, res) => {
  try {
    // if (!req.file) {
    //   return res.json({ error: 'Image is required' });
    // }
    // const filepath = req.file.path.replace(/\\/g, '/').slice(7);
    const data = req.body 
    console.log(data);
    await User.updateOne(data._id, {
      $set: {
        profile: data,
      },
    });

    const user = await User.findById(data._id);
    console.log('profile----', user);

    res.json({ success: true, message:'profile updated successfully'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const logout = async (req, res) => {
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
    res.clearCookie(`token`)
    return res.status(200).json({ message: "Succefully Logged out" })
  });
}


const createPost = async (req, res) => {
  const {...details} = req.body
  console.log(details);
 
  try {
    if (!req.file) {
      return res.json({ error: 'Image is required' });
    }
    const filepath = req.file.path.replace(/\\/g, '/').slice(7);
    const post = new CastingCall({
       ...details,
       image:filepath
    })
    await post.save()
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" })
    }
  
    return res.status(200).json({ message: "Casting Call Saved Successfully !" })
  } catch (error) {
    return new Error(error)
  }
}

const getPost = async (req, res) => {
  try {
    const data = req.body
    const type = data['Project Type']
    const date = data['Date of Posting']
    const {Role ,Age ,Gender,Languages } = data
    const query = []
    console.log(type,date,Role,Age,Gender,Languages)
    let totalCount = 0;
    for (const key in data) {
      if (data.hasOwnProperty(key) && Array.isArray(data[key])) {
        totalCount += data[key].length;
      }
    }

    if(totalCount)data?.Age?.[0]===0 && data?.Age?.[1]===0 ? totalCount-=2 : totalCount--   
    if (totalCount) {
      if(Age[1]!==0 || Age[0]!==0) {
        query.push({age: { $elemMatch: { $gte: Age[0], $lte: Age[1] } }})
      }
      Role.length && query.push({ roles: { $in: Role } }) 
      type.length && query.push({ projectType: { $in: type } })
      console.log(query);
      post = await CastingCall.find({
        $and: query
      });
      
    } else {
      post = await CastingCall.find()
    }
    
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" })
    }
  
    return res.status(200).json(post)
  } catch (error) {
    return new Error(error)
  }
}

const getPostDetails = async (req, res) => {
  try {
    const post = await CastingCall.findOne({_id:req.query.id})
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" })
    }
  
    return res.status(200).json(post)
  } catch (error) {
    return new Error(error)
  }
}

const applyJob = async (req, res) => {
  try {
    const post = await CastingCall.updateOne({_id:req.query.id},{$push:{applicants:req.query.user}})
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" })
    }
  
    return res.status(200).json({message:'Applied Successfully'})
  } catch (error) {
    return new Error(error)
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      'name',
      "_id",
      'profilePic'
    ]);
    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong !" })
  }
};

module.exports = {
  sendOtp,
  signup,
  login,
  gLogin,
  getUser,
  resetPassword,
  updateProfile,
  logout,
  createPost,
  getPost,
  getPostDetails,
  applyJob,
  getAllUsers
}