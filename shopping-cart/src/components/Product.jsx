import { useState, useEffect, useContext } from "react";

import { capitalizeFirstLetter } from "../utils";

import { productList } from "../data";
import { CartContext } from "../routes/root";

function ProductList({ isShop }) {
  if (isShop)
    return (
      <>
        {productList.map((element, index) => (
          <ShopProduct id={index} key={index} name={element} />
        ))}
      </>
    );
  else
    return (
      <>
        {productList.map((element, index) => (
          <CartProduct id={index} key={index} name={element} />
        ))}
      </>
    );
}

function ShopProduct({ id, name }) {
  const [count, setCount] = useState(0);
  const cartContext = useContext(CartContext);

  function addToCart(e) {
    const productId = e.target.closest(".product").id.slice(-1);
    const updatedCart = [...cartContext.cart];
    updatedCart[productId] += count;
    setCount(0);
    cartContext.setCart(updatedCart);
  }

  function changeShopItemCount(e, toAdd) {
    const product = e.target.closest(".product");
    const input = product.querySelector("input").value;
    if (toAdd) setCount(Math.max(0, Number(input) + 1));
    else setCount(Math.max(0, Number(input) - 1));
  }

  return (
    <div className="shop product" id={`shop-product-${id}`}>
      <Product id={id} name={name} />
      <div className="change-count">
        <button onClick={(e) => changeShopItemCount(e, true)}>+</button>
        <input
          type="text"
          name="shop-count"
          id="shop-count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={(e) => changeShopItemCount(e, false)}>-</button>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

function CartProduct({ id, name }) {
  const cartContext = useContext(CartContext);
  const totalItemPrice = (
    cartContext.cart[id] * cartContext.productDetails[id].price
  ).toFixed(2);

  function removeFromCart(e) {
    const productId = e.target.closest(".product").id.slice(-1);
    const updatedCart = [...cartContext.cart];
    updatedCart[productId] = 0;
    cartContext.setCart(updatedCart);
  }

  function changeCartItemCount(e, newCount) {
    const productId = e.target.closest(".product").id.slice(-1);
    const updatedCart = [...cartContext.cart];
    if (newCount === "-") updatedCart[productId]--;
    else if (newCount === "+") updatedCart[productId]++;
    else updatedCart[productId] = Math.max(0, Number(newCount));
    cartContext.setCart(updatedCart);
  }

  if (cartContext.cart[id] <= 0) {
    return;
  }

  return (
    <div className="cart product" id={`cart-product-${id}`}>
      <Product id={id} name={name} />
      <div className="change-count">
        <button onClick={(e) => changeCartItemCount(e, "+")}>+</button>
        <input
          type="text"
          name="cart-count"
          id="cart-count"
          value={cartContext.cart[id]}
          onChange={(e) => changeCartItemCount(e, e.target.value)}
        />
        {/* <div className="cart-count">{cartContext.cart[id]}</div> */}
        <button onClick={(e) => changeCartItemCount(e, "-")}>-</button>
      </div>
      <div className="price">Total price: ${totalItemPrice}</div>
      <button className="remove-from-cart" onClick={removeFromCart}>
        Remove from Cart
      </button>
    </div>
  );
}

function Product({ id, name }) {
  const [imageUrl, setImageUrl] = useState(null);
  const cartContext = useContext(CartContext);

  // Function to fetch image
  useEffect(() => {
    const getPokemonJson = async (pokemonUrl) => {
      const responseJson = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonUrl}`
      ).then((response) => response.json());

      return responseJson;
    };

    getPokemonJson(name).then((response) => {
      setImageUrl(response.sprites.front_default);

      const newPrice = (response.id + response.base_experience / 100).toFixed(
        2
      );

      const newProductDetails = { ...cartContext.productDetails };
      newProductDetails[id].price = newPrice;

      cartContext.setProductDetails(newProductDetails);
    });
  }, [name]);

  return (
    <>
      <div className="name">
        Product {id} is {capitalizeFirstLetter(name)} at $
        {cartContext.productDetails[id].price}
      </div>
      <img className="product-image" src={imageUrl} alt="Product Image" />
    </>
  );
}

export { ProductList };
