import React, { useState } from "react";
import Character from "../Character/Character";
import { useSelector } from "react-redux";
import styles from "./Characters.module.css";
import leftIcon from "../../img/chevron-left-solid.svg";
import rightIcon from "../../img/chevron-right-solid.svg";

function Characters() {
  const characters = useSelector((state) => state.characters);
  const pages = useSelector((state) => state.pages);
  const [current, setCurrent] = useState(0);
  console.log(pages, "current", current);

  /* const [currentPage, setCurrentPage] = useState(0);

  let nPages = Math.ceil(characters.length / 6);
  let Pages = [];

  for (let i = 0; i < nPages; i++) {
    Pages.push([...characters.slice(i * 6, (i + 1) * 6)]);
  }

  const [pageContent, setPageContent] = useState(Pages[0]);

  console.log(currentPage);
  console.log(pageContent); */

  const changeCurrent = (str) => {
    switch (str) {
      case "right":
        current < pages.length - 1 && setCurrent(current + 1);
        break;
      case "left":
        current > 0 && setCurrent(current - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.Characters}>
      <div className={styles.container}>
        {!characters.length && "No characters to show"}
        {pages.length > 0 &&
          pages[current].map((char) => <Character key={char.id} char={char} />)}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => changeCurrent("left")}>
          <img src={leftIcon} alt="left" />
        </button>
        {
          //mapear la cantidad de paginas..
          pages.map((page, i) => (
            <button
              className={i === current && styles.current}
              onClick={() => setCurrent(i)}
              key={i + 1}
            >
              {i + 1}
            </button>
          ))
        }
        <button onClick={() => changeCurrent("right")}>
          <img src={rightIcon} alt="right" />
        </button>
      </div>
    </div>
  );
}

export default Characters;
