import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import logo from "./assets/logo-transparent.png";

const Footer = () => {
  const customerServiceList = [
    { link: "Help/FAQ", url: "#" },
    { link: "Returns & Exchanges", url: "#" },
    { link: "Sizing", url: "#" },
    { link: "Gift Cards", url: "#" },
    { link: "Contact us", url: "#" },
  ];

  const aboutList = [
    { link: "Our Story", url: "#" },
    { link: "Shop", url: "#" },
    { link: "Journal", url: "#" },
    { link: "About our Tees", url: "#" },
    { link: "Reviews", url: "#" },
  ];

  return (
    <div className="footer">
      <div className="footer-customer-service-div">
        <h3>Customer Service</h3>
        <ul>
          {customerServiceList.map((listLine) => {
            return <li>{listLine.link}</li>;
          })}
        </ul>
      </div>
      <div className="footer-about-div">
        <h3>About</h3>
        <ul>
          {aboutList.map((listLine) => {
            return <li>{listLine.link}</li>;
          })}
        </ul>
      </div>
      <div className="footer-logo-blank"></div>
      <div className="footer-logo-div">
        <div className="footer-logo-content">
          <div className="footer-logo-content-copyright">
            <p>
              <MdOutlineCopyright /> Buy-it 2023
            </p>
            <p>All images and content may not be used without permission</p>
          </div>
          <div className="footer-logo-content-logo-pic">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="footer-logo-links">
          <BsTwitter />
          <BsInstagram />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
