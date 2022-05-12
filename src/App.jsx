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

  useEffect(() => {
    setLoading(true);
    getBeers(searchText, isClassic, isHighAlcohol).then((res) => {
      setTimeout(() => {
        setBeers(res);
        setLoading(false);
      }, 250);
    });
  }, [isClassic, isHighAlcohol, searchText]);

  return (
    <div className={styles.app}>
      <Navbar
        updateSearchText={setSearchText}
        setIsClassic={setIsClassic}
        setIsHighAlcohol={setIsHighAlcohol}
      />
      <Main beers={beers} loading={loading} />
    </div>
  );
}

export default App;
