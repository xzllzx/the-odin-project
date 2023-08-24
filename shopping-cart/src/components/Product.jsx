import { useState, useEffect, useContext } from "react";

import { capitalizeFirstLetter } from "../utils";

import { productObject } from "../data";
import { CartContext } from "../routes/root";

function ShopProductList() {
  return (
    <>
      {Object.keys(productObject).map((key) => (
        <ShopProduct id={key} name={productObject[key]} />
      ))}
    </>
  );
}

function ShopProduct({ id, name }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [price, setPrice] = useState(null);

  const cartContext = useContext(CartContext);

  function addToCart(e) {
    const productId = e.target.closest(".product").id.slice(-1);
    console.log(productId);
    const updatedCart = [...cartContext.cart];
    updatedCart[productId]++;
    cartContext.setCart(updatedCart);
    console.log(cartContext.cart);
  }

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
    <div className="product" id={`product-${id}`}>
      <div className="name">
        ShopProduct {id} is {capitalizeFirstLetter(name)} at ${price}
      </div>
      <img className="product-image" src={imageUrl} alt="Product Image" />
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export { ShopProductList, ShopProduct };
