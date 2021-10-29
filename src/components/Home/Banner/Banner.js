import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="main-banner">
      <Carousel>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2019/11/boat-21.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-des">
            <h5>Tour Experience</h5>
            <h1>The Boat tour</h1>
            <button className="btn btn-light py-2 px-5 fs-6 ">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2019/11/img-hero.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-des">
            <h5>Tour Experience</h5>
            <h1>The Yatch tour</h1>
            <button className="btn btn-light py-2 px-5 fs-6">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
