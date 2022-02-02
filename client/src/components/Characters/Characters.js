import React from "react";
import Character from "../Character/Character";
import { useSelector } from "react-redux";
import styles from "./Characters.module.css";

function Characters() {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={styles.Characters}>
      <div className={styles.container}>
        {!characters.length && "No characters to show"}
        {characters.map((char) => (
          <Character key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
