import React from "react";
import "./Chat.scss";
import { assets } from "@/img";
import Messages from "../Messages";
import Input from "../Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={assets.cam} alt="" />
          <img src={assets.add} alt="" />
          <img src={assets.more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
