import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Character from "../Character/Character";

function CharacterDetail() {
  let { characterID } = useParams();
  const characters = useSelector((state) => state);

  let char = characters.find((char) => char.id === +characterID);

  return (
    <div>
      CharacterDetail component
      <Character char={char} />
      <p>Mas info del personaje</p>
      <p>Status: {char.status}</p>
      <p>Species: {char.species}</p>
      <p>Gender: {char.gender}</p>
      <p>Origin: {char.origin.name}</p>
      <p>Location: {char.location.name}</p>
      <p>Episodes:</p>
      <ul>
        {char.episode.map((n) => {
          let epi = n.split("/").pop();
          return <li key={n}>{epi}</li>;
        })}
      </ul>
    </div>
  );
}

export default CharacterDetail;
