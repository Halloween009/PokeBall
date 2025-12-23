import "./App.css";
import { useState } from "react";
import PokeballPage from "./pages/PokeballPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import bgImage from "./assets/background.png";

function App() {
  const [currentPage, setCurrentPage] = useState("pokeball");

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === "home" ? <HomePage /> : <PokeballPage />}
    </div>
  );
}

export default App;
