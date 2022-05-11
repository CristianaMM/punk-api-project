import React from "react";
import styles from "./CardList.module.scss";
import CardItem from "../CardItem";

function CardList({ beers, setSelectedBeer }) {
  return (
    <div className={styles.container}>
      {beers.map((beer) => (
        <CardItem
          key={beer.id}
          beer={beer}
          setSelectedBeer={setSelectedBeer}
        ></CardItem>
      ))}
    </div>
  );
}

export default CardList;
