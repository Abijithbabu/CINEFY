const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const castingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  shortdescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  projectType: {
    type: String,
  },
  director: {
    type: String,
  },
  roles: {
    type: Array,
  },
  gender: {
    type: String,
  },
  age: {
    type: [Number],
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  language: {
    type: Array,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      status: {
        type: String,
        default: "unreviewed",
      },
    },
  ],
  valid:{
    type:Boolean,
    default:true
  }
},
{
  timestamps: true,
});

module.exports = mongoose.model("castingCall", castingSchema);
