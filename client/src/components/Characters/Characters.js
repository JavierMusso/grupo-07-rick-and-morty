import React from "react";
import Character from "../Character/Character";
import { useSelector } from "react-redux";
import styles from "./Characters.module.css";

function Characters() {
  const state = useSelector((state) => state);

  return (
    <div className={styles.Characters}>
      <div className={styles.container}>
        {!state.length && "No characters to show"}
        {state.map((char) => (
          <Character key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
