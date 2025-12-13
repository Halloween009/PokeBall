import React, { useState } from "react";
import ball from "../assets/ball.svg";

const PokeballPage = () => {
  const [monster, setPokemon] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [message, setMessage] = useState("");

  const huntPoke = async () => {
    const randomNum = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    const data = await response.json();
    setPokemon(data);
  };

  const [caughtPokemon, setCaughtPokemon] = useState(() => {
    const saved = localStorage.getItem("caughtPokemons");
    return saved ? JSON.parse(saved) : [];
  });

  const throwPokeball = () => {
    setAnimating(true);

    // Рандом: 0 или 1
    const yesOrNo = Math.floor(Math.random() * 2);
    const caught = yesOrNo === 1;
    setTimeout(() => {
      if (caught) {
        setMessage("Успех! Покемон пойман!");
        const caughtPoke = [...caughtPokemon, monster];
        setCaughtPokemon(caughtPoke);
        localStorage.setItem("caughtPokemons", JSON.stringify(caughtPoke));
      } else {
        setMessage("Покемон убежал!");
      }
    }, 4000);
  };

  const returnBack = () => {
    setAnimating(false);
    setPokemon(null);
    setMessage(null);
  };

  return (
    <div className="pokeballContainer">
      <img
        src={ball}
        alt="pokeball"
        className={`pokeballImg ${animating ? "throw" : ""}`}
      />
      {!monster && (
        <button className="huntBtn" onClick={huntPoke}>
          Охотиться за покемонами
        </button>
      )}
      {monster && (
        <div className="pokemonCard">
          <h2 className="pokemonName">{monster.name}</h2>
          <img
            className="pokemonImg"
            src={monster.sprites.front_default}
            alt="pokemonImg"
          ></img>
          <button className="catchBtn" onClick={throwPokeball}>
            Кинуть покебол
          </button>
          <button className="returnBtn" onClick={returnBack}>
            Вернуться
          </button>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default PokeballPage;
