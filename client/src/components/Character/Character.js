import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { buildPages, removeCharacter, setCurrent } from "../../redux/actions";
import styles from "./Character.module.css";

function Character({ char }) {
  const dispatch = useDispatch();
  const { pages, current } = useSelector((state) => state);

  const onClick = () => {
    dispatch(removeCharacter(char.id));
    dispatch(buildPages());
    if (pages[current].length === 1) {
      dispatch(setCurrent(current - 1));
    }
  };

  return (
    <div className={styles.Character}>
      <Link to="/" title="remove">
        <button onClick={onClick}>X</button>
      </Link>
      <div className={styles.container} title={char.name}>
        <Link to={`/character/${char.id}`}>
          <div>
            <p>
              ID: <span>{char.id}</span>
            </p>
            <h4>{char.name}</h4>
          </div>
          <img
            src={`https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`}
            alt={`${char.name} img`}
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Character;
