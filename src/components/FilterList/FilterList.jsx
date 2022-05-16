import React from "react";
import styles from "./FilterList.module.scss";

import FilterItem from "../FilterItem";

function FilterList(props) {
  const { setIsClassic, setIsHighAlcohol } = props;

  return (
    <div className={styles.container}>
      <FilterItem label="High ABV (>6.0%)" onChange={setIsHighAlcohol} />
      <FilterItem label="Classic Range" onChange={setIsClassic} />
    </div>
  );
}

export default FilterList;
