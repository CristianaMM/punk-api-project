import React from "react";
import styles from "./FilterList.module.scss";

import FilterItem from "../FilterItem";

function FilterList() {
  return (
    <div className={styles.container}>
      <FilterItem label="High ABV (>6.0%)" />
      <FilterItem label="Classic Range" />
      <FilterItem label="Acidic (ph < 4)" />
    </div>
  );
}

export default FilterList;
