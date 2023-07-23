const express = require('express')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/user-routes')
const adminRouter = require('./routes/admin-routes')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors =require('cors')
dotenv.config()
const app = express()
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  }));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, ('./public'))))
app.use(express.urlencoded({ extended: false }))
app.use('/api',router)
app.use('/api/admin',adminRouter)

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(5000)
    console.log('Database connected in port 5000')
}).catch((err) => console.log(err)) 