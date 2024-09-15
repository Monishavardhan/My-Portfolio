import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Correct import for FaGithub

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a
        href="www.linkedin.com/in/monisha-v-55b87a257"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Monishavardhan" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
