import { useState } from "react";
import { GenerateMultipleCards, Card } from "./Card";
import { genRandomArray } from "../utils";

function Gameboard() {
  const randomArray = genRandomArray(12);

  const pokemonObject = {
    0: "arceus",
    1: "mewtwo",
    2: "slaking",
    3: "zacian",
    4: "rayquaza",
    5: "lugia",
    6: "palkia",
    7: "dialga",
    8: "kyurem",
    9: "eternatus",
    10: "xerneas",
    11: "yveltal",
  };

  return (
    <div className="gameboard">
      <GenerateMultipleCards
        randomArray={randomArray}
        pokemonObject={pokemonObject}
      />
    </div>
  );
}

export { Gameboard };
