import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const OfferItem = (props) => {
  const { id, title, price, photo, user } = props;
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, []);

  return (
    <>
      <div className="card col-6 col-md-3">
        <Link to={`offer-details/${id}`}>
          <h5 className="card-title">{title}</h5>
          <img className="card-img-top" src={photo} alt={title} />
          <div className="card-body">
            <p className="card-text">
              {price}€ - Vendu par{" "}
              {seller
                .filter((item) => item.id === user)
                .map((item) => item.firstname)}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

OfferItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OfferItem;
