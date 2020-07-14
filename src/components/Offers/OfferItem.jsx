import React from 'react';
import PropTypes from 'prop-types';

const OfferItem = (props) => {
  const { title, price, photo, user } = props;

  return (
    <>
      <div class="card col-6 col-md-3">
        <h5 class="card-title">{title}</h5>
        <img class="card-img-top" src={photo} alt={title}/>
        <div class="card-body">
          <p class="card-text">{price}€ - Vendu par {user}</p>
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
