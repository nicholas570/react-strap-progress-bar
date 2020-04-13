import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselItem({src, caption, altText}) {
  return (
    <>
      <img className='d-block w-100' src={src} alt={altText} />
      <Carousel.Caption>
        <h3>{caption}</h3>
      </Carousel.Caption>
    </>
  );
}

export default CarouselItem;
