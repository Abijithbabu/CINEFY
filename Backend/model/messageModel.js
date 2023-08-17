const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        text: { type: String, required: true },
        sender: {
          type: String,
          required: true,
        },
        time: {
          type: Date,
          default: Date.now,
        },
        read:{
          type:Boolean,
          default:false
        }
      },
    ],
    lastMsg: { type: String },
    unRead: {
      id:{
        type:String
      },
      count:{
        type:Number
      }
    } 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);
