import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (input) {
      let parse = input.split(",");
      parse = parse.map((n) => +n);
      dispatch(getCharacters(parse));
    }
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={input}
          type="text"
          placeholder="Search by ID..."
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SearchBar;
