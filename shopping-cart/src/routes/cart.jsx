import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      Shopping cart is here
      <div className="navigation">
        <Link to="/cart/checkout">Checkout</Link>
      </div>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      Checkout here
      <div className="navigation">
        <Link to="/cart/payment">Payment</Link>
      </div>
    </div>
  );
}

function Payment() {
  return <div>Empty payment page here</div>;
}

export { Cart, Checkout, Payment };
