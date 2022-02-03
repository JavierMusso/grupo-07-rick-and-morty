import React from "react";
import { useDispatch } from "react-redux";
import { removeAll, getCharacters, buildPages } from "../../redux/actions";
import Characters from "../Characters/Characters";
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();

  async function getRandom() {
    await dispatch(getCharacters());
    dispatch(buildPages());
  }
  return (
    <div className={styles.Home}>
      <h1>
        Welcome to <span>Rick and Morty</span>'s app!
      </h1>
      <h2>Get info on characters and episodes.</h2>

      <div className={styles.container}>
        <button
          onClick={() => {
            dispatch(removeAll());
            dispatch(buildPages());
          }}
        >
          Remove All
        </button>
        <button onClick={getRandom}>Get Random</button>
      </div>
      <Characters />
    </div>
  );
}

export default Home;
