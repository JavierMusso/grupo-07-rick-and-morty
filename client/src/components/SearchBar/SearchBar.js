import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../redux/actions";
import styles from "./SearchBar.module.css";
import searchIcon from "../../img/search-icon.svg";

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (input) {
      let parse = input.split(",");
      parse = parse.map((n) => +n);

      if (parse) dispatch(getCharacters(parse));
    }
    setInput("");
  }

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className={styles.input}
          value={input}
          type="text"
          placeholder="Search by ID..."
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <input
          className={styles.submit}
          type="submit"
          value={<img src="../../img/search-icon.svg" />}
        /> */}
        <button type="submit" className={styles.submit}>
          <img src={searchIcon} alt="asd" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
