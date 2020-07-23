import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OfferDetails = (props) => {
  const [info, setInfo] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const idOffer = props.match.params.id;
    axios.get(`http://localhost:3000/api/offers/${idOffer}`)
    .then(response => response.data)
    .then(data => setInfo(data));
      // setSlides(data[0].photo1, data[0].photo2, data[0].photo3, data[0].photo4);
      //setSlides(...slides, data[0].photo2);
      //setSlides(...slides, data[0].photo3);
      //setSlides(...slides, data[0].photo4);
  }, []);

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-4">
            {info[0] && 
              <div className="Slider-Body">
                <img className="Details-Img"
                  src={info[0]['photo1']}
                  alt={info[0]['title']}
                />
              </div>
            }
          </div>
          <div className="col-8 container">
            <div className="card col-6">
              <h4 className="card-title">{info[0] && info[0]['title']}</h4>
            </div>
            <div className="Details-Button">
              <Link to="/">
                <button className="ButtonAction Action" >
                  Retour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferDetails;