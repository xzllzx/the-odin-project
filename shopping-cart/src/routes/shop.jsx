import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { capitalizeFirstLetter } from "../utils";

export default function Shop() {
  return (
    <div id="shop">
      <p>Hello there, shopper!</p>
      <div className="product-list">
        <ProductList />
      </div>
    </div>
  );
}

function ProductList() {
  const productObject = {
    0: "arceus",
    1: "mewtwo",
    2: "slaking",
    // 3: "zacian",
    // 4: "rayquaza",
    // 5: "lugia",
    // 6: "palkia",
    // 7: "dialga",
    // 8: "kyurem",
    // 9: "eternatus",
    // 10: "xerneas",
    // 11: "yveltal",
  };

  return (
    <>
      {Object.keys(productObject).map((key) => (
        <Product id={key} name={productObject[key]} />
      ))}
    </>
  );
}

function Product({ id, name }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [price, setPrice] = useState(null);

  // Function to fetch image
  useEffect(() => {
    const getPokemonJson = async (pokemonUrl) => {
      const responseJson = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonUrl}`
      ).then((response) => response.json());

      console.log(responseJson);

      return responseJson;
    };

    getPokemonJson(name).then((response) => {
      setImageUrl(response.sprites.front_default);
      setPrice((response.id + response.base_experience / 100).toFixed(2));
    });
  }, [name]);

  return (
    <div className="product">
      <div className="name">
        Product {id} is {capitalizeFirstLetter(name)} at ${price}
      </div>
      <img className="product-image" src={imageUrl} alt="Product Image" />
    </div>
  );
}
