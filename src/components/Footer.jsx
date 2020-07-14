import React from 'react';
import '../App.css';
import Geekoss from '../img/geekoss-logo-blank.png';
import facebook from '../img/Facebook-blc.png';
import twitter from '../img/Twitter-blc.png';
import instagram from '../img/Intsagram-blc.png';
import pinterest from '../img/Pinterest-blc.png';
import love from '../img/love.png';

const Footer = () => {
  return (
    <footer class="page-footer font-small stylish-color-dark pt-4">
      <div class="container text-center text-md-left">
          <div class="row">
              <div class="col-md-6 mx-auto">
                  <div>
                      <img id="img-footer-xs" src="img/geekoss-logo-sm.png" alt="Logo Geeokoss"/>
                  </div>
                  <div>
                      <ul class="list-unstyled">
                          <li><a href="#!">Mon profil</a></li>
                          <li><a href="#!">Centre d'aide</a></li>
                          <li><a href="#!">A propos de Geekoss</a></li>
                      </ul>
                  </div>
                  <div>
                      <img id="img-footer-lg" src={Geekoss} alt="Logo Geeokoss"/>
                  </div>
              </div>
              <div class="col-md-6 mx-auto">
                  <div>
                      <ul class="list-unstyled">
                          <li><a href="mentions-legales.html">Mentions légales</a></li>
                          <li><a href="rgpd.html">Politiques de confidentialité</a></li>
                          <li><a href="contact.html">Nous contacter</a></li>
                      </ul>
                  </div>
                  <div class="row social-media">
                      <a href="#"><img src={facebook} class="social" alt="Suivez-nous sur Facebook"/></a>
                      <a href="#"><img src={twitter} class="social" alt="Suivez-nous sur Twitter"/></a>
                      <a href="#"><img src={instagram} class="social" alt="Suivez-nous sur Instagram"/></a>
                      <a href="#"><img src={pinterest} class="social" alt="Suivez-nous sur Pinterest"/></a>
                  </div>
              </div>
          </div>
      </div>
      <hr/>
      <div class="footer-copyright text-center py-3">
          <p>© 2020 | Made with <img src={love} class="love" alt="love"/> by <a href="https://www.linkedin.com/in/thomas-lachieze-b96b73103/" target="_blank">Groovibaby</a></p>
      </div>
  </footer>
  )
};

export default Footer;