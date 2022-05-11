import React from "react";
import styles from "./Navbar.module.scss";

import FilterList from "../FilterList";
import SearchBox from "../SearchBox";

function Navbar(props) {
  const { updateSearchText, setIsClassic, setIsHighAlcohol } = props;

  return (
    <div className={styles.navbar}>
      <h1>Punk API</h1>
      <SearchBox updateSearchText={updateSearchText} />
      <FilterList
        setIsClassic={setIsClassic}
        setIsHighAlcohol={setIsHighAlcohol}
      />
    </div>
  );
}

export default Navbar;
