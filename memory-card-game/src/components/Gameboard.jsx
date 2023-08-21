import { useState } from "react";
import { GenerateMultipleCards, Card } from "./Card";

function Gameboard({ selectedCards }) {
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

  const [cardList, setCardList] = useState([]);

  return (
    <div className="gameboard">
      <GenerateMultipleCards pokemonList={pokemonList} />
    </div>
  );
}

export { Gameboard };
