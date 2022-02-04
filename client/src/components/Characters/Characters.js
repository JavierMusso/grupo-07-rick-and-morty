import Character from "../Character/Character";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Characters.module.css";
import leftIcon from "../../img/chevron-left-solid.svg";
import rightIcon from "../../img/chevron-right-solid.svg";
import { setCurrent } from "../../redux/actions";

function Characters() {
  const dispatch = useDispatch();
  const { characters, pages, current } = useSelector((state) => state);

  const changeCurrent = (str) => {
    switch (str) {
      case "right":
        current < pages.length - 1 && dispatch(setCurrent(current + 1));
        break;
      case "left":
        current > 0 && dispatch(setCurrent(current - 1));
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
              onClick={() => dispatch(setCurrent(i))}
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
