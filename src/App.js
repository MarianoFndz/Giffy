import React, { Suspense, useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route, Link } from "wouter";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import { TrendingTermsProvider } from "context/TrendingTermsContext";
import SearchGifs from "components/SearchGifs";
import { pushLocation } from "react";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <StaticContext.Provider value={{ name: "Mariano", surname: "Fernandez" }}>
      <div className="App">
        <Suspense fallback={null}>
          <Link to="/">
            <h2 className="Logo">Giffy</h2>
          </Link>
          <SearchGifs />
          <section className="App-content">
            <GifsContextProvider>
              <TrendingTermsProvider>
                <Route component={HomePage} path="/" />
              </TrendingTermsProvider>
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
