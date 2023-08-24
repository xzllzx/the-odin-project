import { Link } from "react-router-dom";

import { productObject } from "../data";
import { ShopProductList } from "../components/Product";

function Cart() {
  return (
    <div>
      Shopping cart is here
      <ShopProductList />
      <Link to="/cart/checkout">Checkout</Link>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      Checkout here
      <Link to="/cart/payment">Payment</Link>
    </div>
  );
}

function Payment() {
  return <div>Empty payment page here</div>;
}

export { Cart, Checkout, Payment };
