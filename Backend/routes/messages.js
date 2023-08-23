const { addMessage, getMessages, getChats, setMessageStatus } = require("../controllers/messageController");
const router = require("express").Router();

router.get('/getChats',getChats)
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.patch('/setMessageStatus',setMessageStatus)
module.exports = router;
