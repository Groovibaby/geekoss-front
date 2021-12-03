import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "./AddOffer.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CategoriesOffer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/categories`)
      .then((response) => response.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      {categories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </>
  );
};

export default CategoriesOffer;
