import React, { useState } from "react";
import styles from "./Main.module.scss";

import CardList from "../../components/CardList";
import BeerModal from "../../components/BeerModal/BeerModal";

function Main({ beers, loading }) {
  const [selectedBeer, setSelectedBeer] = useState(null);

  const contentJsx = beers.length ? (
    <CardList beers={beers} setSelectedBeer={(beer) => setSelectedBeer(beer)} />
  ) : (
    <div>
      <h2>No matches</h2>
    </div>
  );

  return (
    <div className={styles.list}>
      {loading && (
        <div class={styles.ring}>
          Loading
          <span></span>
        </div>
      )}
      {!loading && contentJsx}
      {selectedBeer && (
        <BeerModal beer={selectedBeer} onClose={() => setSelectedBeer(null)} />
      )}
    </div>
  );
}

export default Main;
