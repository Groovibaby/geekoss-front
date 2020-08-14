import React, { useEffect, useState } from "react";
// import { authContext } from "../contexts/AuthContext";
import { connect } from "react-redux";
// import setUserInfo from "../Action/index";
import axios from "axios";
import FavoritesItem from "./FavoritesItem";

const FavoritesList = ({ dispatch, informations }) => {
  // const { auth } = useContext(authContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/api/auth",
    //   headers: {
    //     Authorization: `Bearer ${auth.data}`,
    //   },
    // }).then((res) => {
    //   dispatch(setUserInfo(res.data.authData.admin[0]));
    // });
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
