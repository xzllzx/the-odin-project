import { useState, useEffect } from "react";

function GenerateMultipleCards({ numCards }) {
  for (let i = 0; i < numCards; i++) {
    return <div className="test-name">testing</div>;
  }
}

function Card({ pokemonName }) {
  const [imageUrl, setImageUrl] = useState(null);

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
    <>
      <img src={imageUrl} alt="Pokemon Image" />
    </>
  );
}

export { GenerateMultipleCards, Card };
