import React from "react";
import styles from "./BeerModal.module.scss";

function BeerModal({ beer, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}></div>
        <div className={styles.image}>
          <img src={beer.image_url} alt="" />
        </div>
        <div className={styles.info}>
          <h1>{beer.name}</h1>
          <p className={styles.description}>{beer.description}</p>
          <div className={styles.hr}></div>
          <p className={styles.details}>
            <b>ABV: </b>
            {beer.abv}
          </p>
          <p className={styles.details}>
            <b>PH: </b>
            {beer.ph}
          </p>
          <p className={styles.details}>
            <b>Goes well with: </b>
            {beer.food_pairing.join(", ")}
          </p>
          <p className={styles.details}>
            <b>Brewer's tips: </b>
            {beer.brewers_tips}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeerModal;
