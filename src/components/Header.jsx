import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Geekoss from '../img/geekoss-logo-blank.png';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-blue">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src={Geekoss} class="img-brand" alt="Bienvenue sur Geekoss" />
          </Link>
          <div>
            <button class="navbar-toggler burger-button" data-toggle="collapse" data-target="#navbarMenu">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <Link class="hidden-sm" to="/add-offer">
            <button type="button" class="btn btn-header">Déposer une annonce</button>
          </Link>
          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav ml-auto">
              <li class="subscribe">
                <Link class="nav-link" id="sub-link" to="/signup">
                  S'inscrire
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Se connecter
                </Link>
              </li>
              <li class="nav-item hidden">
                <a href="contact.html" class="nav-link">Nous contacter</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;