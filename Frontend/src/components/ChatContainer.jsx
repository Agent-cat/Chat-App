import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import MessageSkeleton from "../components/skeletons/MessageSkeleton";
const ChatContainer = () => {
  const { messages, isMessagesLoading, getMessages, selectedUser } =
    useChatStore();
  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id,getMessages]);
  console.log(messages);
  if (isMessagesLoading) return <MessageSkeleton />;
  return <div>
    <ChatHeader/>
    <h1>messages...</h1>
    <MessageInput/>
  </div>;
};

export default ChatContainer;
