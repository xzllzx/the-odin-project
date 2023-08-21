import { useState } from "react";
import { GenerateMultipleCards, Card } from "./Card";

function Gameboard({ selectedCards }) {
  const [pokemon, setPokemon] = useState("mew");

  return (
    <div className="gameboard">
      <GenerateMultipleCards numCards={12} />
      <Card pokemonName={pokemon} />
    </div>
  );
}

export { Gameboard };
