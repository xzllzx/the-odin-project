import { useState, useEffect } from "react";

function GenerateMultipleCards({ pokemonList }) {
  console.log(pokemonList);
  return (
    <div className="card-list">
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemonName={pokemon} />
      ))}
    </div>
  );
}

function Card({ key, pokemonName }) {
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
    <div className="card">
      <img
        className="pokemon-image"
        key={key}
        src={imageUrl}
        alt="Pokemon Image"
      />
      <div className="pokemon-name">{pokemonName}</div>
    </div>
  );
}

export { GenerateMultipleCards, Card };
