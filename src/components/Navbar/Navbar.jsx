import React from "react";
import styles from "./Navbar.module.scss";

import FilterList from "../FilterList";
import SearchBox from "../SearchBox";

function Navbar() {
  return (
    <div>
      <SearchBox />
      <FilterList />
    </div>
  );
}

export default Navbar;
