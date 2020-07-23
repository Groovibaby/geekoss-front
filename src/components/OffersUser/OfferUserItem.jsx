import React from 'react';
import PropTypes from 'prop-types';

const OfferItem = (props) => {
  const { title, photo } = props;

  return (
    <>
      <div className="card col-6">
        <h5 className="card-title">{title}</h5>
        <img className="card-img-top" src={photo} alt={title}/>
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
