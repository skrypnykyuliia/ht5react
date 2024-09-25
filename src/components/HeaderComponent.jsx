import styles from "../styles/styles.css";
import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default Header;