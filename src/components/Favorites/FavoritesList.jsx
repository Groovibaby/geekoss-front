import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import FavoritesItem from "./FavoritesItem";

const FavoritesList = ({ informations }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/favorites/${informations.id}`)
      .then((response) => response.data)
      .then((data) => setInfo(data));
  });

  return (
    <>
      {info.map((item) => (
        <FavoritesItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          photo={item.photo1}
          user={item.user_id}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  informations: state.SetInfoUserRedux.inputs,
});

export default connect(mapStateToProps)(FavoritesList);
