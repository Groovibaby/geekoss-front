import React, { useEffect, useState } from "react";
import CarouselDetails from "./CarouselDetails";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const OfferDetails = (props) => {
  const [info, setInfo] = useState([]);
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    const idOffer = props.match.params.id;
    axios
      .get(`${BASE_URL}/api/offers/${idOffer}`)
      .then((response) => response.data)
      .then((data) => setInfo(data));
    axios
      .get(`${BASE_URL}/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, [props.match.params.id]);

  return (
    <>
      <div className="container mb-5">
        <div className="row Details-Seller mb-3">
          <div className="Details-Text">
            <p>
              Vendu par notre ami{" "}
              {info[0] &&
                seller
                  .filter((item) => item.id === info[0]["user_id"])
                  .map((item) => item.pseudo)}{" "}
              - <span className="Details-SeeAll">Voir toutes ses annonces</span>
            </p>
          </div>
          <div>
            <Link to="/">
              <button className="ButtonAction Action">Retour</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {info[0] && (
              <div className="Slider-Body">
                <img
                  className="Details-Img"
                  src={info[0]["photo1"]}
                  alt={info[0]["title"]}
                />
              </div>
            )}
          </div>
          <div className="col-8 container">
            <div className="Details-Card">
              <h4>{info[0] && info[0]["title"]}</h4>
              <h5>{info[0] && info[0]["price"]} € en livraison rapide</h5>
              <p className="font-weight-bold text-left">Description</p>
              <p>{info[0] && info[0]["description"]}</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45246.8300186719!2d-0.621246175435048!3d44.86378340913356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1595508025752!5m2!1sfr!2sfr"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="Map"
            ></iframe>
          </div>
        </div>
        <div className="container">
          <CarouselDetails />
        </div>
      </div>
    </>
  );
};

export default OfferDetails;
