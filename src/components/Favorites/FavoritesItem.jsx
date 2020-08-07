import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Favorites.css";

const FavoritesItem = (props) => {
  const { id, title, price, photo, user } = props;
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, []);

  return (
    <>
      <Link to={`offer-details/${id}`}>
        <div className="card-fav col-12">
          <div className="card-fav-img-top">
            <img src={photo} alt={title} />
          </div>
          <div className="card-body col-md-7">
            <h5 className="card-fav-title">{title}</h5>
            <p className="card-fav-text">
              {price}€ - Vendu par{" "}
              {seller
                .filter((item) => item.id === user)
                .map((item) => item.firstname)}
            </p>
          </div>
          <div className="card-fav-btn col-md-3">
            <button className="btn-primary">Supprimer l'annonce</button>
            <button className="btn-primary">Contacter ce Geekoss</button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FavoritesItem;
