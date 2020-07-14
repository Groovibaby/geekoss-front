import React, { useState } from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import './Signup.css';

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    newsletter_subscriber: 0,
  });

  const [show, handleShow] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/games';
    axios
      .post(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert(`Erreur lors de l'ajout du jeu : ${e.message}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log(inputs);

  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ton compte a bien été créé !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button type="button" className="ButtonAction Action">
            Ok
          </button>
        </Modal.Footer>
      </Modal>
      <section id="signup">
        <div class="col-12">
          <h2>Je m'inscris direct !</h2>
          <div class="container-md">

            <Form onSubmit={submitForm}>
              <Form.Group onChange={onChange}>
                <Form.Control type="text" name="pseudo" placeholder="Pseudo de Geekoss"/>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group onChange={onChange}>
                    <Form.Control name="firstname"  placeholder="Prénom"/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group onChange={onChange}>
                    <Form.Control name="lastname"  placeholder="Nom"/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group onChange={onChange}>
                <Form.Control type="text" name="email" placeholder="Email"/>
              </Form.Group>
              <Form.Group onChange={onChange}>
                <Form.Control type="password" name="password" placeholder="Mot de passe"/>
              </Form.Group>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" checked={inputs.newsletter_subscriber} name="newsletter_subscriber" onChange={onChange}/>
                <label class="form-check-label" for="newsletter_subscriber">Je m'inscris à la newsletter</label>
              </div>
              <p>En m'inscrivant je confirme avoir lu et accepté les <a href="terms.html">Termes & Conditions et Politique de confidentialité</a> de Geekoss. Je confirme avoir au moins 18 ans.</p>
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
        <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
      </section>
    </>
  )
};

export default Signup;