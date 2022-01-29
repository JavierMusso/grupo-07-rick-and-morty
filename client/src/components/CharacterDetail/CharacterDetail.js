import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  let { characterID } = useParams();
  const characters = useSelector((state) => state);

  let char = characters.find((char) => char.id === +characterID);

  if (!char) return <div>Character aun no cargado</div>;

  return (
    <div>
      CharacterDetail component
      <p>
        {char.id}. {char.name}
      </p>
      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`}
        alt={`${char.name} img`}
        title={`${char.name}`}
      ></img>
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
