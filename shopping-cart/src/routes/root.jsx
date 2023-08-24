import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { useState, createContext } from "react";

import { Navbar } from "../components/Navbar";
import Home from "./home";
import { useContext } from "react";

import { productObject } from "../data";

const CartContext = createContext();

export default function Root() {
  const [cart, setCart] = useState(
    new Array(Object.keys(productObject).length).fill(0)
  );

  return (
    <CartContext.Provider value={{ cart, setCart }}>
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
