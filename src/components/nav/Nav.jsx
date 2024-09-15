import React from "react";
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <IoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <FaAddressBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <MdPermContactCalendar />
      </a>
    </nav>
  );
};

export default Nav;
