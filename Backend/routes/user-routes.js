const express = require('express')
const { signup, login, getUser, logout, resetPassword, updateProfile , sendOtp } = require('../controllers/user-controller')
const { verifyToken } = require('../middleware/authMiddleware')
const router = express.Router()
const {upload} = require('../middleware/multer')
router.post('/signup',signup)
router.post('/login',login)
router.post('/sendOtp', sendOtp)
router.get('/user',getUser)
router.post('/logout',verifyToken,logout)
router.patch('/resetPassword', resetPassword)
router.patch('/update',verifyToken,upload.single('image'),updateProfile)

module.exports = router  