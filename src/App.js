import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="/Projects" element={<Projects />}></Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
