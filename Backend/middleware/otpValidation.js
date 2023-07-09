const fast2sms = require('fast-two-sms')
require("dotenv").config();

const sendMessage = function (mobile, res, next) {
    console.log(mobile);
    let randomOTP = Math.floor(Math.random() * 9000) + 1000
    var options = {
        authorization: process.env.SMS_API,
        message: `ARTISTO CLUB \n your OTP verification code is ${randomOTP}`,
        numbers: [mobile],
    };
    fast2sms
        .sendMessage(options)
        .then((response) => {
            console.log("otp sent successfully");
        })
        .catch((error) => {
            console.log(error);
        });
    return randomOTP;
};
// const sendMessage = ()=>Math.floor(Math.random() * 9000) + 1000
module.exports = {
   sendMessage
}