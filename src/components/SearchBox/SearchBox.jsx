import React from "react";
import styles from "./SearchBox.module.scss";

function Searchbox() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default Searchbox;
