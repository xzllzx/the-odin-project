import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { useState, createContext } from "react";

import { Navbar } from "../components/Navbar";

import { productList } from "../data";
import { mapArrayToObject } from "../utils";

const CartContext = createContext();

export default function Root() {
  const [cart, setCart] = useState(
    new Array(Object.keys(productList).length).fill(0)
  );
  const [productDetails, setProductDetails] = useState(
    mapArrayToObject(productList)
  );

  return (
    <CartContext.Provider
      value={{ cart, setCart, productDetails, setProductDetails }}
    >
      <div id="header">
        <Navbar />
      </div>
      <div id="main-content">
        <Outlet />
      </div>
    </CartContext.Provider>
  );
}

export { CartContext };
