import React, { useContext } from "react";

import logo from "./assets/Buy-it-logo-transparent.png";
import { AiOutlineSearch, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

import context_ecom from "./context/AppContext";

const Navbar = () => {
  const { modalVisible, setModalVisible, handleHover, modalSelect } = useContext(context_ecom);
  const navbarPages = [{ name: "Analog" }, { name: "Clothing" }, { name: "Objects" }];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-pages">
        {navbarPages.map((link, index) => {
          return (
            <span
              className="navbar-pages-links"
              onMouseOver={() => handleHover(link.name)}
              onMouseOut={() => setModalVisible(false)}
              key={index}
            >
              {link.name}{" "}
              {modalVisible && modalSelect === link.name ? (
                <AiOutlineMinus className="navbar-sign" />
              ) : (
                <AiOutlinePlus className="navbar-sign" />
              )}
            </span>
          );
        })}
        <span className="navbar-pages-links">Best Sellers</span>
      </div>
      <div className="navbar-blank"></div>
      <div className="navbar-links">
        <AiOutlineSearch className="navbar-links-icon" />
        <BsFillPersonFill className="navbar-links-icon" />
        <MdShoppingCart className="navbar-links-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
