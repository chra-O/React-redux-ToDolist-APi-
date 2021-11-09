import Navbar from "./Component/NavbarSection";
import ToDo from "./Pages/ToDo";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDo" element={<ToDo />} />
      </Routes>
      <footer> </footer>
    </div>
  );
}

export default App;
