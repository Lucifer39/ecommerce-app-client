import React, { useContext } from "react";

import context_ecom from "./context/AppContext";
import Analog from "./modalContent/Analog";
import Clothing from "./modalContent/Clothing";
import Objects from "./modalContent/Objects";

const NavbarModal = () => {
  const { modalVisible, modalSelect, handleHover, setModalVisible } = useContext(context_ecom);
  const modalContent = { Analog: <Analog />, Clothing: <Clothing />, Objects: <Objects /> };
  return (
    <>
      {modalVisible && (
        <div
          className="modal"
          onMouseOver={() => handleHover(modalSelect)}
          onMouseOut={() => setModalVisible(false)}
        >
          <div className="modal-inner-content">{modalContent[modalSelect]}</div>
        </div>
      )}
    </>
  );
};

export default NavbarModal;
