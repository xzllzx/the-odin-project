import { ProductList } from "../components/Product";

export default function Shop() {
  return (
    <div id="shop">
      <p className="welcome-message">Hello there, shopper!</p>
      <div className="product-list">
        <ProductList isShop={true} />
      </div>
    </div>
  );
}
