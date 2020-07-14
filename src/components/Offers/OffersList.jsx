import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OfferItem from './OfferItem';

const OffersList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/offers`)
      .then((response) => response.data)
      .then((data) => setOffers(data));
  }, []);

  return (
    <>
      {offers.map((item) => (
        <OfferItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          photo={item.photo1}
          user={item.user_id}
        />
      ))}
    </>
  );
};

export default OffersList;
