import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar.js";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.js";
import Edit from "./components/Edit/Edit.js";
import About from "./components/About/About.js";
import { useDispatch } from "react-redux";
import { getCharacters } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // funcion para generar IDs aleatorias // ---------------------------------------

  var AmountOfCharsToShow = 3;
  var TotalChars = 826;
  const getRandomId = () => {
    return Math.floor(Math.random() * TotalChars) + 1;
  };

  var IDs = [];

  const randomIDs = () => {
    if (IDs.length < AmountOfCharsToShow) {
      let newID = getRandomId();
      if (IDs.includes(newID)) {
        randomIDs();
      } else {
        IDs.push(newID);
      }
      randomIDs();
    }
  };

  // llamo a la funcion que me genera 6 IDs aleatorias.
  randomIDs();

  // --------------------------------------- // ---------------------------------------

  // hago el dispatch que trae los 6 personajes random cuando se monta el componente App
  useEffect(() => {
    dispatch(getCharacters(IDs));
  });

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
