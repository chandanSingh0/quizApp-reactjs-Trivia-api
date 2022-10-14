import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import image from "../../Image/quiz-logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        <img src={image} alt="logo" />
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header;
