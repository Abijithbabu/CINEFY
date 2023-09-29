const User = require("../model/User");
const CastingCall = require("../model/CastingCall");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const OTP = require("../middleware/otpValidation");
const Messages = require("../model/messageModel");

require("dotenv").config();
let otp;
const sendOtp = async (req, res) => {
  otp = OTP.sendMessage(parseInt(req.body.phone), res);
  return res.status(200).json({ code: otp });
};

const signup = async (req, res, next) => {
  const { name, email, phone, password, type } = req.body;
  console.log(req.body);
  try {
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const user = new User({
      name,
      email,
      phone,
      password,
      type,
    });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 8600,
    });
    console.log("token send", token);
    res.cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
      httpOnly: true,
      sameSite: "lax",
    });
    return res
      .status(200)
      .json({ message: "Successfully Logged in", user, token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password, process.env.JWT_SECRET);
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
  } catch (error) {
    return new Error(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }
  const isPassword = await existingUser.matchPasswords(password);
  if (!isPassword) {
    return res
      .status(400)
      .json({ message: "Incorrect password ! please recheck your password" });
  }
  if (existingUser.isDelete) {
    return res.status(400).json({
      message: "oops ! you've been temporarly blocked by the Administrator",
    });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: 860000,
  });
  console.log("token send", token);

  res
    .status(200)
    .cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,
      SameSite: "None",
      secure: true,
    })
    .json({
      message: "Successfully Logged in",
      user: existingUser,
      token,
    });
};

const gLogin = async (req, res) => {
  const { name, email, googleId, imageUrl } = req.body;
  console.log(email, googleId);
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })

    if (existingUser) {
      const isPassword = await existingUser.matchPasswords(googleId);
      if (!isPassword) {
        return res
          .status(400)
          .json({ message: "Invalid Email Id or password" });
      }
      if (existingUser.isDelete) {
        return res.status(400).json({
          message: "oops ! you've been temporarly blocked by the Administrator",
        });
      }
    } else {
      existingUser = new User({
        name,
        email,
        profilePic: imageUrl,
        password: googleId,
        type: "user",
      });
      console.log(existingUser);
      await existingUser.save();
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("token", token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
        SameSite: "None",
        secure: true,
      })
      .json({
        message: "Successfully Logged in",
        user: existingUser,
        token,
      });
  } catch (error) {
    console.log(error.message);
    return new Error(error);
  }
};

const getUser = async (req, res) => {
  console.log(req.query.email);
  let user;

  try {
    user = await User.findOne({ email: req.query.email });
    console.log(user);
  } catch (error) {
    return new Error(error);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

const resetPassword = async (req, res) => {
  const { _id, password } = req.body;
  console.log(req.body);
  let user;
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  try {
    user = await User.updateOne({ _id }, { $set: { password: newPassword } });
    console.log(user);
  } catch (error) {
    return new Error(error);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

const updateProfile = async (req, res) => {
  try {
    const photo = req.body.photo ?? req?.file?.filename
    const { _id, ...data } = req.body
    const status = await User.updateOne({ _id }, {
      $set: {
        profile: { ...data, photo },
      },
    });
    if (!status) {
      return res.status(400).json({ success: false, message: "something went wrong !" });
    }
    return res.status(200).json({ success: true, message: "profile updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  res.clearCookie(`token`);
  return res.status(200).json({ message: "Succefully Logged out" });
}

const createPost = async (req, res) => {
  const { ...data } = req.body;
  try { 
    if (!req.file) {
      return res.status(499).json({ message: "Image is required" });
    }
    const filepath = req.file.path.replace(/\\/g, "/").slice(7);
    const post = new CastingCall({
      ...data,
      image: filepath,
    });
    await post.save();
    if (!post) {
      return res.status(400).json({ message: "Something Went Wrong !" });
    }

    return res
      .status(200)
      .json({ message: "Casting Call Saved Successfully !" });
  } catch (error) {
    console.log(error.message);
    return new Error(error);
  }
};

const editPost = async (req, res) => {
  const { ...details } = req.body;
  let data = details;
  data.age = data.age.split(",").map((age) => parseInt(age.trim(), 10));
  data.roles = data.roles.split(",").map((roles) => roles.trim());
  data.language = data.language.split(",").map((language) => language.trim());
  delete data.date;
  delete data.applicants;
  try {
    if (req.file) {
      const filepath = req.file.path.replace(/\\/g, "/").slice(7);
      data = { ...data, image: filepath };
    }
    console.log(data);
    const post = CastingCall.updateOne(
      { _id: data._id },
      { $set: data },
      { upsert: true }
    )
      .then((result) => {
        console.log("Update result:", result);
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" });
    }

    return res
      .status(200)
      .json({ message: "Casting Call Saved Successfully !" });
  } catch (error) {
    return new Error(error);
  }
};

const getPost = async (req, res) => {
  try {
    const data = req.body;
    const type = data["Project Type"];
    const date = data["Date of Posting"];
    const { Role, Age, Gender, Languages, search } = data;
    const query = [{ valid: true }];
    console.log(type, date, Role, Age, Gender, Languages, search);

      if(Age && Age.length && (Age[1] !== 0 || Age[0] !== 0)) {
        query.push({ age: { $elemMatch: { $gte: Age[0], $lte: Age[1] } } });
      }
      Role && Role.length && query.push({ roles: { $in: Role } });
      type && type.length && query.push({ projectType: { $in: type } });
      Gender && Gender.length && query.push({gender:{$in:Gender}})
      Languages && Languages.length && query.push({language:{$in : Languages}})
      search && query.push({
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { director: { $regex: search, $options: 'i' } }
        ]
      })
      console.log(query);
      post = await CastingCall.find({
        $and: query,
      }).populate('author')

    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return new Error(error);
  }
};

const getCastingCalls = async (req, res) => {
  try {
    const post = await CastingCall.find({ author: req.query.id }).populate(
      "applicants.user",
      ["email", "name", "profilePic"]
    )
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    return new Error(error);
  }
};

const getPostDetails = async (req, res) => {
  try {
    const post = await CastingCall.findOne({ _id: req.query.id }).populate(
      "applicants.user",
      ["email", "name", "profilePic"]
    ).populate('author')
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    return new Error(error);
  }
};

const applyJob = async (req, res) => {
  try {
    const post = await CastingCall.updateOne(
      { _id: req.query.id },
      { $push: { applicants: { user: req.query.user } } }
    );
    if (!post) {
      return res.status(404).json({ message: "Something Went Wrong !" });
    }

    return res.status(200).json({ message: "Applied Successfully" });
  } catch (error) {
    return new Error(error);
  }
};

const bookmark = async (req, res) => {
  try {
    const document = await User.findOne({ _id: req.query.user });

    if (document?.bookmarks?.includes(req.query.id)) {
      await User.updateOne(
        { _id: req.query.user },
        { $pull: { bookmarks: req.query.id } }
      )
      return res.status(200).json({ message: "Bookmark removed" });
    } else {
      await User.updateOne(
        { _id: req.query.user },
        { $addToSet: { bookmarks: req.query.id } }
      )
      return res.status(200).json({ message: "Bookmarked Successfully" });
    }    
  } catch (error) {
    return new Error(error);
  }
};
const getBookmarks = async (req, res) => {
  try {
    const document = await User.findOne({ _id: req.query.id }).populate('bookmarks')
      return res.status(200).json({ message: "Bookmarks fetched Successfully",data:document?.bookmarks });
  } catch (error) {
    return new Error(error);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "name",
      "_id",
      "profilePic",
    ]);
    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
};
const getApplicants = async (req, res, next) => {
  console.log(req.body);
  const userId = req.body.map((x) => x.user);
  try {
    const users = await User.find({ _id: { $in: userId } }).select([
      "email",
      "name",
      "_id",
      "profilePic",
    ]);
    const updatedData = req.body.map((item) => {
      const user = users.find((u) => u._id.equals(item.user));
      console.log(user);
      if (user) {
        console.log({ user, status: item.status });
        return { user, status: item.status };
      }
      return item;
    });
    // console.log(updatedData);
    return res.json(updatedData);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
};

const getAllApplicants = async (req, res, next) => {
  console.log(1);
  try {
    const post = await CastingCall.find({ author: req.body.id });
    const uniqueApplicantIdsSet = new Set();
    post.forEach((p) => {
      p.applicants.forEach((applicant) => {
        uniqueApplicantIdsSet.add(applicant.user.toString());
      });
    });

    // Convert the Set to an array
    const userId = Array.from(uniqueApplicantIdsSet);
    const users = await User.find({ _id: { $in: userId } });
    console.log(users);

    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
};

const getUserDetails = async (req, res, next) => {
  try {
    console.log(req.query.id);
    const user = await User.findOne({ _id: req.query.id })
    console.log(user);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
};
const updateStatus = async (req, res, next) => {
  const { id, status, postId } = req.query;
  try {
    const updatedPost = await CastingCall.updateOne(
      { _id: postId, "applicants.user": id },
      { $set: { "applicants.$.status": status } }
    );
    if (updatedPost) {
      console.log("User status updated successfully.");
      return res
        .status(200)
        .json({ message: "User status updated successfully." });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
}

const blockPost = async (req, res, next) => {
  const { id } = req.query;
  try {
    const updatedPost = await CastingCall.findById({ _id: id })
    if (updatedPost) {
      updatedPost.valid = !updatedPost.valid
      await updatedPost.save()
      console.log("User status updated successfully.");
      return res
        .status(200)
        .json({ message: "User status updated successfully." });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "Something Went Wrong !" });
  }
};

const updateSubscription = async (req, res, next) => {
  const { id, type, validity } = req.query;
  try {
    const updated = await User.updateOne(
      { _id: id },
      { $set: { "subscription": { type, validity } } }
    );
    if (updated) {
      console.log("Subscription added successfully.");
      const user = await User.findOne({ _id: id });
      return res
        .status(200)
        .json({ user, message: "Subscription added successfully." });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "Something Went Wrong !" });
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
  editPost,
  getPost,
  getCastingCalls,
  getPostDetails,
  applyJob,
  getAllUsers,
  getApplicants,
  getAllApplicants,
  getUserDetails,
  updateStatus,
  updateSubscription,
  blockPost,
  bookmark,
  getBookmarks
};
