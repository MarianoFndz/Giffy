import { useContext, useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import TrendingTermsContext from "context/TrendingTermsContext";

const useTrendingTerms = () => {
  const [loading, setLoading] = useState(false);
  const { trendingTerms, setTrendingTerms } = useContext(TrendingTermsContext);

  useEffect(() => {
    setLoading(true);
    const TrendingTermsSaved = localStorage.getItem("TrendingTerms") || null;
    if (!TrendingTermsSaved) {
      getTrendingTerms().then((response) => {
        setTrendingTerms(response);
        setLoading(false);
        localStorage.setItem("TrendingTerms", response);
      });
    } else {
      const ListOfTerms = TrendingTermsSaved.split(",");
      setTrendingTerms(ListOfTerms);
      setLoading(false);
    }
  }, [setTrendingTerms]);

  return { loading, trendingTerms };
};

export default useTrendingTerms;
