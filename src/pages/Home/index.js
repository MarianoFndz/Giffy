import React from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGif";
import "./styles.css";
import TrendingSearches from "components/TrendingSearches";

const Home = () => {
  const { loading, gifs } = useGifs();

  return (
    <>
      <div className="Container-Results">
        <TrendingSearches />
        <div className="Container-Gifs">
          <h3>Ultima Busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
      </div>
    </>
  );
};

export default Home;
