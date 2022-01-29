import React from "react";
import Characters from "../Characters/Characters";
import SearchBar from "../SearchBar/SearchBar";

function Home({ IDs }) {
  return (
    <div>
      Home component
      <SearchBar />
      <Characters />
    </div>
  );
}

export default Home;
