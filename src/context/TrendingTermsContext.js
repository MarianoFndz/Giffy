import React, { createContext, useState } from "react";

const Context = createContext({});

export function TrendingTermsProvider({ children }) {
  const [trendingTerms, setTrendingTerms] = useState([]);

  return (
    <Context.Provider value={{ trendingTerms, setTrendingTerms }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
