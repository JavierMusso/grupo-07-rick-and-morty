import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      NavBar component
      <Link to="/">Rick&Morty PI</Link>
      <Link to="/about">About Me</Link>
    </div>
  );
}

export default NavBar;
