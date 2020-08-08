import React, { useContext, useEffect, useState } from "react";
import { authContext } from "./contexts/AuthContext";
import { Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import setUserInfo from "./Action/index";
import axios from "axios";
import OffersUser from "./OffersUser/OffersUser";
import "../App.css";
import "./Signup.css";

const UserAccount = ({ dispatch, informations }) => {
  const { auth } = useContext(authContext);
  const [inputsToSend, setInputsToSend] = useState({
    avatar: "",
  });
  const [show, handleShow] = useState(false);

  const defaultImg =
    "https://api.drupal.org/sites/default/files/default-avatar.png";

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/auth",
      headers: {
        Authorization: `Bearer ${auth.data}`,
      },
    }).then((res) => {
      dispatch(setUserInfo(res.data.authData.admin[0]));
    });
  });

  const submitForm = (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/api/users/${informations.id}`;
    axios.put(url, inputsToSend).then((res) => res.data);
  };

  const onChange = (e) => {
    setInputsToSend({
      ...inputsToSend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ta photo a bien été modifiée !</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => handleShow(false)}
            className="ButtonAction Action"
          >
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
                {informations.avatar ? (
                  <img src={informations.avatar} alt="avatar" />
                ) : (
                  <img src={defaultImg} alt="avatar" />
                )}
              </div>
              <h2>
                {informations.firstname} {informations.lastname}
              </h2>
              <Form>
                <Form.Group onSubmit={submitForm}>
                  <Form.Label>Modifie ton avatar</Form.Label>
                  <Form.Control
                    type="text"
                    name="avatar"
                    value={inputsToSend.avatar}
                    onChange={onChange}
                  />
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
              <h2>Mes annonces en cours</h2>
              <OffersUser />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  informations: state.SetInfoUserRedux.inputs,
});

export default connect(mapStateToProps)(UserAccount);
