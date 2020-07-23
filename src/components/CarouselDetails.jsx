import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

const CarouselDetails = () => {
  const [slides, setSlides] = useState([]);

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/offers`)
      .then((response) => response.data)
      .then((data) => setSlides(data));
  }, []);

  return (
    <>
    <Slider {...settings} className="container Slider-Size-Details">
      {slides.map((item) => 
          <div className="Slider-Body-Details">
            <img className="Slider-Image-Details d-block w-100"
              src={item.photo1}
              alt={item.title}
            />
              <div className="Slider-Text-Details">
                <h3>{item.title}</h3>
              </div>
          </div>
      )}
    </Slider>
    </>
  );
}

export default CarouselDetails;