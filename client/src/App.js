import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import NavBar from "./components/NavBar/NavBar.js";
import Character from "./components/Character/Character.js";
import Edit from "./components/Edit/Edit.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:characterID" element={<Character />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
