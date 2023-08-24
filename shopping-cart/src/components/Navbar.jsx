import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/logo.png";

import { CartContext } from "../routes/root";

function Navbar() {
  const cartContext = useContext(CartContext);

  return (
    <nav className="navigation">
      <img src={Image} alt="Logo" className="logo" />
      <Link to="/">Home</Link>
      <Link to="/shop/">Shop</Link>
      <Link to="/cart/">
        Cart (
        {cartContext.cart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0)}
        )
      </Link>
    </nav>
  );
}

function ShopButton() {
  return;
}

export { Navbar };
