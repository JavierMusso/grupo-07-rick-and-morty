import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.container}>
        <Link to="/">Rick and Morty PI</Link>
        <div>
          <SearchBar />
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
