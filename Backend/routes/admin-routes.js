const express = require('express')
const { login, getAdmin, adminLogout, userDetails, getUser, EditUser, addUser, searchUser, deleteUser } = require('../controllers/admin-controller')

const { verifyTokenAdmin } = require('../middleware/adminMiddleware')
const adminRouter = express.Router()
adminRouter.post('/login',login)
adminRouter.post('/logout',verifyTokenAdmin,adminLogout)
adminRouter.get('/profile',verifyTokenAdmin,getAdmin)
adminRouter.get('/user-details',verifyTokenAdmin,userDetails)
adminRouter.get('/user-details/:id',verifyTokenAdmin,getUser)
adminRouter.post('/addUser',verifyTokenAdmin,addUser)
adminRouter.patch('/editUser/:id',verifyTokenAdmin,EditUser)
adminRouter.post('/search',verifyTokenAdmin,searchUser)
adminRouter.delete('/deleteUser/:id',verifyTokenAdmin,deleteUser)

module.exports = adminRouter