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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse assumenda dolorum repudiandae tempore exercitationem et quam voluptatibus autem ea sapiente veritatis porro omnis ab excepturi ut, provident aliquam ullam",
  },
  {
    avatar: AVATAR2,
    name: "shivani",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse assumenda dolorum repudiandae tempore exercitationem et quam voluptatibus autem ea sapiente veritatis porro omnis ab excepturi ut, provident aliquam ullam",
  },
  {
    avatar: AVATAR3,
    name: "shivani",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse assumenda dolorum repudiandae tempore exercitationem et quam voluptatibus autem ea sapiente veritatis porro omnis ab excepturi ut, provident aliquam ullam",
  },
  {
    avatar: AVATAR4,
    name: "shivani",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse assumenda dolorum repudiandae tempore exercitationem et quam voluptatibus autem ea sapiente veritatis porro omnis ab excepturi ut, provident aliquam ullam",
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
