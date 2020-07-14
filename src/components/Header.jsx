import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Geekoss from '../img/geekoss-logo-blank.png';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-blue">
        <div class="container">
          <a href="index.html" class="navbar-brand"><img src={Geekoss} class="img-brand" alt="Bienvenue sur Geekoss" /></a>
          <div>
            <button class="navbar-toggler burger-button" data-toggle="collapse" data-target="#navbarMenu">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <a href="add-pick.html" class="hidden-sm"><button type="button" class="btn btn-header">Déposer une annonce</button></a>
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