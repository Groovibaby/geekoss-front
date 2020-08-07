import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const OfferItem = (props) => {
  const { auth } = useContext(authContext);
  const { id, title, price, photo, user } = props;
  const [seller, setSeller] = useState([]);
  const [userId, setUserId] = useState([]);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users`)
      .then((response) => response.data)
      .then((data) => setSeller(data));
    axios({
      method: "post",
      url: "http://localhost:3000/api/auth",
      headers: {
        Authorization: `Bearer ${auth.data}`,
      },
    }).then((res) => setUserId(res.data.authData.admin[0]));
  }, [auth.data]);

  const handleFav = () => {
    const url = `http://localhost:3000/api/favorites/${
      userId && userId.id
    }/fav/${id}`;
    axios
      .post(url)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de l'ajout de l'annonce en favoris : ${e.message}`);
      });
  };

  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cette annonce a été ajoutée à tes favoris !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => handleShow(false)}
            className="ButtonAction Action"
          >
            Fermer
          </button>
          <Link to="/favorites">
            <button type="button" className="ButtonAction Action">
              Accéder aux favoris
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
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

export default OfferItem;
