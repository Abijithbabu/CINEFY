const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  type: {
    type: String,
    required: true,
  },
  subscription: {
    type: {
      type: String,
    },
    validity: {
      type: Date,
    },
  },
  profilePic: {
    type: String,
  },
  profile: {
    name: {
      type: String,
    },
    age:{type:Number},
    gender:{type:String},
    roles: {
      type: Array,
    },
    photo: {
      type: String,
    },
    cover: {
      type: String,
    },
    bio: {
      type: String,
    },
    intro: {
      type: String,
    },
    skills: {
      type: Array,
    },
    certifications: {
      type: Array,
    },
    languages: {
      type: Array,
    },
    workExp: {
      type: Array,
    },
    education: {
      type: Array,
    },
  },
  address: {
    addr_line1: {
      type: String,
    },
    addr_line2: {
      type: String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});
// Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
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
    throw new Error("Error comparing passwords: " + error.message);
  }
};

module.exports = mongoose.model("User", userSchema);
