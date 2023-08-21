import { useState } from "react";
import { GenerateMultipleCards, Card } from "./Card";

function Gameboard({ selectedCards }) {
  const pokemonList = [
    "Arceus",
    "Mewtwo",
    "Mew",
    "Rayquaza",
    "Lugia",
    "Ditto",
    "Palkia",
    "Dialga",
    "Kyurem",
    "Eternatus",
    "Xerneas",
    "Yveltal",
  ];

  const [cardList, setCardList] = useState([]);

  return (
    <div className="gameboard">
      <GenerateMultipleCards pokemonList={pokemonList} />
    </div>
  );
}

export { Gameboard };
