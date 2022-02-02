import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacterFromSearch,
  getCharacters,
  getCharactersFiltered,
} from "../../redux/actions";
import styles from "./SearchBar.module.css";
import searchIcon from "../../img/search-icon.svg";
import { Link } from "react-router-dom";

function SearchBar() {
  const filteredResults = useSelector((state) => state.filteredResults);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  // debug
  let filters = ["name"];

  function onSubmit(e) {
    e.preventDefault();

    if (input) {
      /* let parse = input.split(",");
      parse = parse.map((n) => +n);

      if (parse) dispatch(getCharacters(parse)); */
      dispatch(getCharactersFiltered(input, filters));
      setShowResult(true);
    }
  }

  const resultClick = (char) => {
    setInput("");
    setShowResult(false);
    dispatch(addCharacterFromSearch(char));
  };

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className={styles.input}
          value={input}
          type="text"
          placeholder="Name or ID..."
          onChange={(e) => {
            setInput(e.target.value);
            setShowResult(false);
          }}
        />
        <div className={styles.filteredResults}>
          {showResult ? (
            <div>
              <ul>
                {filteredResults.map((char) => (
                  <li key={char.id}>
                    <Link to={`/character/${char.id}`}>
                      <button onClick={() => resultClick(char)}>
                        {char.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <button type="submit" className={styles.submit}>
          <img src={searchIcon} alt="asd" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
