import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Category = ({ name, options = [] }) => {
  return (
    <div className="Category-Container">
      <h3 className="Container-Title">{name}</h3>
      <ul className="Category-ul">
        {options.map((singleOption) => (
          <li key={singleOption} className="Category-li">
            <Link to={`/search/${singleOption}`} className="Category-Link">
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
