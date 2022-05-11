import React from "react";
import styles from "./SearchBox.module.scss";

function Searchbox({ updateSearchText }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => updateSearchText(e.target.value)}
      />
    </div>
  );
}

export default Searchbox;
