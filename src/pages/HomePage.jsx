import React, { useState, useEffect } from "react";
import CardModal from "../components/CardInfo";

function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("caughtPokemons");
    if (data) {
      const caughtPokemons = JSON.parse(data);
      setPokemons(caughtPokemons);
    }
  }, []);

  const handlerClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="cardContainer">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemonCardInfo"
          onClick={() => handlerClick(pokemon)}
        >
          <img
            className="pokemonImg"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          ></img>
          <h3>{pokemon.name}</h3>
        </div>
      ))}
      {isModalOpen && selectedPokemon && (
        <CardModal pokemon={selectedPokemon} onClose={closeModal} />
      )}
    </div>
  );
}

export default HomePage;
