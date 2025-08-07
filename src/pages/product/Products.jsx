import { PRODUCTS } from "../../products";
import { Product } from "./Product";

export const Products = () => {
  return (
    <div className="products" style={{ margin: "0px" }}>
      <div className="products-title">
        <h1
          className="pt-4 pb-4"
          style={{ marginLeft: "98px", fontWeight: "900px" }}
        >
          Products
        </h1>
      </div>
      <div className="products-list d-flex flex-wrap gap-2  justify-content-center">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
