import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  let totalAmount = getTotalAmount();

  const navigate = useNavigate();
  return (
    <div className="cart" style={{ margin: "20px" }}>
      <div className="cart-title  ">
        <h3 className="fw-bold">Your Cart Items</h3>
      </div>
      <div className="d-flex flex-row gap-2">
        <div className="d-flex flex-wrap gap-2">
          {cartItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return (
              <CartItem data={product} qty={item.count} key={product.id} />
            );
          })}
        </div>
        <div className="me-4">
          <div className="cart-info d-flex flex-column gap-1 ">
            Subtotal: ${totalAmount}
            <button
              className="btn "
              style={{
                backgroundColor: "#a89dea",
              }}
            >
              Checkout
            </button>
            <button
              className="btn "
              style={{
                backgroundColor: "#a89dea",
              }}
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
