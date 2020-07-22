import React, { useState } from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';
import './Signup.css';

const UserAccount = () => {

  

  return (
    <>
      <section id="signup">
        <div class="col-12">
          <h2>Je suis inscris !</h2>
          <div class="container-md">
          <h1>
            {/* Bienvenue {Profile.firstname} {Profile.lastname} */}
          </h1>
          </div>
        </div>
        <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
      </section>
    </>
  )
};

export default UserAccount;