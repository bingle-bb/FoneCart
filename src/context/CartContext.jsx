import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";
export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [favouriteIds, setFavouriteIds] = useState([]);

  useEffect(() => {
    console.log(cartItems, favouriteIds);
  }, [cartItems, favouriteIds]);

  const addToCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) {
      setCartItems([...cartItems, { id, count: 1 }]);
    } else {
      const updatedCart = cartItems.map((eachItem) => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            count: eachItem.count + 1,
          };
        }
        return eachItem;
      });
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let updatedCart;
      if (item.count === 1) {
        updatedCart = cartItems.filter((item) => item.id !== id);
      } else {
        updatedCart = cartItems.map((eachItem) => {
          if (eachItem.id === id) {
            return {
              ...eachItem,
              count: eachItem.count - 1,
            };
          }
          return eachItem;
        });
      }
      setCartItems(updatedCart);
    }
  };

  const updateCartItemCount = (count, id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let updatedCart;
      if (count === 0) {
        updatedCart = cartItems.filter((item) => item.id !== id);
      } else {
        updatedCart = cartItems.map((eachItem) => {
          if (eachItem.id === id) {
            return {
              ...eachItem,
              count: count,
            };
          }
          return eachItem;
        });
      }
      setCartItems(updatedCart);
    }
  };

  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((sum, item) => {
      const product = PRODUCTS.find((product) => product.id === item.id);
      if (item.count === 1) {
        sum += product.price;
      } else {
        sum += product.price * item.count;
      }
      return sum;
    }, 0);
    return totalAmount.toFixed(2);
  };

  const toggleFavourite = (id) => {
    const favouriteId = favouriteIds.find((fid) => fid === id);
    if (favouriteId) {
      const updateIds = favouriteIds.filter((fid) => fid !== id);
      setFavouriteIds(updateIds);
    } else {
      setFavouriteIds([...favouriteIds, id]);
    }
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalAmount,
    favouriteIds,
    toggleFavourite,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
