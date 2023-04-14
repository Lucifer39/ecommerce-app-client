import { React, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarModal from "./components/NavbarModal";
import HomePage from "./components/HomePage";
import SubFooter from "./components/SubFooter";
import ProductPage from "./components/ProductPage";

import context_ecom from "./components/context/AppContext";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSelect, setModalSelect] = useState(0);

  const handleHover = (name) => {
    setModalVisible(true);
    setModalSelect(name);
  };

  return (
    <context_ecom.Provider
      value={{ modalVisible, setModalVisible, modalSelect, setModalSelect, handleHover }}
    >
      <BrowserRouter>
        <Navbar />
        <NavbarModal />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
        <SubFooter />
        <Footer />
      </BrowserRouter>
    </context_ecom.Provider>
  );
}

export default App;
