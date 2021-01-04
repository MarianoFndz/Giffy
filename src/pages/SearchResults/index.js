import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGif";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
    distance: "300px",
  });
  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const debounceHandleNextPage = useCallback(
    debounce(() => {
      setPage((prevPage) => prevPage + 1);
    }, 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
};

export default React.memo(SearchResults);
