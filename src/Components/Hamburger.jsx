import React, { useState } from "react";
import "./Hamburger.css"; // Create a CSS file for styling
import Header from "./Header";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu">
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isOpen && (
          <div className="menu-items">
            <div className="menu-item">User Management</div>
            <div className="menu-item">Settings</div>
            <div className="menu-item">Reports</div>
          </div>
        )}
        {/* <div className="cardMenu">
          <Header />
        </div> */}
      </div>
    </>
  );
}

export default HamburgerMenu;
