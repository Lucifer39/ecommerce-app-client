import React, { useState } from "react";

import menTees from "../assets/clothing-men-tees.png";
import womenTees from "../assets/clothing-women-tees.png";

import { BsArrowRight } from "react-icons/bs";

const Clothing = () => {
  const [arrowVisible, setArrowVisible] = useState("");

  const clothingList = [
    "Shop All",
    "Essential Tees",
    "Graphic Tees",
    "Best Sellers",
    "Womens",
    "Hats",
    "Bundles",
  ];

  return (
    <div className="modal-content modal-content-clothing">
      <div className="clothing-list">
        <ul className="clothing-list-ul">
          {clothingList.map((link) => {
            return (
              <li
                className="clothing-list-link"
                onMouseOver={() => setArrowVisible(link)}
                onMouseOut={() => setArrowVisible("")}
              >
                {link} {link == arrowVisible && <BsArrowRight className="clothing-list-arrow" />}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="clothing-men-tees">
        <img src={menTees} alt="" />
        <button className="clothing-button">Men's Essential Tees</button>
      </div>
      <div className="clothing-women-tees">
        <img src={womenTees} alt="" />
        <button className="clothing-button">Women's Essential Tees</button>
      </div>
    </div>
  );
};

export default Clothing;
