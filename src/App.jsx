import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";

import Navbar from "./components/Navbar";
import Main from "./containers/Main";

import getBeers from "./services/beer.service";

function App() {
  const [beers, setBeers] = useState([]);
  const [isHighAlcohol, setIsHighAlcohol] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const request = () => {
    setLoading(true);

    getBeers(searchText, isClassic, isHighAlcohol, page).then((res) => {
      setTimeout(() => {
        setBeers(res);
        setLoading(false);
      }, 250);
    });
  };

  useEffect(() => {
    setPage(1);
    request();
  }, [isClassic, isHighAlcohol, searchText]);

  useEffect(() => {
    request();
  }, [page]);

  return (
    <div className={styles.app}>
      <Navbar
        updateSearchText={setSearchText}
        setIsClassic={setIsClassic}
        setIsHighAlcohol={setIsHighAlcohol}
      />
      <Main beers={beers} loading={loading} setPage={setPage} page={page} />
    </div>
  );
}

export default App;
