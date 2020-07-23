import React, { useReducer, useContext } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { authContext } from './contexts/AuthContext';
import '../App.css';
import './Signup.css';

const Login = (props) => {
  const { setAuthData } = useContext(authContext);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/auth/login/user';
    axios
      .post(url, userInput)
      .then((res) => setAuthData(res.data.token))
      .then(() => props.history.push('/user-account'))
      .catch();
  };

  return (
    <>
      <section id="connect">
        <div className="col-12">
            <h2>Je me connecte !</h2>
            <div className="container-md">
              <Form onSubmit={handleSubmit}>
                  <Form.Group onChange={handleChange}>
                    <Form.Control type="text" name="email" placeholder="Email"/>
                  </Form.Group>
                  <Form.Group onChange={handleChange}>
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
        <p className="d-flex justify-content-center"><a href="#">J'ai oublié mon mot de passe</a></p>
        <p className="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
      </section>
    </>
  )
};

export default Login;