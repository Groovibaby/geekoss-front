import React, { useContext, useEffect, useState } from 'react';
import { authContext } from './contexts/AuthContext';
import { Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import OffersUser from './OffersUser/OffersUser';
import '../App.css';
import './Signup.css';

const UserAccount = () => {
  const { auth } = useContext(authContext);
  const [Profile, setProfile] = useState({
    id: '',
    firstname: '',
    lastname: '',
    pseudo: '',
    avatar: '',
  });
  const [inputs, setInputs] = useState([]);
  const [inputsToSend, setInputsToSend] = useState({
    avatar: '',
  })
  const [show, handleShow] = useState(false);
  const [connect, setConnect] = useState(true);

  const defaultImg =
    'https://api.drupal.org/sites/default/files/default-avatar.png';

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth',
      headers: {
        Authorization: `Bearer ${auth.data}`,
      },
    })
      .then((response) => response.data)
      .then((data) => setProfile(data.authData.admin[0]));
  }, [auth.data]);

  const submitForm = (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/api/users/${Profile.id}`;
    axios.put(url, inputsToSend).then((res) => res.data);
  };

  const onChange = (e) => {
    setInputsToSend({
      ...inputsToSend,
      [e.target.name]: e.target.value,
    });
  };

  const handleConnect = () => {
    window.localStorage.setItem('id', JSON.stringify(Profile.id));
    window.localStorage.setItem('firstname', JSON.stringify(Profile.firstname));
    window.localStorage.setItem('lastname', JSON.stringify(Profile.lastname));
    window.localStorage.setItem('pseudo', JSON.stringify(Profile.pseudo));
    window.localStorage.setItem('avatar', JSON.stringify(Profile.avatar));
    axios
      .get(`http://localhost:3000/api/users/${window.localStorage.getItem('id')}`)
      .then((response) => response.data)
      .then((data) => setInputs(data));
    setConnect(false);
  }
  console.log(localStorage.getItem('avatar'));
  return (
    <>
      <Modal size="lg" show={connect} centered>
        <Modal.Header closeButton>
          <Modal.Title>Content de te revoir mon ami !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button type="button" onClick={() => handleConnect()} className="ButtonAction Action">
            Ok
          </button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ta photo a bien été modifiée !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button type="button" onClick={() => handleShow(false)} className="ButtonAction Action">
            Ok
          </button>
        </Modal.Footer>
      </Modal>
      <section id="signup">
        <div className="container">
          <h1>Mon profil</h1>
          <div className="row">
            <div className="col-4 UserBoard-Left">
              <div className="Avatar">
                {inputs[0] && !inputs[0]['avatar'] === null ? (
                  <img src={localStorage.getItem('avatar')} alt="avatar" />
                ) : (
                  <img src={defaultImg} alt="avatar" />
                )}
              </div>
              <h2>
                {Profile.firstname} {Profile.lastname}
              </h2>
              <Form onSubmit={submitForm}>
                <Form.Group onChange={onChange}>
                  <Form.Label>Modifie ton avatar</Form.Label>
                  <Form.Control type="text" name="avatar" value={inputsToSend.avatar} />
                </Form.Group>
                <button
                  className="ButtonAction Action"
                  type="submit"
                  onClick={() => handleShow(true)}
                >
                  Modifier
                </button>
              </Form>
            </div>
            <div className="col-8 UserBoard-Right">
              <h2>
                Mes annonces en cours
              </h2>
              <OffersUser />
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default UserAccount;