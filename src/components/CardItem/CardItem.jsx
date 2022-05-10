import React from "react";
import styles from "./CardItem.module.scss";

function CardItem({ beer, setSelectedBeer }) {
  return (
    <div className={styles.container} onClick={() => setSelectedBeer(beer)}>
      <div className={styles.inner}>
        <img src={beer.image_url} alt="" />
        <h2>{beer.name}</h2>
        <div className={styles.description}>
          <p>{beer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
