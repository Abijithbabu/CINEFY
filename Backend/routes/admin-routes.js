const express = require('express')
const { login, getAdmin, adminLogout, userDetails, getUser, blockUser } = require('../controllers/admin-controller')

const { verifyTokenAdmin } = require('../middleware/adminMiddleware')
const adminRouter = express.Router()
adminRouter.post('/login',login)
adminRouter.post('/logout',verifyTokenAdmin,adminLogout)
adminRouter.get('/profile',verifyTokenAdmin,getAdmin)
adminRouter.get('/getUsers',userDetails)
adminRouter.get('/user-details/:id',verifyTokenAdmin,getUser)
adminRouter.patch('/blockUser',verifyTokenAdmin,blockUser)
// adminRouter.post('/search',verifyTokenAdmin,searchUser)
// adminRouter.delete('/deleteUser/:id',verifyTokenAdmin,deleteUser)

module.exports = adminRouter