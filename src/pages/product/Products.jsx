import { PRODUCTS } from "../../products";
import { Product } from "./Product";

export const Products = () => {
  return (
    <div className="products" style={{ margin: "10px" }}>
      <div className="products-title">
        <h2
          className="pt-3 pb-2 fw-bold
        "
          style={{ marginLeft: "70px" }}
        >
          Products
        </h2>
      </div>
      <div className="products-list d-flex flex-wrap gap-3  mb-3 justify-content-center">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
