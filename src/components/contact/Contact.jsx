import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uq3lmq9",
        "template_1gn7qot",
        form.current,
        "yZF4sFiEwUUdSQjgi"
      )
      
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:monishavishnuvardhan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+919632288075"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
