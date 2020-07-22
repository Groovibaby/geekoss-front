import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import './Signup.css';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const submitForm = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/api/users';
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

  console.log(inputs);

  return (
    <>
    <section id="connect">
      <div class="col-12">
          <h2>Je me connecte !</h2>
          <div class="container-md">
            <Form onSubmit={submitForm}>
                <Form.Group onChange={onChange}>
                  <Form.Control type="text" name="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group onChange={onChange}>
                  <Form.Control type="password" name="password" placeholder="Mot de passe"/>
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    Je me connecte
                  </button>
                </div>
              </Form>
          </div>
      </div>
      <p class="d-flex justify-content-center"><a href="#">J'ai oublié mon mot de passe</a></p>
      <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
    </section>
    </>
  )
};

export default Login;