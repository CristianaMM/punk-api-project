import React from "react";
import styles from "./Navbar.module.scss";

import FilterList from "../FilterList";
import SearchBox from "../SearchBox";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Punk API</h1>
      <SearchBox />
      <FilterList />
    </div>
  );
}

export default Navbar;
