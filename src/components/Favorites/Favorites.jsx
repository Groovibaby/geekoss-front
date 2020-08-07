import React from "react";
import "../../App.css";
import FavoritesList from "./FavoritesList";

const Favorites = () => {
  return (
    <>
      <section id="signup">
        <div className="container">
          <h1>Vos annonces favorites</h1>
          <FavoritesList />
        </div>
      </section>
    </>
  );
};

export default Favorites;
