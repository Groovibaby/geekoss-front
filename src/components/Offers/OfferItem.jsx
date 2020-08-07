import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const OfferItem = (props, { informations }) => {
  const { auth } = useContext(authContext);
  const { id, title, price, photo, user } = props;
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, [auth.data]);

  const handleFav = () => {
    const url = `http://localhost:3000/api/${informations.id}/fav/${id}`;
    axios
      .post(url)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de l'ajout de l'annonce en favoris : ${e.message}`);
      });
  };
  console.log("informations offer", informations);
  console.log("props offer", props);
  return (
    <>
      <div className="card col-6 col-md-3">
        <Link to={`offer-details/${id}`}>
          <h5 className="card-title">{title}</h5>
          <div>
            <img className="card-img-top" src={photo} alt={title} />
            <span
              title="Ajouter aux favoris"
              className="far fa-heart fav-heart"
              onClick={handleFav}
            />
          </div>
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

const mapStateToProps = (state) => ({
  informations: state.SetInfoUserRedux.inputs,
});

export default connect(mapStateToProps)(OfferItem);
