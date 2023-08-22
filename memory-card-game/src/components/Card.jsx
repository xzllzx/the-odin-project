import { capitalizeFirstLetter } from "../utils";
import { useState, useEffect, useContext } from "react";
import { CardContext } from "../Game";

function GenerateMultipleCards({ randomArray, pokemonObject }) {
  return (
    <div className="card-list">
      {randomArray.map((element) => (
        <Card
          key={element}
          index={element}
          pokemonName={pokemonObject[element]}
        />
      ))}
    </div>
  );
}

function Card({ index, pokemonName }) {
  const [imageUrl, setImageUrl] = useState(null);
  const cardContext = useContext(CardContext);

  function handleClick(e) {
    const cardId = e.target.closest(".card").id.slice(-1);

    // Select a previously selected card
    if (cardContext.selectedCards[cardId]) {
      // Create new array of unselected cards
      cardContext.setSelectedCards(new Array(12).fill(false));
      cardContext.setCurrentScore(0);
      // Select a new card
    } else {
      const newSelectedCards = [...cardContext.selectedCards];
      newSelectedCards[cardId] = true;
      cardContext.setSelectedCards(newSelectedCards);
      cardContext.setCurrentScore(cardContext.currentScore + 1);
    }

    console.log(cardContext.selectedCards);
  }

  // Function to fetch image
  useEffect(() => {
    const getPokemonImageUrl = async (pokemonUrl) => {
      const imageUrl = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonUrl}`
      )
        .then((response) => response.json())
        .then((response) => response.sprites.front_default);

      return imageUrl;
    };

    getPokemonImageUrl(pokemonName).then((imageUrl) => setImageUrl(imageUrl));
  }, [pokemonName]);

  return (
    <div className="card" id={`card-${index}`} onClick={handleClick}>
      <img className="pokemon-image" src={imageUrl} alt="Pokemon Image" />
      <div className="pokemon-name">{capitalizeFirstLetter(pokemonName)}</div>
    </div>
  );
}

export { GenerateMultipleCards, Card };
