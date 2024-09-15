import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assests/testimonial1.webp";
import AVATAR2 from "../../assests/testimonial2.webp";
import AVATAR3 from "../../assests/testimonial3.jpeg";
import AVATAR4 from "../../assests/testimonial4.jpeg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "shivani",
    review:
      "The portfolio highlights exceptional creativity and attention to detail. Each project is well thought out, showcasing both design and functionality. The balance between aesthetics and usability is impressive. A highly professional approach and a great display of skill and expertise!",
  },
  {
    avatar: AVATAR2,
    name: "Emma",
    review:
      "This portfolio demonstrates a strong understanding of design principles and client needs. Each project reflects high technical skills and innovation. The variety of work shows versatility and the ability to deliver quality solutions consistently. A great example of professional, high-standard work!",
  },
  {
    avatar: AVATAR3,
    name: "Bella",
    review:
      "The portfolio shows a consistent level of high-quality work, with polished and professional designs throughout. The attention to detail and ability to convey complex ideas visually are outstanding. This is a solid collection of projects, clearly reflecting a passion for delivering excellence!",
  },
  {
    avatar: AVATAR4,
    name: "John D",
    review:
      "The portfolio is full of vibrant and engaging designs, each tailored to its specific project. The creativity and thoughtful execution really stand out. The work demonstrates an impressive combination of originality and practical application, making it a must-see for anyone seeking design inspiration!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt=""></img>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
