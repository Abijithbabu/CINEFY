const express = require('express')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const socket = require("socket.io");
const router = require('./routes/user-routes')
const messageRoutes = require("./routes/messages");
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
app.use("/api/messages", messageRoutes);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB Connetion Successfull")
}).catch((err) => console.log(err))

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  }, 
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data);
    }
  });
});