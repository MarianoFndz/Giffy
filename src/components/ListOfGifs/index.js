import React, { useEffect } from "react";
import Gif from "../Gif";
import "./styles.css";
const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map((singleGif) => (
        <Gif gif={singleGif} key={singleGif.id} />
      ))}
    </div>
  );
};

export default ListOfGifs;
