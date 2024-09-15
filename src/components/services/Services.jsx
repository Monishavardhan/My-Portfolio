import React from "react";
import "./services.css";
import { MdCheck } from "react-icons/md";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Conducting user interviews, surveys, and analysis to understand user needs and behaviors.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Creating basic layouts and structures for websites and applications to map out functionality.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Developing interactive prototypes to test and refine design ideas before development.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Crafting visually appealing and intuitive user interfaces that enhance user experience.
              </p>
            </li>

            

            
          </ul>
        </article>
        {/*end of ui/ux */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Building interactive and responsive user interfaces
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Creating server-side functionality and database management.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Implementing systems for easy content updates and management.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Ensuring websites work across various devices and screens.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Providing ongoing updates and technical support.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Improving website speed and performance.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Building tailored solutions for specific business needs.
              </p>
            </li>
          </ul>
        </article>
        {/*end of web dev */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Creating marketing materials, and websites to drive conversions and communicate your brand’s message.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Writing insightful, well-researched articles for blogs that engage readers, drive traffic.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Writing compelling descriptions and unique selling points to attract.
              </p>
            </li>

            <li>
              <MdCheck className="service_list-icon" />
              <p>
              Creating clear, persuasive, and user-friendly content for websites to effectively communicate your message and visitor action.
              </p>
            </li>

            

            
          </ul>
        </article>
        {/*end of content creation */}
      </div>
    </section>
  );
};

export default Services;
