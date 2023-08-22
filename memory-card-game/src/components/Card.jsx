import { capitalizeFirstLetter } from "../utils";
import { useState, useEffect, useContext } from "react";
import { CardContext } from "../Game";

function GenerateMultipleCards({ pokemonObject }) {
  return (
    <div className="card-list">
      {Object.keys(pokemonObject).map((key) => (
        <Card key={key} index={key} pokemonName={pokemonObject[key]} />
      ))}
    </div>
  );
}

function Card({ index, pokemonName }) {
  const [imageUrl, setImageUrl] = useState(null);
  const cardContext = useContext(CardContext);

  function handleClick(e) {
    const card = e.target.closest(".card");
    const cardId = card.id.slice(-1);

    // Select a previously selected card
    if (cardContext.selectedCards[cardId]) {
      const unselectedCards = new Array(12).fill(false);
      unselectedCards[cardId] = true;
      cardContext.setCurrentScore(1);
      cardContext.setSelectedCards(unselectedCards);
      // Select a new card
    } else {
      console.log(cardContext.selectedCards[cardId]);
      cardContext.setCurrentScore(cardContext.currentScore + 1);
      const newSelectedCards = [...cardContext.selectedCards];
      newSelectedCards[cardId] = true;
      cardContext.setSelectedCards(newSelectedCards);
    }

    console.log(cardId, cardContext.selectedCards, cardContext.currentScore);
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
