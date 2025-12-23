import React from "react";
import pokeLogo from "../assets/pokeLogo.png";

const Header = ({ setCurrentPage, currentPage }) => {
  return (
    <header>
      <h1>
        <img className="pokeLogo" src={pokeLogo} alt="logo" />
      </h1>
      {currentPage === "pokeball" && (
        <button onClick={() => setCurrentPage("home")}>
          Коллекция покемонов
        </button>
      )}
      {currentPage === "home" && (
        <button onClick={() => setCurrentPage("pokeball")}>Назад</button>
      )}
    </header>
  );
};

export default Header;
