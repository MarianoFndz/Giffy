import React from "react";
import Category from "components/Category";
import useTrendingTerms from "hooks/useTrendingTerms";

const TrendingSearches = () => {
  const { loading, trendingTerms } = useTrendingTerms();

  return loading ? (
    <h2>Cargando</h2>
  ) : (
    <>
      <Category name="Tendencias" options={trendingTerms} />
    </>
  );
};

export default TrendingSearches;
