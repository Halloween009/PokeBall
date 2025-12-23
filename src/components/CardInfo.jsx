import React from "react";

function CardInfo({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="pokemonInfo" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>
          Type: {pokemon.types?.map((t) => t.type.name).join(", ") || "Unknown"}
        </p>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
      </div>
    </div>
  );
}

export default CardInfo;
