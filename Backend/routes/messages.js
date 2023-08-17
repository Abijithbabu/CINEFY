const { addMessage, getMessages, getChats } = require("../controllers/messageController");
const router = require("express").Router();

router.get('/getChats',getChats)
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
