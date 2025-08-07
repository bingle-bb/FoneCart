import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const FavouriteItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, favouriteIds, togglefavourite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favouriteId = favouriteIds.find((fid) => fid === id);

  return (
    <div
      className="card d-flex flex-column"
      style={{
        width: "18rem",
        height: "25rem",
        backgroundColor: "#ebe5fcd2",
        overflow: "hidden",
      }}
    >
      <img
        src={productImage}
        className="card-img-top"
        alt={productName}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <div className="d-flex justify-content-center gap-3">
          <button
            type="button"
            className="btn  position-relative"
            style={{
              backgroundColor: "#A89DEA",
            }}
            onClick={() => addToCart(id)}
          >
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
  );
};
