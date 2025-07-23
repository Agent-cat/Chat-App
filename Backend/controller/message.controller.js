import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const userSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    // it gived all the users except the loged in user is
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(`Error in userSidebar controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { senderId: myId, reciverId: userToChatId },
        { reciverId: myId, senderId: userToChatId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
     console.log(`Error in GetMessages controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
