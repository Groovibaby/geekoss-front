import React from "react";
import "../../App.css";
import FavoritesList from "./FavoritesList";

const Favorites = () => {
  return (
    <>
      <section id="signup">
        <div className="container">
          <h1>Vos annonces favories</h1>
          <div className="row">
            <FavoritesList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
