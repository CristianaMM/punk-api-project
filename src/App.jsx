import React from "react";
import styles from "./App.module.scss";

import Navbar from "./components/Navbar";
import Main from "./containers/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
