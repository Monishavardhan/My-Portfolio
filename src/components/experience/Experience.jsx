import React from "react";
import "./experience.css";
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>REACT JS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>NODE JS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>EXPRESS JS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>C/C++</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCircleCheck className="experience_details-icon" />
              <div>
                <h4>DATA STRUCTURE</h4>
                <small>Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
