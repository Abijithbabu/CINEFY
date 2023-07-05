const express = require('express')
const { signup, login, getUser, logout, updateProfile } = require('../controllers/user-controller')
const { verifyToken } = require('../middleware/authMiddleware')
const router = express.Router()
const {upload} = require('../middleware/multer')
router.post('/signup',signup)
router.post('/login',login)
router.get('/user',verifyToken,getUser)
router.post('/logout',verifyToken,logout)
router.patch('/update',verifyToken,upload.single('image'),updateProfile)

module.exports = router