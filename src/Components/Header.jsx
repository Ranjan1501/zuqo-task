import React from "react";
import "./Header.css"; // Import the CSS file for styling

function Header() {
  return (
    <div className="header">
      <div className="card">
        <div className="circle"></div>
        <div className="text">User Management</div>
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="text">Setting</div>
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="text">Reports</div>
      </div>
    </div>
  );
}

export default Header;
