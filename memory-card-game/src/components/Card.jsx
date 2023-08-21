import { useState, useEffect } from "react";

function Card() {
  const [pokemon, setPokemon] = useState("ditto");
  const [imageUrl, setImageUrl] = useState(null);

  // Function to fetch image
  useEffect(() => {
    const getPokemonImage = async () => {
      const image = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((response) => {
          return response.sprites.front_default;
        });
      setImageUrl(image);
    };

    getPokemonImage();
  }, [pokemon]);

  return (
    <>
      <img src={imageUrl} alt="Pokemon Image" />
    </>
  );
}

export { Card };
