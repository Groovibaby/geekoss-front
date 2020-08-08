import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./Favorites.css";

const FavoritesItem = ({ informations, id, title, price, photo, user }) => {
  const [seller, setSeller] = useState([]);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
  }, []);

  const deleteFav = () => {
    axios
      .delete(
        `http://localhost:3000/api/favorites/${informations.id}/fav/${id}`
      )
      .catch((err) => {
        alert(`Erreur lors de la suppression du favoris : ${err.message}`);
      });
  };

  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Cette annonce a été supprimée de tes favoris !
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => handleShow(false)}
            className="ButtonAction Action"
          >
            Fermer
          </button>
        </Modal.Footer>
      </Modal>
      <div className="card-fav col-12">
        <Link className="card-fav-top col-md-9" to={`offer-details/${id}`}>
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
        </Link>
        <div className="card-fav-btn col-md-3">
          <button
            className="btn-primary"
            onClick={() => {
              handleShow(true);
              deleteFav();
            }}
          >
            Supprimer l'annonce
          </button>
          <button className="btn-primary">Contacter ce Geekoss</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  informations: state.SetInfoUserRedux.inputs,
});

export default connect(mapStateToProps)(FavoritesItem);
