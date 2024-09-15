import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { PiFolderSimpleUserFill } from "react-icons/pi";
import ME from "../../assests/laptopabout.avif";

const About = () => {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ months</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article>

            <article className="about_card">
              <PiFolderSimpleUserFill className="about_icon" />
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            delectus placeat sapiente assumenda recusandae. Iste voluptate,
            veritatis maxime deserunt qui molestias perspiciatis consequuntur
            natus tempora magni est sequi aspernatur nam?
          </p>
          <a href="#contact" className="btn btn-primary" alt="">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
