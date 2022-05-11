import React, { useState } from "react";
import styles from "./Main.module.scss";

import CardList from "../../components/CardList";
import BeerModal from "../../components/BeerModal/BeerModal";

import beers from "../../data/beers";

function Main() {
  const [selectedBeer, setSelectedBeer] = useState(null);

  console.log(selectedBeer);

  return (
    <div className={styles.list}>
      <CardList
        beers={beers}
        setSelectedBeer={(beer) => setSelectedBeer(beer)}
      />
      {selectedBeer && (
        <BeerModal beer={selectedBeer} onClose={() => setSelectedBeer(null)} />
      )}
    </div>
  );
}

export default Main;
