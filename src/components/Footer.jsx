import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Geekoss from "../img/geekoss-logo-blank.png";
import facebook from "../img/Facebook-blc.png";
import twitter from "../img/Twitter-blc.png";
import instagram from "../img/Intsagram-blc.png";
import pinterest from "../img/Pinterest-blc.png";
import love from "../img/love.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="page-footer font-small stylish-color-dark pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div>
              <img
                id="img-footer-xs"
                src="img/geekoss-logo-sm.png"
                alt="Logo Geeokoss"
              />
            </div>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="/user-account">Mon profil</Link>
                </li>
                <li>
                  <a href="#!">Centre d'aide</a>
                </li>
                <li>
                  <a href="#!">A propos de Geekoss</a>
                </li>
              </ul>
            </div>
            <div>
              <img id="img-footer-lg" src={Geekoss} alt="Logo Geeokoss" />
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="/legal-notice">Mentions légales</Link>
                </li>
                <li>
                  <a href="rgpd.html">Politiques de confidentialité</a>
                </li>
                <li>
                  <a href="contact.html">Nous contacter</a>
                </li>
              </ul>
            </div>
            <div className="row social-media">
              <a href="www.google.fr">
                <img
                  src={facebook}
                  className="social"
                  alt="Suivez-nous sur Facebook"
                />
              </a>
              <a href="www.google.fr">
                <img
                  src={twitter}
                  className="social"
                  alt="Suivez-nous sur Twitter"
                />
              </a>
              <a href="www.google.fr">
                <img
                  src={instagram}
                  className="social"
                  alt="Suivez-nous sur Instagram"
                />
              </a>
              <a href="www.google.fr">
                <img
                  src={pinterest}
                  className="social"
                  alt="Suivez-nous sur Pinterest"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright text-center py-3">
        <p>
          © {currentYear} | Made with{" "}
          <img src={love} className="love" alt="love" /> by{" "}
          <a
            href="https://www.linkedin.com/in/thomas-lachieze-b96b73103/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Groovibaby
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
