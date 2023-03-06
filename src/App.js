import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
