import React from "react";
import CV from "../../assests/Monisha v_resume.pdf";
const Button = () => {
  return (
    <div className="ctn">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Button;
