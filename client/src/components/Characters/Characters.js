import Character from "../Character/Character";
import { useSelector } from "react-redux";
import styles from "./Characters.module.css";
import PaginationBar from "../PaginationBar/PaginationBar";

function Characters() {
  const { characters, pages, current } = useSelector((state) => state);

  return (
    <div className={styles.Characters}>
      <div className={styles.container}>
        {!characters.length && "No characters to show"}
        {pages.length > 0 &&
          pages[current].map((char) => <Character key={char.id} char={char} />)}
      </div>
      <PaginationBar />
    </div>
  );
}

export default Characters;
