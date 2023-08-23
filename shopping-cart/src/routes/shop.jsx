import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div id="shop">
      Hello there, shopper!
      <div className="navigation">
        <Link to="/cart/">Cart</Link>
      </div>
    </div>
  );
}
