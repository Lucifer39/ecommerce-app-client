import React from "react";

import starterKit from "../assets/analog-starter-kit.png";
import penTray from "../assets/analog-pen-tray.png";

const Analog = () => {
  return (
    <div className="modal-content">
      <div className="analog-content">
        <h2>Analog: The Simplest Productivity System</h2>
        <p>
          A physical companion for your digital tools that helps you prioritize your most important
          tasks.
        </p>
        <button className="analog-content-button">Learn About Analog</button>
      </div>
      <div className="analog-starter-kit">
        <img src={starterKit} alt="" />
        <button className="analog-starter-kit-button">Shop the Starter Kit</button>
      </div>
      <div className="analog-pen-tray">
        <img src={penTray} alt="" />
        <button className="analog-pen-tray-button">Shop Accessories</button>
      </div>
    </div>
  );
};

export default Analog;
