import React, { useContext, useEffect, useState } from "react";
import { authContext } from "./contexts/AuthContext";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CategoriesOffer from "./CategoriesOffer";
import "../App.css";
import "./AddOffer.css";

const AddOffer = () => {
  const { auth } = useContext(authContext);

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    localisation: "",
    price: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    user_id: "",
    category_id: "",
  });

  const [show, handleShow] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/api/offers";
    axios
      .post(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de l'ajout de l'utilisateur : ${e.message}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/auth",
      headers: {
        Authorization: `Bearer ${auth.data}`,
      },
    })
      .then((response) => response.data)
      .then((data) =>
        setInputs({ ...inputs, user_id: data.authData.admin[0].id })
      );
  });

  console.log("inputs", inputs);
  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ton annonce a bien été publiée !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
      <section id="addpick">
        <div className="col-12">
          <h2>Je dépose mon annonce</h2>
          <div className="container-md">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="title">
                  Que vendez-vous ? <span className="required">*</span>
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Titre de l'annonce"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cotegory">
                  Précisez la catégorie <span className="required">*</span>
                </label>
                <select
                  className="form-control"
                  name="category_id"
                  onChange={onChange}
                  id="category"
                >
                  <option>Afficher les catégories</option>
                  <CategoriesOffer />
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="photo1">Ajouter des photos</label>
                <input
                  type="text"
                  onChange={onChange}
                  className="form-control mb-2"
                  name="photo1"
                  id="photo1"
                  placeholder="Photo 1"
                />
                <input
                  type="text"
                  onChange={onChange}
                  className="form-control mb-2"
                  name="photo2"
                  id="photo2"
                  placeholder="Photo 2"
                />
                <input
                  type="text"
                  onChange={onChange}
                  className="form-control mb-2"
                  name="photo3"
                  id="photo3"
                  placeholder="Photo 3"
                />
                <input
                  type="text"
                  onChange={onChange}
                  className="form-control mb-2"
                  name="photo4"
                  id="photo4"
                  placeholder="Photo 4"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Décrivez-nous ce que vous vendez{" "}
                  <span className="required">*</span>
                </label>
                <textarea
                  className="form-control"
                  onChange={onChange}
                  name="description"
                  id="description"
                  rows="5"
                  placeholder="Texte de votre annonce"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Quel est votre prix ? <span className="required">*</span>
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="Titre de l'annonce"
                />
              </div>
              <div className="form-group">
                <label htmlFor="localisation">
                  Ou se trouve ce que vous vendez ?{" "}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={onChange}
                  name="localisation"
                  id="localisation"
                  placeholder="Adresse"
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1584704204874!5m2!1sfr!2sfr"
                  width="600"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="Map"
                ></iframe>
              </div>
              <div className="form-button">
                <button
                  type="submit"
                  id="send"
                  className="btn btn-primary"
                  onClick={() => handleShow(true)}
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddOffer;
