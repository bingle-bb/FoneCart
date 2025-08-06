import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, favouriteIds, toggleFavourite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favouriteId = favouriteIds.find((fid) => fid === id);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/product/${id}`} className="btn btn-link">
            {productName}
          </Link>
        </h5>

        <p className="card-text">${price}</p>
        <button
          type="button"
          className="btn btn-primary position-relative"
          onClick={() => addToCart(id)}
        >
          {" "}
          <FontAwesomeIcon icon={faCartShopping} />
          {cartItem?.count > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem.count}
            </span>
          )}
        </button>
        <button
          type="button"
          className={
            "btn btn-outline-primary position-relative " +
            (favouriteId && "text-danger")
          }
          onClick={() => toggleFavourite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};
