import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/banner1.webp";
import banner2 from "../../images/banner2.webp";
import banner3 from "../../images/banner3.jpg";

export default function Sliderf() {
  return (
    <>
      <Carousel fade className="mt-5 mb-5">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
