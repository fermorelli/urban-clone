import { Route, Routes } from "react-router-dom";
import { DictionaryProvider } from "./context/DictionaryContext";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

function App() {
  return (
    <div>
      <DictionaryProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </DictionaryProvider>
    </div>
  );
}

export default App;
