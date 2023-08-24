import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navigation">
      <img src={Image} alt="Logo" className="logo" />
      <Link to="/">Home</Link>
      <Link to="/shop/">Shop</Link>
      <Link to="/cart/">Cart</Link>
    </nav>
  );
}

function ShopButton() {
  return;
}

export { Navbar };
