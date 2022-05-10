import React from "react";
import styles from "./FilterItem.module.scss";

function FilterItem(props) {
  const { label } = props;

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type="checkbox" />
    </div>
  );
}

export default FilterItem;
