import React from 'react';
import '../App.css';
import './Signup.css';

const Signup = () => {
  return (
    <section id="signup">
      <div class="col-12">
        <h2>Je m'inscris direct !</h2>
        <div class="container-md">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="name" placeholder="Pseudo de Geekoss"/>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email"/>
              </div>
            <div class="form-group">
                <input type="password" class="form-control" id="email" placeholder="Mot de passe"/>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Je m'inscris à la newsletter</label>
            </div>
            <p>En m'inscrivant je confirme avoir lu et accepté les <a href="terms.html">Termes & Conditions et Politique de confidentialité</a> de Geekoss. Je confirme avoir au moins 18 ans.</p>
            <div class="form-group">
              <button type="submit" id="send" class="btn btn-primary">Inscription</button>
            </div>
          </form>
        </div>
      </div>
      <p class="d-flex justify-content-center"><a href="#">C'est compliqué, aidez-moi !</a></p>
    </section>
  )
};

export default Signup;