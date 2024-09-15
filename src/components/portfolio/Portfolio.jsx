import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/foodimage.png";
import IMG2 from "../../assests/interior.png";
import IMG3 from "../../assests/iphoneimage.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "FoodiesHub",
    github: "https://github.com/Monishavardhan/food",
    
  },
  {
    id: 2,
    image: IMG2,
    title: "Interior",
    github: "https://github.com/Monishavardhan/interior-web",
    
  },
  {
    id: 3,
    image: IMG3,
    title: "iPhone Mart",
    github: "https://github.com/Monishavardhan/e-commerce",
    
  }
 
];
const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          {data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn">
                    GitHub
                  </a>
                
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
