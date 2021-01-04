import React from "react";
import "./Gif.css";
import { Link } from "wouter";

const Gif = ({ gif }) => {
  if (!gif)
    return (
      <>
        <h3>No elegiste un gif</h3>
        <h4> Vuelva a la pagina de incio</h4>
      </>
    );

  const { title, id, url } = gif;
  return (
    <Link className="Gif" to={`/gif/${id}`}>
      <img loading="lazy" src={url} alt={title} className="Gif-img" />
    </Link>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
