import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

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

export const sendMessages = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;
    let imageurl;
    if (image) {
      const uploadresponse = cloudinary.uploader(image);
      imageurl = uploadresponse.secure_url;
    }
    const newMessage = new Message({
      senderId,
      reciverId,
      text,
      image: imageurl,
    });
    await newMessage.save();

    //todo realtime functionality using socket io ;

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(`Error in sendMessage controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
