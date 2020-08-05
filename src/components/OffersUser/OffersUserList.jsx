import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import OfferUserItem from "./OfferUserItem";

const OffersUserList = ({ informations }) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/offers/user/${informations.id}`)
      .then((response) => response.data)
      .then((data) => setOffers(data));
  });

  return (
    <>
      {offers.map((item) => (
        <OfferUserItem
          key={item.id}
          id={item.id}
          title={item.title}
          photo={item.photo1}
          price={item.price}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  informations: state.SetInfoUserRedux.inputs,
});

export default connect(mapStateToProps)(OffersUserList);
