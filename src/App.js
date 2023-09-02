import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import UnderNav from "./components/UnderNav";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
        <Route path="skills" element={<Skills />}>
          {" "}
        </Route>{" "}
        <Route path="/Projects" element={<Projects />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
      <UnderNav />{" "}
    </div>
  );
}

export default App;
