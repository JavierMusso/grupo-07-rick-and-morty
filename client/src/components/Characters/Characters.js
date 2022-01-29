import React from "react";
import Character from "../Character/Character";
import { useSelector } from "react-redux";

function Characters() {
  const state = useSelector((state) => state);

  return (
    <div>
      Characters component
      <div>
        {!state.length && "No characters to show"}
        {state.map((char) => (
          <Character key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
