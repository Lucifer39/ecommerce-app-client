import React, { useState } from "react";

import mousePad from "../assets/objects-mouse-pad.png";
import cups from "../assets/objects-cups.png";

import { BsArrowRight } from "react-icons/bs";

const Objects = () => {
  const [arrowVisible, setArrowVisible] = useState("");

  const objectsList = ["Shop All", "Analog", "Workspace", "Home", "Gather"];

  return (
    <div className="modal-content modal-content-clothing">
      <div className="clothing-list">
        <ul className="clothing-list-ul">
          {objectsList.map((link) => {
            return (
              <li
                className="clothing-list-link"
                onMouseOver={() => setArrowVisible(link)}
                onMouseOut={() => setArrowVisible("")}
              >
                {link} {link === arrowVisible && <BsArrowRight className="clothing-list-arrow" />}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="clothing-men-tees">
        <img src={mousePad} alt="" />
        <button className="clothing-button">Shop Workspace</button>
      </div>
      <div className="clothing-women-tees">
        <img src={cups} alt="" />
        <button className="clothing-button">Shop Home</button>
      </div>
    </div>
  );
};

export default Objects;
