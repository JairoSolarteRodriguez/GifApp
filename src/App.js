// import React, { useState } from 'react';
import { Link, Route } from "wouter";

import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import Context from "./context/StaticContext";

import "./App.css";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  // const [keyword, setKeyword] = useState('panda')

  return (
    <Context.Provider value={{}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">Logo</Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
