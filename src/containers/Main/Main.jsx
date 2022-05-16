import React, { useState } from "react";
import styles from "./Main.module.scss";

import CardList from "../../components/CardList";
import BeerModal from "../../components/BeerModal/BeerModal";
import { useWindowSize } from "../../hooks/useWindowSize";

function Main({ beers, loading, setPage, page }) {
  const [selectedBeer, setSelectedBeer] = useState(null);
  const size = useWindowSize();

  const contentJsx = beers.length ? (
    <>
      {size.width < 768 && <h1 className={styles.title}>Punk API</h1>}
      <CardList beers={beers} setSelectedBeer={setSelectedBeer} />
      <div className={styles.pagination}>
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  ) : (
    <div>
      <h2>No matches</h2>
    </div>
  );

  return (
    <div className={styles.list}>
      {loading && (
        <div className={styles.ring}>
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
