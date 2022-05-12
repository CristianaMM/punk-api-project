import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

import FilterList from "../FilterList";
import SearchBox from "../SearchBox";
import { useWindowSize } from "../../hooks/useWindowSize";

function Navbar(props) {
  const { updateSearchText, setIsClassic, setIsHighAlcohol } = props;
  const size = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(size.width >= 768);
  }, [size]);

  return (
    <>
      <input
        type="checkbox"
        className={styles.toggler}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className={styles.hamburguer}>
        <div></div>
      </div>
      {isSidebarOpen && (
        <div className={styles.navbar}>
          <h1>Punk API</h1>
          <SearchBox updateSearchText={updateSearchText} />
          <FilterList
            setIsClassic={setIsClassic}
            setIsHighAlcohol={setIsHighAlcohol}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
