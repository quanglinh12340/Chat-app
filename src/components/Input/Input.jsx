import React from "react";
import "./Input.scss";
import { assets } from "@/img";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={assets.attach} alt="" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="">
          <img src={assets.img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
