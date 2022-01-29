import React from "react";
import { useDispatch } from "react-redux";
import { removeAll, getCharacters } from "../../redux/actions";
import Characters from "../Characters/Characters";
import SearchBar from "../SearchBar/SearchBar";
function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      Home component
      <SearchBar />
      <button onClick={() => dispatch(removeAll())}>Remove All</button>
      <button onClick={() => dispatch(getCharacters())}>Get Random</button>
      <Characters />
    </div>
  );
}

export default Home;
