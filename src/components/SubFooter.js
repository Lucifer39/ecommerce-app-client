import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SubFooter = () => {
  return (
    <div className="subfooter">
      <h2>Get the inside scoop</h2>
      <p>
        Sign up for new product drops, behind-the-scenes content, and monthly "5 Things I'm Digging"
        emails
      </p>
      <div className="subfooter-form">
        <input type="text" placeholder="Enter your email" />
        <button>
          See what we're digging <BsArrowRight className="subfooter-button-arrow" />
        </button>
      </div>
    </div>
  );
};

export default SubFooter;
