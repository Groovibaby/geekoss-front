import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

const CarouselGeekoss = () => {
  const [slides, setSlides] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/banners`)
      .then((response) => response.data)
      .then((data) => setSlides(data));
  }, []);

  return (
    <>
    <Slider {...settings} className="container">
      {slides.map((item) => 
          <div className="Slider-Body">
            <img className="Slider-Image d-block w-100"
              src={item.url_img}
              alt={item.title}
            />
              <div className="Slider-Text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
          </div>
      )}
    </Slider>
    </>
  );
}

export default CarouselGeekoss;