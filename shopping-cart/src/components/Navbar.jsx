import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [imageUrl, setImageUrl] = useState(null);

  // Function to fetch image
  //   useEffect(() => {
  //     const getPokemonImageUrl = async (pokemonUrl) => {
  //       const imageUrl = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemonUrl}`
  //       )
  //         .then((response) => response.json())
  //         .then((response) => response.sprites.front_default);

  //       return imageUrl;
  //     };

  //     getPokemonImageUrl(pokemonName).then((imageUrl) => setImageUrl(imageUrl));
  //   }, [pokemonName]);

  return (
    <div className="card" id={`card-1`}>
      <div className="pokemon-name">Nav bar here</div>

      <Link to="/">Home</Link>
      <br />

      <Link to="/shop/">Shop</Link>
    </div>
  );
}

function ShopButton() {
  return;
}

export { Navbar };
