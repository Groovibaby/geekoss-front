import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";
import { connect } from "react-redux";
import { resetUserInfo } from "./Action/index";
import axios from "axios";
import Geekoss from "../img/geekoss-logo-blank.png";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Header = ({ dispatch }) => {
  const { setAuthData, auth } = useContext(authContext);
  const [Profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    pseudo: "",
  });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    axios({
      method: "post",
      url: `${BASE_URL}/api/auth`,
      headers: {
        Authorization: `Bearer ${auth.data}`,
      },
    })
      .then((response) => response.data)
      .then((data) => setProfile(data.authData.admin[0]));
  }, [auth.data]);

  const Logout = () => {
    setAuthData(null);
    localStorage.clear();
    dispatch(resetUserInfo());
  };

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-blue">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Geekoss}
              className="img-brand"
              alt="Bienvenue sur Geekoss"
            />
          </Link>
          <div>
            <button
              className="navbar-toggler burger-button"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {!auth.data ? (
            <Link className="hidden-sm" to="/login">
              <button type="button" className="btn btn-header">
                Déposer une annonce
              </button>
            </Link>
          ) : (
            <Link className="hidden-sm" to="/add-offer">
              <button type="button" className="btn btn-header">
                Déposer une annonce
              </button>
            </Link>
          )}
          {!auth.data ? (
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav ml-auto">
                <li className="subscribe">
                  <Link className="nav-link" id="sub-link" to="/signup">
                    S'inscrire
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Se connecter
                  </Link>
                </li>
                <li className="nav-item hidden">
                  <a href="contact.html" className="nav-link">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarMenu">
              <div className="navbar-nav ml-auto">
                <div
                  className="Favorites"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  <Link to="/add-offer">
                    <span
                      className={isHover ? "fas fa-heart" : "far fa-heart"}
                    />
                    <div>Favoris</div>
                  </Link>
                </div>
                <div className="NavConnect">
                  <div className="Favorites">
                    <Link to="/user-account">
                      <span className="fas fa-user-astronaut" />
                      <div className="User-Name">Salut {Profile.pseudo}</div>
                    </Link>
                  </div>
                  <div
                    className="Disconnect"
                    role="button"
                    tabIndex={0}
                    onClick={Logout}
                  >
                    <span className="fas fa-power-off" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default connect()(Header);
