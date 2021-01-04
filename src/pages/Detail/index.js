import React from "react";
import useGlobalGifs from "hooks/useGlobalGifs";
import Gif from "components/Gif";
import "./styles.css";

const Detail = ({ params }) => {
  const gifs = useGlobalGifs();
  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  return (
    <div className="Container-Detail">
      <Gif gif={gif} />
    </div>
  );
};

export default Detail;
