import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="h-screen bg-gray-500">
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
