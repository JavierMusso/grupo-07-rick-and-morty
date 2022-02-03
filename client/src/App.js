import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar.js";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.js";
import Edit from "./components/Edit/Edit.js";
import About from "./components/About/About.js";
import { useDispatch } from "react-redux";
import { getCharacters, buildPages } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // hago el dispatch que trae los 6 personajes random cuando se monta el componente App
  useEffect(() => {
    test();
  });

  async function test() {
    await dispatch(getCharacters());
    dispatch(buildPages());
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterID" element={<CharacterDetail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
