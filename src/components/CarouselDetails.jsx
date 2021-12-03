import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CarouselDetails = () => {
  const [slides, setSlides] = useState([]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/offers`)
      .then((response) => response.data)
      .then((data) => setSlides(data));
  }, []);

  return (
    <>
      <Slider {...settings} className="container Slider-Size-Details">
        {slides.map((item) => (
          <Link
            className="Slider-Body-Details"
            to={`/offer-details/${item.id}`}
          >
            <img
              className="Slider-Image-Details d-block w-100"
              src={item.photo1}
              alt={item.title}
            />
            <div className="Slider-Text-Details">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default CarouselDetails;
