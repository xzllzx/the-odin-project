import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <div className="logo">Logo here</div>
      <Link to="/">Home</Link>
      <Link to="/shop/">Shop</Link>
      <Link to="/cart/">Cart</Link>
    </div>
  );
}

function ShopButton() {
  return;
}

export { Navbar };
