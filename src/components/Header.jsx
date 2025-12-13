import React from "react";
import pokeLogo from "../assets/pokeLogo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <img className="pokeLogo" src={pokeLogo} alt="logo" />
      </h1>
    </header>
  );
};

export default Header;
