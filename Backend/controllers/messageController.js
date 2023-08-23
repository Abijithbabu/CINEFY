const Messages = require("../model/messageModel");

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.findOne({
      users: {
        $all: [from, to],
      },
    });

    res.json(messages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.getChats = async (req, res, next) => {
  try {
    const messages = await Messages.find({
      users: {
        $in: [req.query.id],
      },
    })
      .populate("users", ["_id", "name", "profilePic"])
      .sort({ updatedAt: -1 });

    res.json(messages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const messages = await Messages.findOne({
      users: {
        $all: [from, to],
      }
    })

    if (messages) {
      const count = messages?.unRead?.id === from ? 1 : ++messages.unRead.count
      console.log(messages?.unRead?.id === from)
      console.log(count)
      data = await Messages.findOneAndUpdate(
        {
          users: {
            $all: [from, to],
          }
        },
        {
          $push: { messages: { text: message, sender: from } },
          $set: {
            lastMsg: message,
            unRead: { id: to, count }
          },
        },
        { new: true }
      ) 
    } else {
      data = await Messages.create({
        messages: [{ text: message, sender: from }],
        users: [from, to],
        lastMsg: message,
        unRead: {
          id: to,
          count: 1
        },
      });
    }

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    console.log(ex.message);
    next(ex);
  }
};

module.exports.setMessageStatus = async (req, res, next) => {
  try {
    const { id, user} = req.query
    const messages = await Messages.updateOne({
      users: {
        $all: [id , user],
      },
    },
    { $set: { "messages.$[].read": true }})

    res.json(messages);
  } catch (ex) {
    next(ex);
  }
};