import React from "react";
import styles from "./FilterItem.module.scss";

function FilterItem(props) {
  const { label, onChange } = props;

  const handleClick = (input) => {
    onChange(input.target.checked);
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type="checkbox" onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default FilterItem;
