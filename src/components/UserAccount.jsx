import React, { useContext, useEffect, useState } from 'react';
import { authContext } from './contexts/AuthContext';
import axios from 'axios';
import '../App.css';
import './Signup.css';

const UserAccount = () => {
  const { auth } = useContext(authContext);
  const [Profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    pseudo: '',
  });

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

  console.log('Profile', Profile);
  
  return (
    <>
      <section id="signup">
        <div class="col-12">
          <h2>Je suis inscris !</h2>
          <div class="container-md">
          <h1>
            Bienvenue {Profile.firstname} {Profile.lastname}
          </h1>
          </div>
        </div>
        <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
      </section>
    </>
  )
};

export default UserAccount;