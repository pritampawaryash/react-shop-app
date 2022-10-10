import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";


export default function Slider() {
  return (
    <>
<Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={pic3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>HIMALAYAN</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>HUNTER 350</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={pic1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CLASSIC 350</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
