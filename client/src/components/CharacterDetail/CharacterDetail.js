import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./CharacterDetail.module.css";
import backIcon from "../../img/arrow-left-solid.svg";
import { removeCharacter } from "../../redux/actions";

function CharacterDetail() {
  let { characterID } = useParams();
  const characters = useSelector((state) => state);
  const dispatch = useDispatch();

  let char = characters.find((char) => char.id === +characterID);

  if (!char) return <div>Character aun no cargado</div>;

  return (
    <div className={styles.CharacterDetail}>
      <div className={styles.title}>
        <h2>Character detail:</h2>
        <div className={styles.buttons}>
          <Link to="/">
            <button className={styles.btnBack}>
              <img src={backIcon} alt="" />
            </button>
          </Link>
          <Link to="/">
            <button onClick={() => dispatch(removeCharacter(char.id))}>
              X
            </button>
          </Link>
        </div>
      </div>
      <h2>
        {char.id}. {char.name}
      </h2>
      <div className={styles.container}>
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`}
          alt={`${char.name} img`}
          title={`${char.name}`}
        ></img>
        <div>
          <h4>{char.name} info:</h4>
          <p>Status: {char.status}</p>
          <p>Species: {char.species}</p>
          <p>Gender: {char.gender}</p>
          <p>Origin: {char.origin.name}</p>
          <p>Location: {char.location.name}</p>
        </div>
      </div>
      <div className={styles.episodes}>
        <h3>Episodes:</h3>
        <ul>
          {char.episode.map((n) => {
            let epi = n.split("/").pop();
            return <li key={n}>{epi}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
