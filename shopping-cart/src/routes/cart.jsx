import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductList } from "../components/Product";

import { CartContext } from "../routes/root";

function Cart() {
  const cartContext = useContext(CartContext);

  let totalPrice = 0;
  cartContext.cart.forEach((element, index) => {
    const itemPrice = element * cartContext.productDetails[index].price;
    totalPrice += itemPrice;
  });

  return (
    <div className="cart">
      <ProductList isShop={false} />
      <div className="price">${totalPrice}</div>
      <Link to="/cart/checkout">Checkout</Link>
    </div>
  );
}

function Checkout() {
  return (
    <div className="checkout">
      <Link to="/cart/payment">Payment</Link>
    </div>
  );
}

function Payment() {
  return <div>Empty payment page here</div>;
}

export { Cart, Checkout, Payment };
