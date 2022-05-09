import React from "react";
import styles from "./Main.module.scss";

import CardList from "../../components/CardList";

function Main() {
  return (
    <div className={styles.list}>
      <CardList />
    </div>
  );
}

export default Main;
