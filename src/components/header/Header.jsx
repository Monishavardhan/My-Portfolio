import React from "react";
import "./header.css";
import Button from "./Button";
import ME from "../../assests/Mypicture.jpg";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Monisha v</h1>
          <h5 className="text_light">Fullstack Developer</h5>
          <Button />
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
