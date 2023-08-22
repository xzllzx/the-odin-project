import { useState } from "react";
import { GenerateMultipleCards, Card } from "./Card";

function Gameboard() {
  const pokemonList = [
    "arceus",
    "mewtwo",
    "slaking",
    "zacian",
    "rayquaza",
    "lugia",
    "palkia",
    "dialga",
    "kyurem",
    "eternatus",
    "xerneas",
    "yveltal",
  ];

  return (
    <div className="gameboard">
      <GenerateMultipleCards pokemonList={pokemonList} />
    </div>
  );
}

export { Gameboard };
