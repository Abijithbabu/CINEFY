const express = require('express')
const { signup, login, getUser, logout, resetPassword, updateProfile , sendOtp, createPost, getPost, getPostDetails, gLogin, applyJob, getAllUsers, editPost, getApplicants, getAllApplicants, getUserDetails, updateStatus, updateSubscription, blockPost, bookmark, getCastingCalls, getBookmarks } = require('../controllers/user-controller')
const router = express.Router()
const {upload} = require('../middleware/multer')
router.post('/signup',signup)
router.post('/login',login)
router.post('/gLogin',gLogin)
router.post('/sendOtp', sendOtp)
router.get('/user',getUser)
router.post('/logout',logout)
router.patch('/resetPassword', resetPassword)
router.post('/updateProfile',upload.single('image'),updateProfile)
 
router.post('/createPost',upload.single('image'),createPost) 
router.post('/editPost',upload.single('image'),editPost) 
router.post('/getPosts',getPost)
router.get('/getPosts',getCastingCalls)
router.patch('/updateSubscription', updateSubscription)
router.patch('/updateStatus',updateStatus)
router.patch('/blockpost',blockPost)
router.post('/getApplicants',getApplicants)
router.post('/getAllApplicants',getAllApplicants)
router.get('/getUserDetails',getUserDetails)
router.get('/getPostDetails',getPostDetails)
router.patch('/applyJob',applyJob)
router.get("/allusers/:id", getAllUsers);
router.patch('/bookmark',bookmark)
router.get('/bookmark',getBookmarks)
module.exports = router   
