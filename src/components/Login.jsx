import React from 'react';
import '../App.css';
import './Signup.css';

const Login = () => {
  return (
    <section id="connect">
      <div class="col-12">
          <h2>Je me connecte !</h2>
          <div class="container-md">
              <form>
                  <div class="form-group">
                    <input type="email" class="form-control" id="name" placeholder="Pseudo de Geekoss ou Email"/>
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control" id="email" placeholder="Mot de passe"/>
                    </div>
                  <div class="form-group">
                      <button type="submit" id="send" class="btn btn-primary">Connexion</button>
                  </div>
              </form>
          </div>
      </div>
      <p class="d-flex justify-content-center"><a href="#">J'ai oublié mon mot de passe</a></p>
      <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
    </section>
  )
};

export default Login;