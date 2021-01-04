import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";

const SearchGifs = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        className="Search"
      />
      <button className="ButtonSearch">Buscar</button>
    </form>
  );
};

export default SearchGifs;
