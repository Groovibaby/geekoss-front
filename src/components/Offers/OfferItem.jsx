import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const OfferItem = (props) => {
  const { title, price, photo, user } = props;
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, []);

  return (
    <>
      <div class="card col-6 col-md-3">
        <h5 class="card-title">{title}</h5>
        <img class="card-img-top" src={photo} alt={title}/>
        <div class="card-body">
          <p class="card-text">{price}€ - Vendu par {seller.filter((item) => item.id === user).map((item) => item.firstname)}</p>
        </div>
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
