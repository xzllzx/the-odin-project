import { ShopProductList } from "../components/Product";

export default function Shop() {
  return (
    <div id="shop">
      <p>Hello there, shopper!</p>
      <div className="product-list">
        <ShopProductList />
      </div>
    </div>
  );
}
