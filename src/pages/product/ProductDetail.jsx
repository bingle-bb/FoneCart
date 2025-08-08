import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const ProductDetail = () => {
  const params = useParams();
  const product = PRODUCTS.find((product) => product.id === Number(params.id));
  const { id, productName, productImage, price, description } = product;
  const { cartItems, addToCart, favouriteIds, toggleFavourite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favouriteId = favouriteIds.find((fid) => fid === id);
  const relatedItems = PRODUCTS.filter(
    (product) => product.id !== Number(params.id)
  );

  return (
    <div className="container">
      <h3 className="fw-bold mt-3">Product Detail</h3>

      <div
        className="card mb-3"
        style={{
          backgroundColor: "#ebe5fcd2",
          overflow: "hidden",
        }}
      >
        <div className="row g-0 mt-3 ">
          <div className="col-md-4">
            <img
              src={productImage}
              className="img-fluid rounded-start"
              alt={productName}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body mt-4 ">
              <h5 className="card-title">{productName}</h5>
              <p className="card-text">${price}</p>
              <p className="card-text">{description}</p>

              <div className="d-flex gap-2 ">
                <button
                  type="button"
                  className="btn position-relative gap-3"
                  style={{
                    backgroundColor: "#A89DEA",
                  }}
                  onClick={() => addToCart(id)}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItem?.count}
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    "btn position-relative " + (favouriteId && "text-danger")
                  }
                  style={{
                    outline: "1px solid #A89DEA",
                  }}
                  onClick={() => toggleFavourite(id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4 fw-bold">Related Products</h3>

      <div className="row g-1">
        {relatedItems.map((product) => (
          <div className="col-6 col-md-3 col-lg-2  mb-3" key={product.id}>
            <div
              className="card   shadow-sm"
              style={{
                width: "11rem",
                height: "18rem",
                borderRadius: "10px",
                backgroundColor: "#ebe5fcd2",
                overflow: "hidden",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={product.productImage}
                  className="card-img-top"
                  alt={product.productName}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="card-body text-center ">
                <h5
                  className="card-title mb-2 text-info"
                  style={{ fontSize: "1rem" }}
                >
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      textDecoration: "none",

                      fontWeight: "600",
                    }}
                  >
                    {product.productName}
                  </Link>
                </h5>
                <p className="card-text mb-0 fw-light">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
