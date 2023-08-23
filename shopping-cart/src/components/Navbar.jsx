import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation" id={`card-1`}>
      <div className="pokemon-name">Nav bar here</div>
      <Link to="/">Home</Link> <br />
      <Link to="/shop/">Shop</Link>
    </div>
  );
}

function ShopButton() {
  return;
}

export { Navbar };
