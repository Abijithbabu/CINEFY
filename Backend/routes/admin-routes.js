const express = require('express')
const { login, getAdmin, adminLogout, userDetails, getUser, blockUser } = require('../controllers/admin-controller')

const adminRouter = express.Router()
adminRouter.post('/login',login)
adminRouter.post('/logout',adminLogout)
adminRouter.get('/profile',getAdmin)
adminRouter.get('/getUsers',userDetails)
adminRouter.get('/user-details/:id',getUser)
adminRouter.patch('/blockUser',blockUser)
// adminRouter.post('/search',searchUser)
// adminRouter.delete('/deleteUser/:id',deleteUser)

module.exports = adminRouter