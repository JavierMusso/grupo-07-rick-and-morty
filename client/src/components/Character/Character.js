import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCharacter } from "../../redux/actions";

function Character({ char }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeCharacter(char.id));
  };

  return (
    <div>
      <Link to="/">
        <button onClick={onClick}>X</button>
      </Link>
      <Link to={`/character/${char.id}`}>
        <p>
          {char.id}. {char.name}
        </p>
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`}
          alt={`${char.name} img`}
          title={`${char.name}`}
        ></img>
      </Link>
    </div>
  );
}

export default Character;
