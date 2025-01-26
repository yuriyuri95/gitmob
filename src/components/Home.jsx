import { Routes, Route, Navigate } from "react-router";
import HomeNave from "./HomeNave";
import Djezzy from "./Djezzy";
import Mobilis from "./Mobilis";
import Ooredoo from "./Ooredoo";

function Home() {
  return (
    <div>
      <HomeNave />
      <Routes>
        <Route path="/" element={<Navigate to={"/mobilis"} />} />
        <Route path="/mobilis" element={<Mobilis />} />
        <Route path="/djezzy" element={<Djezzy />} />
        <Route path="/ooredoo" element={<Ooredoo />} />
      </Routes>
    </div>
  );
}

export default Home;
