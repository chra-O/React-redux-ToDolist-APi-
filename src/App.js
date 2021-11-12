import Navbar from "./Component/NavbarSection";
import ToDo from "./Pages/ToDo";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DogApi from "./Pages/DogApi";
import SignUp from "./Component/SignUp"

import Information from "./Component/Information"

function App() {
 

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="DogApi" element={<DogApi />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="Information" element={<Information />} />
      </Routes>
      <footer> </footer>
    </div>
  );
}

export default App;
