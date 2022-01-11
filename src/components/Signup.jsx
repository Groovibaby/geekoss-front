import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./Signup.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    password: "",
    avatar: "",
  });

  const [show, handleShow] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/api/users`;
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

  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ton compte a bien été créé !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/login">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
      <section id="signup">
        <div className="col-12">
          <h2>Je m'inscris direct !</h2>
          <div className="container-md">
            <Form onSubmit={submitForm}>
              <Form.Group onChange={onChange}>
                <Form.Control
                  type="text"
                  name="pseudo"
                  placeholder="Pseudo de Geekoss"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group onChange={onChange}>
                    <Form.Control name="firstname" placeholder="Prénom" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group onChange={onChange}>
                    <Form.Control name="lastname" placeholder="Nom" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group onChange={onChange}>
                <Form.Control type="text" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group onChange={onChange}>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
              </Form.Group>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="newsletter_subscriber"
                />
                <label className="form-check-label" for="newsletter_subscriber">
                  Je m'inscris à la newsletter
                </label>
              </div>
              <p>
                En m'inscrivant je confirme avoir lu et accepté les{" "}
                <a href="terms.html">
                  Termes & Conditions et Politique de confidentialité
                </a>{" "}
                de Geekoss. Je confirme avoir au moins 18 ans.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => handleShow(true)}
                >
                  Inscription
                </button>
              </div>
            </Form>
          </div>
        </div>
        <p className="d-flex justify-content-center">
          <a href="#">C'est compliqué, aidez-moi !</a>
        </p>
      </section>
    </>
  );
};

export default Signup;
