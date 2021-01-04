import React, { lazy, Suspense, useEffect } from "react";
import useNearScreen from "hooks/useNearScreen";

const distance = "400px";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance, once: "true" });

  return (
    <Suspense fallback={"Cargando..."}>
      {/**O null**/}
      <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
    </Suspense>
  );
};

export default React.memo(LazyTrending);
